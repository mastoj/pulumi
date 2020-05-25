package hcl2

import (
	"github.com/hashicorp/hcl/v2"
	"github.com/hashicorp/hcl/v2/hclsyntax"
	"github.com/pulumi/pulumi/pkg/v2/codegen"
	"github.com/pulumi/pulumi/pkg/v2/codegen/hcl2/model"
	"github.com/pulumi/pulumi/pkg/v2/codegen/schema"
	"github.com/pulumi/pulumi/sdk/v2/go/common/util/contract"
	"github.com/zclconf/go-cty/cty"
	"strconv"
)

func sameSchemaTypes(xt, yt model.Type) bool {
	xs, _ := GetSchemaForType(xt)
	ys, _ := GetSchemaForType(yt)

	if xs == ys {
		return true
	}

	xu, ok := xs.(*schema.UnionType)
	if !ok {
		return false
	}
	yu, ok := ys.(*schema.UnionType)
	if !ok {
		return false
	}

	types := codegen.Set{}
	for _, t := range xu.ElementTypes {
		types.Add(t)
	}
	for _, t := range yu.ElementTypes {
		if !types.Has(t) {
			return false
		}
	}
	return true
}

func RewriteConversions(x model.Expression, to model.Type) model.Expression {
	switch x := x.(type) {
	case *model.AnonymousFunctionExpression:
		x.Body = RewriteConversions(x.Body, to)
	case *model.BinaryOpExpression:
		x.LeftOperand = RewriteConversions(x.LeftOperand, model.InputType(x.LeftOperandType()))
		x.RightOperand = RewriteConversions(x.RightOperand, model.InputType(x.RightOperandType()))
	case *model.ConditionalExpression:
		x.Condition = RewriteConversions(x.Condition, model.InputType(model.BoolType))
		x.TrueResult = RewriteConversions(x.TrueResult, to)
		x.FalseResult = RewriteConversions(x.FalseResult, to)

		diags := x.Typecheck(false)
		contract.Assert(len(diags) == 0)
	case *model.ForExpression:
		traverserType := model.NumberType
		if x.Key != nil {
			traverserType = model.StringType
			x.Key = RewriteConversions(x.Key, model.InputType(model.StringType))
		}
		if x.Condition != nil {
			x.Condition = RewriteConversions(x.Condition, model.InputType(model.BoolType))
		}

		valueType, diags := to.Traverse(model.MakeTraverser(traverserType))
		contract.Ignore(diags)

		x.Value = RewriteConversions(x.Value, valueType.(model.Type))

		diags = x.Typecheck(false)
		contract.Assert(len(diags) == 0)
	case *model.FunctionCallExpression:
		args := x.Args
		for _, param := range x.Signature.Parameters {
			if len(args) == 0 {
				break
			}
			args[0] = RewriteConversions(args[0], model.InputType(param.Type))
			args = args[1:]
		}
		if x.Signature.VarargsParameter != nil {
			for i := range args {
				args[i] = RewriteConversions(args[i], model.InputType(x.Signature.VarargsParameter.Type))
			}
		}
	case *model.IndexExpression:
		x.Key = RewriteConversions(x.Key, x.KeyType())
	case *model.ObjectConsExpression:
		for i := range x.Items {
			item := &x.Items[i]

			var traverser hcl.Traverser
			if lit, ok := item.Key.(*model.LiteralValueExpression); ok {
				traverser = hcl.TraverseIndex{Key: lit.Value}
			} else {
				traverser = model.MakeTraverser(model.StringType)
			}
			valueType, diags := to.Traverse(traverser)
			contract.Ignore(diags)

			item.Key = RewriteConversions(item.Key, model.InputType(model.StringType))
			item.Value = RewriteConversions(item.Value, model.InputType(valueType.(model.Type)))
		}
	case *model.TupleConsExpression:
		for i := range x.Expressions {
			valueType, diags := to.Traverse(hcl.TraverseIndex{Key: cty.NumberIntVal(int64(i))})
			contract.Ignore(diags)

			x.Expressions[i] = RewriteConversions(x.Expressions[i], valueType.(model.Type))
		}
	case *model.UnaryOpExpression:
		x.Operand = RewriteConversions(x.Operand, x.OperandType())
	}

	// If the expression's type is directly assignable to the destination type, no conversion is necessary.
	if to.AssignableFrom(x.Type()) && sameSchemaTypes(to, x.Type()) {
		return x
	}
	// If we can convert a primitive value in place, do so.
	if value, ok := convertPrimitiveValues(x, to); ok {
		return value
	}
	return NewConvertCall(x, to)
}

