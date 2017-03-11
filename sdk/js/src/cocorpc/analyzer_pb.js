/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.cocorpc.AnalyzeFailure', null, global);
goog.exportSymbol('proto.cocorpc.AnalyzeRequest', null, global);
goog.exportSymbol('proto.cocorpc.AnalyzeResourceFailure', null, global);
goog.exportSymbol('proto.cocorpc.AnalyzeResourceRequest', null, global);
goog.exportSymbol('proto.cocorpc.AnalyzeResourceResponse', null, global);
goog.exportSymbol('proto.cocorpc.AnalyzeResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cocorpc.AnalyzeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeRequest.displayName = 'proto.cocorpc.AnalyzeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pkg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeRequest}
 */
proto.cocorpc.AnalyzeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeRequest;
  return proto.cocorpc.AnalyzeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeRequest}
 */
proto.cocorpc.AnalyzeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPkg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPkg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pkg = 1;
 * @return {string}
 */
proto.cocorpc.AnalyzeRequest.prototype.getPkg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cocorpc.AnalyzeRequest.prototype.setPkg = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cocorpc.AnalyzeResponse.repeatedFields_, null);
};
goog.inherits(proto.cocorpc.AnalyzeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeResponse.displayName = 'proto.cocorpc.AnalyzeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cocorpc.AnalyzeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    failuresList: jspb.Message.toObjectList(msg.getFailuresList(),
    proto.cocorpc.AnalyzeFailure.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeResponse}
 */
proto.cocorpc.AnalyzeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeResponse;
  return proto.cocorpc.AnalyzeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeResponse}
 */
proto.cocorpc.AnalyzeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cocorpc.AnalyzeFailure;
      reader.readMessage(value,proto.cocorpc.AnalyzeFailure.deserializeBinaryFromReader);
      msg.addFailures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailuresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cocorpc.AnalyzeFailure.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AnalyzeFailure failures = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.cocorpc.AnalyzeFailure>}
 */
proto.cocorpc.AnalyzeResponse.prototype.getFailuresList = function() {
  return /** @type{!Array.<!proto.cocorpc.AnalyzeFailure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cocorpc.AnalyzeFailure, 1));
};


/** @param {!Array.<!proto.cocorpc.AnalyzeFailure>} value */
proto.cocorpc.AnalyzeResponse.prototype.setFailuresList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cocorpc.AnalyzeFailure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cocorpc.AnalyzeFailure}
 */
proto.cocorpc.AnalyzeResponse.prototype.addFailures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cocorpc.AnalyzeFailure, opt_index);
};


proto.cocorpc.AnalyzeResponse.prototype.clearFailuresList = function() {
  this.setFailuresList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cocorpc.AnalyzeFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeFailure.displayName = 'proto.cocorpc.AnalyzeFailure';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeFailure} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeFailure}
 */
proto.cocorpc.AnalyzeFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeFailure;
  return proto.cocorpc.AnalyzeFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeFailure}
 */
proto.cocorpc.AnalyzeFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeFailure} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.cocorpc.AnalyzeFailure.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cocorpc.AnalyzeFailure.prototype.setReason = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cocorpc.AnalyzeResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeResourceRequest.displayName = 'proto.cocorpc.AnalyzeResourceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    properties: (f = msg.getProperties()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeResourceRequest}
 */
proto.cocorpc.AnalyzeResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeResourceRequest;
  return proto.cocorpc.AnalyzeResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeResourceRequest}
 */
proto.cocorpc.AnalyzeResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProperties();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.cocorpc.AnalyzeResourceRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cocorpc.AnalyzeResourceRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional google.protobuf.Struct properties = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.cocorpc.AnalyzeResourceRequest.prototype.getProperties = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.cocorpc.AnalyzeResourceRequest.prototype.setProperties = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.cocorpc.AnalyzeResourceRequest.prototype.clearProperties = function() {
  this.setProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cocorpc.AnalyzeResourceRequest.prototype.hasProperties = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cocorpc.AnalyzeResourceResponse.repeatedFields_, null);
};
goog.inherits(proto.cocorpc.AnalyzeResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeResourceResponse.displayName = 'proto.cocorpc.AnalyzeResourceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cocorpc.AnalyzeResourceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    failuresList: jspb.Message.toObjectList(msg.getFailuresList(),
    proto.cocorpc.AnalyzeResourceFailure.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeResourceResponse}
 */
proto.cocorpc.AnalyzeResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeResourceResponse;
  return proto.cocorpc.AnalyzeResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeResourceResponse}
 */
proto.cocorpc.AnalyzeResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cocorpc.AnalyzeResourceFailure;
      reader.readMessage(value,proto.cocorpc.AnalyzeResourceFailure.deserializeBinaryFromReader);
      msg.addFailures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailuresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.cocorpc.AnalyzeResourceFailure.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AnalyzeResourceFailure failures = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.cocorpc.AnalyzeResourceFailure>}
 */
proto.cocorpc.AnalyzeResourceResponse.prototype.getFailuresList = function() {
  return /** @type{!Array.<!proto.cocorpc.AnalyzeResourceFailure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cocorpc.AnalyzeResourceFailure, 1));
};


/** @param {!Array.<!proto.cocorpc.AnalyzeResourceFailure>} value */
proto.cocorpc.AnalyzeResourceResponse.prototype.setFailuresList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cocorpc.AnalyzeResourceFailure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cocorpc.AnalyzeResourceFailure}
 */
proto.cocorpc.AnalyzeResourceResponse.prototype.addFailures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cocorpc.AnalyzeResourceFailure, opt_index);
};


proto.cocorpc.AnalyzeResourceResponse.prototype.clearFailuresList = function() {
  this.setFailuresList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cocorpc.AnalyzeResourceFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cocorpc.AnalyzeResourceFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cocorpc.AnalyzeResourceFailure.displayName = 'proto.cocorpc.AnalyzeResourceFailure';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.cocorpc.AnalyzeResourceFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cocorpc.AnalyzeResourceFailure} msg The msg instance to transform.
 * @return {!Object}
 */
proto.cocorpc.AnalyzeResourceFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    property: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cocorpc.AnalyzeResourceFailure}
 */
proto.cocorpc.AnalyzeResourceFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cocorpc.AnalyzeResourceFailure;
  return proto.cocorpc.AnalyzeResourceFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cocorpc.AnalyzeResourceFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cocorpc.AnalyzeResourceFailure}
 */
proto.cocorpc.AnalyzeResourceFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProperty(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cocorpc.AnalyzeResourceFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cocorpc.AnalyzeResourceFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cocorpc.AnalyzeResourceFailure} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.cocorpc.AnalyzeResourceFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProperty();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string property = 1;
 * @return {string}
 */
proto.cocorpc.AnalyzeResourceFailure.prototype.getProperty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.cocorpc.AnalyzeResourceFailure.prototype.setProperty = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.cocorpc.AnalyzeResourceFailure.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.cocorpc.AnalyzeResourceFailure.prototype.setReason = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.cocorpc);