// convertPrimitiveValues returns a new expression if the given expression can be converted to another primitive type
// (bool, int, number, string) that matches the target type.
func convertPrimitiveValues(from model.Expression, to model.Type) (model.Expression, bool) {
	value := cty.NilVal
	switch resolveUnderlyingType(to) {
	case model.BoolType:
		if stringLiteral, ok := extractStringValue(from); ok {
			if b, err := strconv.ParseBool(stringLiteral); err == nil {
				value = cty.BoolVal(b)
			}
		}
	case model.IntType:
		if stringLiteral, ok := extractStringValue(from); ok {
			if i, err := strconv.ParseInt(stringLiteral, 10, 64); err == nil {
				value = cty.NumberIntVal(i)
			}
		}
	case model.NumberType:
		if stringLiteral, ok := extractStringValue(from); ok {
			if f, err := strconv.ParseFloat(stringLiteral, 64); err == nil {
				value = cty.NumberFloatVal(f)
			}
		}
	case model.StringType:
		stringValue := convertLiteralToString(from)
		if stringValue != "" {
			value = cty.StringVal(stringValue)
		}
	}
	if value == cty.NilVal {
		return nil, false
	}

	stringLiteral := model.LiteralValueExpression{Value: value}
	return &stringLiteral, true
}

// resolveUnderlyingType replaces all output(T) and promise(T) types in the input type with their element type and
// removes the none type from unions.
func resolveUnderlyingType(t model.Type) model.Type {
	switch t := t.(type) {
	case *model.OutputType:
		return resolveUnderlyingType(t.ElementType)
	case *model.PromiseType:
		return resolveUnderlyingType(t.ElementType)
	case *model.UnionType:
		var elementTypes []model.Type
		for _, t := range t.ElementTypes {
			if t != model.NoneType {
				elementTypes = append(elementTypes, resolveUnderlyingType(t))
			}
		}
		return model.NewUnionType(elementTypes...)
	}
	return t
}

// extractStringValue returns a string if the given expression is a template expression containing a single string
// literal value.
func extractStringValue(arg model.Expression) (string, bool) {
	switch expr := arg.(type) {
	case *model.TemplateExpression:
		if arg.Type() != model.StringType || len(expr.Parts) != 1 {
			return "", false
		}
		if lit, ok := expr.Parts[0].(*model.LiteralValueExpression); ok && lit.Type() == model.StringType {
			return lit.Value.AsString(), true
		}
	}

	return "", false
}

// convertLiteralToString converts a literal of type Bool, Int, or Number to its string representation. It also handles
// the unary negate operation in front of a literal number.
func convertLiteralToString(from model.Expression) string {
	var stringValue string
	switch expr := from.(type) {
	case *model.UnaryOpExpression:
		if expr.Operation == hclsyntax.OpNegate {
			operandValue := convertLiteralToString(expr.Operand)
			if operandValue != "" {
				stringValue = "-" + operandValue
			}
		}
	case *model.LiteralValueExpression:
		switch expr.Type() {
		case model.BoolType:
			stringValue = strconv.FormatBool(expr.Value.True())
		case model.IntType, model.NumberType:
			stringValue = expr.Value.AsBigFloat().String()
		}
	}
	return stringValue
}
