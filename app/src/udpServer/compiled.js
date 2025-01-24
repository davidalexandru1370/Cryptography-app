/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.udpServerProtocol = (function() {

    /**
     * Namespace udpServerProtocol.
     * @exports udpServerProtocol
     * @namespace
     */
    var udpServerProtocol = {};

    udpServerProtocol.NewUserRequest = (function() {

        /**
         * Properties of a NewUserRequest.
         * @memberof udpServerProtocol
         * @interface INewUserRequest
         * @property {string} name NewUserRequest name
         */

        /**
         * Constructs a new NewUserRequest.
         * @memberof udpServerProtocol
         * @classdesc Represents a NewUserRequest.
         * @implements INewUserRequest
         * @constructor
         * @param {udpServerProtocol.INewUserRequest=} [properties] Properties to set
         */
        function NewUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewUserRequest name.
         * @member {string} name
         * @memberof udpServerProtocol.NewUserRequest
         * @instance
         */
        NewUserRequest.prototype.name = "";

        /**
         * Creates a new NewUserRequest instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {udpServerProtocol.INewUserRequest=} [properties] Properties to set
         * @returns {udpServerProtocol.NewUserRequest} NewUserRequest instance
         */
        NewUserRequest.create = function create(properties) {
            return new NewUserRequest(properties);
        };

        /**
         * Encodes the specified NewUserRequest message. Does not implicitly {@link udpServerProtocol.NewUserRequest.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {udpServerProtocol.INewUserRequest} message NewUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified NewUserRequest message, length delimited. Does not implicitly {@link udpServerProtocol.NewUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {udpServerProtocol.INewUserRequest} message NewUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.NewUserRequest} NewUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.NewUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a NewUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.NewUserRequest} NewUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewUserRequest message.
         * @function verify
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a NewUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.NewUserRequest} NewUserRequest
         */
        NewUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.NewUserRequest)
                return object;
            var message = new $root.udpServerProtocol.NewUserRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a NewUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {udpServerProtocol.NewUserRequest} message NewUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this NewUserRequest to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.NewUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NewUserRequest
         * @function getTypeUrl
         * @memberof udpServerProtocol.NewUserRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NewUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.NewUserRequest";
        };

        return NewUserRequest;
    })();

    udpServerProtocol.ReplyUserResponse = (function() {

        /**
         * Properties of a ReplyUserResponse.
         * @memberof udpServerProtocol
         * @interface IReplyUserResponse
         * @property {string} name ReplyUserResponse name
         */

        /**
         * Constructs a new ReplyUserResponse.
         * @memberof udpServerProtocol
         * @classdesc Represents a ReplyUserResponse.
         * @implements IReplyUserResponse
         * @constructor
         * @param {udpServerProtocol.IReplyUserResponse=} [properties] Properties to set
         */
        function ReplyUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplyUserResponse name.
         * @member {string} name
         * @memberof udpServerProtocol.ReplyUserResponse
         * @instance
         */
        ReplyUserResponse.prototype.name = "";

        /**
         * Creates a new ReplyUserResponse instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {udpServerProtocol.IReplyUserResponse=} [properties] Properties to set
         * @returns {udpServerProtocol.ReplyUserResponse} ReplyUserResponse instance
         */
        ReplyUserResponse.create = function create(properties) {
            return new ReplyUserResponse(properties);
        };

        /**
         * Encodes the specified ReplyUserResponse message. Does not implicitly {@link udpServerProtocol.ReplyUserResponse.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {udpServerProtocol.IReplyUserResponse} message ReplyUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ReplyUserResponse message, length delimited. Does not implicitly {@link udpServerProtocol.ReplyUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {udpServerProtocol.IReplyUserResponse} message ReplyUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.ReplyUserResponse} ReplyUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.ReplyUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReplyUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.ReplyUserResponse} ReplyUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplyUserResponse message.
         * @function verify
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplyUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a ReplyUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.ReplyUserResponse} ReplyUserResponse
         */
        ReplyUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.ReplyUserResponse)
                return object;
            var message = new $root.udpServerProtocol.ReplyUserResponse();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ReplyUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {udpServerProtocol.ReplyUserResponse} message ReplyUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplyUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ReplyUserResponse to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.ReplyUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyUserResponse
         * @function getTypeUrl
         * @memberof udpServerProtocol.ReplyUserResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.ReplyUserResponse";
        };

        return ReplyUserResponse;
    })();

    udpServerProtocol.RequestStartSendingFile = (function() {

        /**
         * Properties of a RequestStartSendingFile.
         * @memberof udpServerProtocol
         * @interface IRequestStartSendingFile
         * @property {string} fileName RequestStartSendingFile fileName
         * @property {number} chunkSize RequestStartSendingFile chunkSize
         * @property {number} chunkCount RequestStartSendingFile chunkCount
         * @property {number} fileId RequestStartSendingFile fileId
         */

        /**
         * Constructs a new RequestStartSendingFile.
         * @memberof udpServerProtocol
         * @classdesc Represents a RequestStartSendingFile.
         * @implements IRequestStartSendingFile
         * @constructor
         * @param {udpServerProtocol.IRequestStartSendingFile=} [properties] Properties to set
         */
        function RequestStartSendingFile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestStartSendingFile fileName.
         * @member {string} fileName
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.fileName = "";

        /**
         * RequestStartSendingFile chunkSize.
         * @member {number} chunkSize
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.chunkSize = 0;

        /**
         * RequestStartSendingFile chunkCount.
         * @member {number} chunkCount
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.chunkCount = 0;

        /**
         * RequestStartSendingFile fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.fileId = 0;

        /**
         * Creates a new RequestStartSendingFile instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {udpServerProtocol.IRequestStartSendingFile=} [properties] Properties to set
         * @returns {udpServerProtocol.RequestStartSendingFile} RequestStartSendingFile instance
         */
        RequestStartSendingFile.create = function create(properties) {
            return new RequestStartSendingFile(properties);
        };

        /**
         * Encodes the specified RequestStartSendingFile message. Does not implicitly {@link udpServerProtocol.RequestStartSendingFile.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {udpServerProtocol.IRequestStartSendingFile} message RequestStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStartSendingFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.chunkSize);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.chunkCount);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.fileId);
            return writer;
        };

        /**
         * Encodes the specified RequestStartSendingFile message, length delimited. Does not implicitly {@link udpServerProtocol.RequestStartSendingFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {udpServerProtocol.IRequestStartSendingFile} message RequestStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStartSendingFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestStartSendingFile message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.RequestStartSendingFile} RequestStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStartSendingFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.RequestStartSendingFile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileName = reader.string();
                        break;
                    }
                case 3: {
                        message.chunkSize = reader.uint32();
                        break;
                    }
                case 4: {
                        message.chunkCount = reader.uint32();
                        break;
                    }
                case 5: {
                        message.fileId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileName"))
                throw $util.ProtocolError("missing required 'fileName'", { instance: message });
            if (!message.hasOwnProperty("chunkSize"))
                throw $util.ProtocolError("missing required 'chunkSize'", { instance: message });
            if (!message.hasOwnProperty("chunkCount"))
                throw $util.ProtocolError("missing required 'chunkCount'", { instance: message });
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestStartSendingFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.RequestStartSendingFile} RequestStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStartSendingFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestStartSendingFile message.
         * @function verify
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestStartSendingFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.fileName))
                return "fileName: string expected";
            if (!$util.isInteger(message.chunkSize))
                return "chunkSize: integer expected";
            if (!$util.isInteger(message.chunkCount))
                return "chunkCount: integer expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            return null;
        };

        /**
         * Creates a RequestStartSendingFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.RequestStartSendingFile} RequestStartSendingFile
         */
        RequestStartSendingFile.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.RequestStartSendingFile)
                return object;
            var message = new $root.udpServerProtocol.RequestStartSendingFile();
            if (object.fileName != null)
                message.fileName = String(object.fileName);
            if (object.chunkSize != null)
                message.chunkSize = object.chunkSize >>> 0;
            if (object.chunkCount != null)
                message.chunkCount = object.chunkCount >>> 0;
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestStartSendingFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {udpServerProtocol.RequestStartSendingFile} message RequestStartSendingFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestStartSendingFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileName = "";
                object.chunkSize = 0;
                object.chunkCount = 0;
                object.fileId = 0;
            }
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                object.fileName = message.fileName;
            if (message.chunkSize != null && message.hasOwnProperty("chunkSize"))
                object.chunkSize = message.chunkSize;
            if (message.chunkCount != null && message.hasOwnProperty("chunkCount"))
                object.chunkCount = message.chunkCount;
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            return object;
        };

        /**
         * Converts this RequestStartSendingFile to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestStartSendingFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestStartSendingFile
         * @function getTypeUrl
         * @memberof udpServerProtocol.RequestStartSendingFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestStartSendingFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.RequestStartSendingFile";
        };

        return RequestStartSendingFile;
    })();

    udpServerProtocol.ReplyStartSendingFile = (function() {

        /**
         * Properties of a ReplyStartSendingFile.
         * @memberof udpServerProtocol
         * @interface IReplyStartSendingFile
         * @property {number} fileId ReplyStartSendingFile fileId
         * @property {number} serverFileId ReplyStartSendingFile serverFileId
         */

        /**
         * Constructs a new ReplyStartSendingFile.
         * @memberof udpServerProtocol
         * @classdesc Represents a ReplyStartSendingFile.
         * @implements IReplyStartSendingFile
         * @constructor
         * @param {udpServerProtocol.IReplyStartSendingFile=} [properties] Properties to set
         */
        function ReplyStartSendingFile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReplyStartSendingFile fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @instance
         */
        ReplyStartSendingFile.prototype.fileId = 0;

        /**
         * ReplyStartSendingFile serverFileId.
         * @member {number} serverFileId
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @instance
         */
        ReplyStartSendingFile.prototype.serverFileId = 0;

        /**
         * Creates a new ReplyStartSendingFile instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {udpServerProtocol.IReplyStartSendingFile=} [properties] Properties to set
         * @returns {udpServerProtocol.ReplyStartSendingFile} ReplyStartSendingFile instance
         */
        ReplyStartSendingFile.create = function create(properties) {
            return new ReplyStartSendingFile(properties);
        };

        /**
         * Encodes the specified ReplyStartSendingFile message. Does not implicitly {@link udpServerProtocol.ReplyStartSendingFile.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {udpServerProtocol.IReplyStartSendingFile} message ReplyStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyStartSendingFile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileId);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.serverFileId);
            return writer;
        };

        /**
         * Encodes the specified ReplyStartSendingFile message, length delimited. Does not implicitly {@link udpServerProtocol.ReplyStartSendingFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {udpServerProtocol.IReplyStartSendingFile} message ReplyStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyStartSendingFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyStartSendingFile message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.ReplyStartSendingFile} ReplyStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyStartSendingFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.ReplyStartSendingFile();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.serverFileId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            if (!message.hasOwnProperty("serverFileId"))
                throw $util.ProtocolError("missing required 'serverFileId'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReplyStartSendingFile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.ReplyStartSendingFile} ReplyStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyStartSendingFile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReplyStartSendingFile message.
         * @function verify
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReplyStartSendingFile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            if (!$util.isInteger(message.serverFileId))
                return "serverFileId: integer expected";
            return null;
        };

        /**
         * Creates a ReplyStartSendingFile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.ReplyStartSendingFile} ReplyStartSendingFile
         */
        ReplyStartSendingFile.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.ReplyStartSendingFile)
                return object;
            var message = new $root.udpServerProtocol.ReplyStartSendingFile();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.serverFileId != null)
                message.serverFileId = object.serverFileId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ReplyStartSendingFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {udpServerProtocol.ReplyStartSendingFile} message ReplyStartSendingFile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReplyStartSendingFile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileId = 0;
                object.serverFileId = 0;
            }
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.serverFileId != null && message.hasOwnProperty("serverFileId"))
                object.serverFileId = message.serverFileId;
            return object;
        };

        /**
         * Converts this ReplyStartSendingFile to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyStartSendingFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyStartSendingFile
         * @function getTypeUrl
         * @memberof udpServerProtocol.ReplyStartSendingFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyStartSendingFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.ReplyStartSendingFile";
        };

        return ReplyStartSendingFile;
    })();

    udpServerProtocol.FileChunk = (function() {

        /**
         * Properties of a FileChunk.
         * @memberof udpServerProtocol
         * @interface IFileChunk
         * @property {number} fileId FileChunk fileId
         * @property {number} chunkNumber FileChunk chunkNumber
         * @property {Uint8Array} chunk FileChunk chunk
         */

        /**
         * Constructs a new FileChunk.
         * @memberof udpServerProtocol
         * @classdesc Represents a FileChunk.
         * @implements IFileChunk
         * @constructor
         * @param {udpServerProtocol.IFileChunk=} [properties] Properties to set
         */
        function FileChunk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileChunk fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.FileChunk
         * @instance
         */
        FileChunk.prototype.fileId = 0;

        /**
         * FileChunk chunkNumber.
         * @member {number} chunkNumber
         * @memberof udpServerProtocol.FileChunk
         * @instance
         */
        FileChunk.prototype.chunkNumber = 0;

        /**
         * FileChunk chunk.
         * @member {Uint8Array} chunk
         * @memberof udpServerProtocol.FileChunk
         * @instance
         */
        FileChunk.prototype.chunk = $util.newBuffer([]);

        /**
         * Creates a new FileChunk instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {udpServerProtocol.IFileChunk=} [properties] Properties to set
         * @returns {udpServerProtocol.FileChunk} FileChunk instance
         */
        FileChunk.create = function create(properties) {
            return new FileChunk(properties);
        };

        /**
         * Encodes the specified FileChunk message. Does not implicitly {@link udpServerProtocol.FileChunk.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {udpServerProtocol.IFileChunk} message FileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileChunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileId);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkNumber);
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chunk);
            return writer;
        };

        /**
         * Encodes the specified FileChunk message, length delimited. Does not implicitly {@link udpServerProtocol.FileChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {udpServerProtocol.IFileChunk} message FileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileChunk message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.FileChunk} FileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileChunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.FileChunk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.chunkNumber = reader.uint32();
                        break;
                    }
                case 3: {
                        message.chunk = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            if (!message.hasOwnProperty("chunkNumber"))
                throw $util.ProtocolError("missing required 'chunkNumber'", { instance: message });
            if (!message.hasOwnProperty("chunk"))
                throw $util.ProtocolError("missing required 'chunk'", { instance: message });
            return message;
        };

        /**
         * Decodes a FileChunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.FileChunk} FileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileChunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileChunk message.
         * @function verify
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileChunk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            if (!$util.isInteger(message.chunkNumber))
                return "chunkNumber: integer expected";
            if (!(message.chunk && typeof message.chunk.length === "number" || $util.isString(message.chunk)))
                return "chunk: buffer expected";
            return null;
        };

        /**
         * Creates a FileChunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.FileChunk} FileChunk
         */
        FileChunk.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.FileChunk)
                return object;
            var message = new $root.udpServerProtocol.FileChunk();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.chunkNumber != null)
                message.chunkNumber = object.chunkNumber >>> 0;
            if (object.chunk != null)
                if (typeof object.chunk === "string")
                    $util.base64.decode(object.chunk, message.chunk = $util.newBuffer($util.base64.length(object.chunk)), 0);
                else if (object.chunk.length >= 0)
                    message.chunk = object.chunk;
            return message;
        };

        /**
         * Creates a plain object from a FileChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {udpServerProtocol.FileChunk} message FileChunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileChunk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileId = 0;
                object.chunkNumber = 0;
                if (options.bytes === String)
                    object.chunk = "";
                else {
                    object.chunk = [];
                    if (options.bytes !== Array)
                        object.chunk = $util.newBuffer(object.chunk);
                }
            }
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.chunkNumber != null && message.hasOwnProperty("chunkNumber"))
                object.chunkNumber = message.chunkNumber;
            if (message.chunk != null && message.hasOwnProperty("chunk"))
                object.chunk = options.bytes === String ? $util.base64.encode(message.chunk, 0, message.chunk.length) : options.bytes === Array ? Array.prototype.slice.call(message.chunk) : message.chunk;
            return object;
        };

        /**
         * Converts this FileChunk to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.FileChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileChunk
         * @function getTypeUrl
         * @memberof udpServerProtocol.FileChunk
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileChunk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.FileChunk";
        };

        return FileChunk;
    })();

    udpServerProtocol.FileEndMd5 = (function() {

        /**
         * Properties of a FileEndMd5.
         * @memberof udpServerProtocol
         * @interface IFileEndMd5
         * @property {number} fileId FileEndMd5 fileId
         * @property {Uint8Array} md5 FileEndMd5 md5
         */

        /**
         * Constructs a new FileEndMd5.
         * @memberof udpServerProtocol
         * @classdesc Represents a FileEndMd5.
         * @implements IFileEndMd5
         * @constructor
         * @param {udpServerProtocol.IFileEndMd5=} [properties] Properties to set
         */
        function FileEndMd5(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileEndMd5 fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.FileEndMd5
         * @instance
         */
        FileEndMd5.prototype.fileId = 0;

        /**
         * FileEndMd5 md5.
         * @member {Uint8Array} md5
         * @memberof udpServerProtocol.FileEndMd5
         * @instance
         */
        FileEndMd5.prototype.md5 = $util.newBuffer([]);

        /**
         * Creates a new FileEndMd5 instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {udpServerProtocol.IFileEndMd5=} [properties] Properties to set
         * @returns {udpServerProtocol.FileEndMd5} FileEndMd5 instance
         */
        FileEndMd5.create = function create(properties) {
            return new FileEndMd5(properties);
        };

        /**
         * Encodes the specified FileEndMd5 message. Does not implicitly {@link udpServerProtocol.FileEndMd5.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {udpServerProtocol.IFileEndMd5} message FileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileEndMd5.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileId);
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.md5);
            return writer;
        };

        /**
         * Encodes the specified FileEndMd5 message, length delimited. Does not implicitly {@link udpServerProtocol.FileEndMd5.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {udpServerProtocol.IFileEndMd5} message FileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileEndMd5.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileEndMd5 message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.FileEndMd5} FileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileEndMd5.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.FileEndMd5();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.md5 = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            if (!message.hasOwnProperty("md5"))
                throw $util.ProtocolError("missing required 'md5'", { instance: message });
            return message;
        };

        /**
         * Decodes a FileEndMd5 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.FileEndMd5} FileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileEndMd5.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileEndMd5 message.
         * @function verify
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileEndMd5.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            if (!(message.md5 && typeof message.md5.length === "number" || $util.isString(message.md5)))
                return "md5: buffer expected";
            return null;
        };

        /**
         * Creates a FileEndMd5 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.FileEndMd5} FileEndMd5
         */
        FileEndMd5.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.FileEndMd5)
                return object;
            var message = new $root.udpServerProtocol.FileEndMd5();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.md5 != null)
                if (typeof object.md5 === "string")
                    $util.base64.decode(object.md5, message.md5 = $util.newBuffer($util.base64.length(object.md5)), 0);
                else if (object.md5.length >= 0)
                    message.md5 = object.md5;
            return message;
        };

        /**
         * Creates a plain object from a FileEndMd5 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {udpServerProtocol.FileEndMd5} message FileEndMd5
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileEndMd5.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileId = 0;
                if (options.bytes === String)
                    object.md5 = "";
                else {
                    object.md5 = [];
                    if (options.bytes !== Array)
                        object.md5 = $util.newBuffer(object.md5);
                }
            }
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = options.bytes === String ? $util.base64.encode(message.md5, 0, message.md5.length) : options.bytes === Array ? Array.prototype.slice.call(message.md5) : message.md5;
            return object;
        };

        /**
         * Converts this FileEndMd5 to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.FileEndMd5
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileEndMd5.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileEndMd5
         * @function getTypeUrl
         * @memberof udpServerProtocol.FileEndMd5
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileEndMd5.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.FileEndMd5";
        };

        return FileEndMd5;
    })();

    udpServerProtocol.RequestFileChunk = (function() {

        /**
         * Properties of a RequestFileChunk.
         * @memberof udpServerProtocol
         * @interface IRequestFileChunk
         * @property {number} fileId RequestFileChunk fileId
         * @property {number} chunkNumber RequestFileChunk chunkNumber
         */

        /**
         * Constructs a new RequestFileChunk.
         * @memberof udpServerProtocol
         * @classdesc Represents a RequestFileChunk.
         * @implements IRequestFileChunk
         * @constructor
         * @param {udpServerProtocol.IRequestFileChunk=} [properties] Properties to set
         */
        function RequestFileChunk(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestFileChunk fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.RequestFileChunk
         * @instance
         */
        RequestFileChunk.prototype.fileId = 0;

        /**
         * RequestFileChunk chunkNumber.
         * @member {number} chunkNumber
         * @memberof udpServerProtocol.RequestFileChunk
         * @instance
         */
        RequestFileChunk.prototype.chunkNumber = 0;

        /**
         * Creates a new RequestFileChunk instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {udpServerProtocol.IRequestFileChunk=} [properties] Properties to set
         * @returns {udpServerProtocol.RequestFileChunk} RequestFileChunk instance
         */
        RequestFileChunk.create = function create(properties) {
            return new RequestFileChunk(properties);
        };

        /**
         * Encodes the specified RequestFileChunk message. Does not implicitly {@link udpServerProtocol.RequestFileChunk.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {udpServerProtocol.IRequestFileChunk} message RequestFileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileChunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileId);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkNumber);
            return writer;
        };

        /**
         * Encodes the specified RequestFileChunk message, length delimited. Does not implicitly {@link udpServerProtocol.RequestFileChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {udpServerProtocol.IRequestFileChunk} message RequestFileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestFileChunk message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.RequestFileChunk} RequestFileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileChunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.RequestFileChunk();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.chunkNumber = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            if (!message.hasOwnProperty("chunkNumber"))
                throw $util.ProtocolError("missing required 'chunkNumber'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestFileChunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.RequestFileChunk} RequestFileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileChunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestFileChunk message.
         * @function verify
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestFileChunk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            if (!$util.isInteger(message.chunkNumber))
                return "chunkNumber: integer expected";
            return null;
        };

        /**
         * Creates a RequestFileChunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.RequestFileChunk} RequestFileChunk
         */
        RequestFileChunk.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.RequestFileChunk)
                return object;
            var message = new $root.udpServerProtocol.RequestFileChunk();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.chunkNumber != null)
                message.chunkNumber = object.chunkNumber >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestFileChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {udpServerProtocol.RequestFileChunk} message RequestFileChunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestFileChunk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fileId = 0;
                object.chunkNumber = 0;
            }
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            if (message.chunkNumber != null && message.hasOwnProperty("chunkNumber"))
                object.chunkNumber = message.chunkNumber;
            return object;
        };

        /**
         * Converts this RequestFileChunk to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.RequestFileChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestFileChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestFileChunk
         * @function getTypeUrl
         * @memberof udpServerProtocol.RequestFileChunk
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestFileChunk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.RequestFileChunk";
        };

        return RequestFileChunk;
    })();

    udpServerProtocol.RequestFileEndMd5 = (function() {

        /**
         * Properties of a RequestFileEndMd5.
         * @memberof udpServerProtocol
         * @interface IRequestFileEndMd5
         * @property {number} fileId RequestFileEndMd5 fileId
         */

        /**
         * Constructs a new RequestFileEndMd5.
         * @memberof udpServerProtocol
         * @classdesc Represents a RequestFileEndMd5.
         * @implements IRequestFileEndMd5
         * @constructor
         * @param {udpServerProtocol.IRequestFileEndMd5=} [properties] Properties to set
         */
        function RequestFileEndMd5(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestFileEndMd5 fileId.
         * @member {number} fileId
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @instance
         */
        RequestFileEndMd5.prototype.fileId = 0;

        /**
         * Creates a new RequestFileEndMd5 instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {udpServerProtocol.IRequestFileEndMd5=} [properties] Properties to set
         * @returns {udpServerProtocol.RequestFileEndMd5} RequestFileEndMd5 instance
         */
        RequestFileEndMd5.create = function create(properties) {
            return new RequestFileEndMd5(properties);
        };

        /**
         * Encodes the specified RequestFileEndMd5 message. Does not implicitly {@link udpServerProtocol.RequestFileEndMd5.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {udpServerProtocol.IRequestFileEndMd5} message RequestFileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileEndMd5.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fileId);
            return writer;
        };

        /**
         * Encodes the specified RequestFileEndMd5 message, length delimited. Does not implicitly {@link udpServerProtocol.RequestFileEndMd5.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {udpServerProtocol.IRequestFileEndMd5} message RequestFileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileEndMd5.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestFileEndMd5 message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.RequestFileEndMd5} RequestFileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileEndMd5.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.RequestFileEndMd5();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fileId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("fileId"))
                throw $util.ProtocolError("missing required 'fileId'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestFileEndMd5 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.RequestFileEndMd5} RequestFileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileEndMd5.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestFileEndMd5 message.
         * @function verify
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestFileEndMd5.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.fileId))
                return "fileId: integer expected";
            return null;
        };

        /**
         * Creates a RequestFileEndMd5 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.RequestFileEndMd5} RequestFileEndMd5
         */
        RequestFileEndMd5.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.RequestFileEndMd5)
                return object;
            var message = new $root.udpServerProtocol.RequestFileEndMd5();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestFileEndMd5 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {udpServerProtocol.RequestFileEndMd5} message RequestFileEndMd5
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestFileEndMd5.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.fileId = 0;
            if (message.fileId != null && message.hasOwnProperty("fileId"))
                object.fileId = message.fileId;
            return object;
        };

        /**
         * Converts this RequestFileEndMd5 to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestFileEndMd5.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestFileEndMd5
         * @function getTypeUrl
         * @memberof udpServerProtocol.RequestFileEndMd5
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestFileEndMd5.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.RequestFileEndMd5";
        };

        return RequestFileEndMd5;
    })();

    udpServerProtocol.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof udpServerProtocol
         * @interface IMessage
         * @property {udpServerProtocol.INewUserRequest|null} [newUserRequest] Message newUserRequest
         * @property {udpServerProtocol.IReplyUserResponse|null} [replyUserResponse] Message replyUserResponse
         * @property {udpServerProtocol.IRequestStartSendingFile|null} [requestStartSendingFile] Message requestStartSendingFile
         * @property {udpServerProtocol.IReplyStartSendingFile|null} [replyStartSendingFile] Message replyStartSendingFile
         * @property {udpServerProtocol.IFileChunk|null} [fileChunk] Message fileChunk
         * @property {udpServerProtocol.IRequestFileChunk|null} [requestFileChunk] Message requestFileChunk
         * @property {udpServerProtocol.IFileEndMd5|null} [fileEndMd5] Message fileEndMd5
         * @property {udpServerProtocol.IRequestFileEndMd5|null} [requestFileEndMd5] Message requestFileEndMd5
         */

        /**
         * Constructs a new Message.
         * @memberof udpServerProtocol
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {udpServerProtocol.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message newUserRequest.
         * @member {udpServerProtocol.INewUserRequest|null|undefined} newUserRequest
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.newUserRequest = null;

        /**
         * Message replyUserResponse.
         * @member {udpServerProtocol.IReplyUserResponse|null|undefined} replyUserResponse
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.replyUserResponse = null;

        /**
         * Message requestStartSendingFile.
         * @member {udpServerProtocol.IRequestStartSendingFile|null|undefined} requestStartSendingFile
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.requestStartSendingFile = null;

        /**
         * Message replyStartSendingFile.
         * @member {udpServerProtocol.IReplyStartSendingFile|null|undefined} replyStartSendingFile
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.replyStartSendingFile = null;

        /**
         * Message fileChunk.
         * @member {udpServerProtocol.IFileChunk|null|undefined} fileChunk
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.fileChunk = null;

        /**
         * Message requestFileChunk.
         * @member {udpServerProtocol.IRequestFileChunk|null|undefined} requestFileChunk
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.requestFileChunk = null;

        /**
         * Message fileEndMd5.
         * @member {udpServerProtocol.IFileEndMd5|null|undefined} fileEndMd5
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.fileEndMd5 = null;

        /**
         * Message requestFileEndMd5.
         * @member {udpServerProtocol.IRequestFileEndMd5|null|undefined} requestFileEndMd5
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Message.prototype.requestFileEndMd5 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message message.
         * @member {"newUserRequest"|"replyUserResponse"|"requestStartSendingFile"|"replyStartSendingFile"|"fileChunk"|"requestFileChunk"|"fileEndMd5"|"requestFileEndMd5"|undefined} message
         * @memberof udpServerProtocol.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "message", {
            get: $util.oneOfGetter($oneOfFields = ["newUserRequest", "replyUserResponse", "requestStartSendingFile", "replyStartSendingFile", "fileChunk", "requestFileChunk", "fileEndMd5", "requestFileEndMd5"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof udpServerProtocol.Message
         * @static
         * @param {udpServerProtocol.IMessage=} [properties] Properties to set
         * @returns {udpServerProtocol.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link udpServerProtocol.Message.verify|verify} messages.
         * @function encode
         * @memberof udpServerProtocol.Message
         * @static
         * @param {udpServerProtocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newUserRequest != null && Object.hasOwnProperty.call(message, "newUserRequest"))
                $root.udpServerProtocol.NewUserRequest.encode(message.newUserRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.replyUserResponse != null && Object.hasOwnProperty.call(message, "replyUserResponse"))
                $root.udpServerProtocol.ReplyUserResponse.encode(message.replyUserResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.requestStartSendingFile != null && Object.hasOwnProperty.call(message, "requestStartSendingFile"))
                $root.udpServerProtocol.RequestStartSendingFile.encode(message.requestStartSendingFile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.replyStartSendingFile != null && Object.hasOwnProperty.call(message, "replyStartSendingFile"))
                $root.udpServerProtocol.ReplyStartSendingFile.encode(message.replyStartSendingFile, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.fileChunk != null && Object.hasOwnProperty.call(message, "fileChunk"))
                $root.udpServerProtocol.FileChunk.encode(message.fileChunk, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.requestFileChunk != null && Object.hasOwnProperty.call(message, "requestFileChunk"))
                $root.udpServerProtocol.RequestFileChunk.encode(message.requestFileChunk, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.fileEndMd5 != null && Object.hasOwnProperty.call(message, "fileEndMd5"))
                $root.udpServerProtocol.FileEndMd5.encode(message.fileEndMd5, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.requestFileEndMd5 != null && Object.hasOwnProperty.call(message, "requestFileEndMd5"))
                $root.udpServerProtocol.RequestFileEndMd5.encode(message.requestFileEndMd5, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link udpServerProtocol.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udpServerProtocol.Message
         * @static
         * @param {udpServerProtocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof udpServerProtocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udpServerProtocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udpServerProtocol.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.newUserRequest = $root.udpServerProtocol.NewUserRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.replyUserResponse = $root.udpServerProtocol.ReplyUserResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.requestStartSendingFile = $root.udpServerProtocol.RequestStartSendingFile.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.replyStartSendingFile = $root.udpServerProtocol.ReplyStartSendingFile.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.fileChunk = $root.udpServerProtocol.FileChunk.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.requestFileChunk = $root.udpServerProtocol.RequestFileChunk.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.fileEndMd5 = $root.udpServerProtocol.FileEndMd5.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.requestFileEndMd5 = $root.udpServerProtocol.RequestFileEndMd5.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof udpServerProtocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udpServerProtocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof udpServerProtocol.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.newUserRequest != null && message.hasOwnProperty("newUserRequest")) {
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.NewUserRequest.verify(message.newUserRequest);
                    if (error)
                        return "newUserRequest." + error;
                }
            }
            if (message.replyUserResponse != null && message.hasOwnProperty("replyUserResponse")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.ReplyUserResponse.verify(message.replyUserResponse);
                    if (error)
                        return "replyUserResponse." + error;
                }
            }
            if (message.requestStartSendingFile != null && message.hasOwnProperty("requestStartSendingFile")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.RequestStartSendingFile.verify(message.requestStartSendingFile);
                    if (error)
                        return "requestStartSendingFile." + error;
                }
            }
            if (message.replyStartSendingFile != null && message.hasOwnProperty("replyStartSendingFile")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.ReplyStartSendingFile.verify(message.replyStartSendingFile);
                    if (error)
                        return "replyStartSendingFile." + error;
                }
            }
            if (message.fileChunk != null && message.hasOwnProperty("fileChunk")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.FileChunk.verify(message.fileChunk);
                    if (error)
                        return "fileChunk." + error;
                }
            }
            if (message.requestFileChunk != null && message.hasOwnProperty("requestFileChunk")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.RequestFileChunk.verify(message.requestFileChunk);
                    if (error)
                        return "requestFileChunk." + error;
                }
            }
            if (message.fileEndMd5 != null && message.hasOwnProperty("fileEndMd5")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.FileEndMd5.verify(message.fileEndMd5);
                    if (error)
                        return "fileEndMd5." + error;
                }
            }
            if (message.requestFileEndMd5 != null && message.hasOwnProperty("requestFileEndMd5")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udpServerProtocol.RequestFileEndMd5.verify(message.requestFileEndMd5);
                    if (error)
                        return "requestFileEndMd5." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udpServerProtocol.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udpServerProtocol.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.udpServerProtocol.Message)
                return object;
            var message = new $root.udpServerProtocol.Message();
            if (object.newUserRequest != null) {
                if (typeof object.newUserRequest !== "object")
                    throw TypeError(".udpServerProtocol.Message.newUserRequest: object expected");
                message.newUserRequest = $root.udpServerProtocol.NewUserRequest.fromObject(object.newUserRequest);
            }
            if (object.replyUserResponse != null) {
                if (typeof object.replyUserResponse !== "object")
                    throw TypeError(".udpServerProtocol.Message.replyUserResponse: object expected");
                message.replyUserResponse = $root.udpServerProtocol.ReplyUserResponse.fromObject(object.replyUserResponse);
            }
            if (object.requestStartSendingFile != null) {
                if (typeof object.requestStartSendingFile !== "object")
                    throw TypeError(".udpServerProtocol.Message.requestStartSendingFile: object expected");
                message.requestStartSendingFile = $root.udpServerProtocol.RequestStartSendingFile.fromObject(object.requestStartSendingFile);
            }
            if (object.replyStartSendingFile != null) {
                if (typeof object.replyStartSendingFile !== "object")
                    throw TypeError(".udpServerProtocol.Message.replyStartSendingFile: object expected");
                message.replyStartSendingFile = $root.udpServerProtocol.ReplyStartSendingFile.fromObject(object.replyStartSendingFile);
            }
            if (object.fileChunk != null) {
                if (typeof object.fileChunk !== "object")
                    throw TypeError(".udpServerProtocol.Message.fileChunk: object expected");
                message.fileChunk = $root.udpServerProtocol.FileChunk.fromObject(object.fileChunk);
            }
            if (object.requestFileChunk != null) {
                if (typeof object.requestFileChunk !== "object")
                    throw TypeError(".udpServerProtocol.Message.requestFileChunk: object expected");
                message.requestFileChunk = $root.udpServerProtocol.RequestFileChunk.fromObject(object.requestFileChunk);
            }
            if (object.fileEndMd5 != null) {
                if (typeof object.fileEndMd5 !== "object")
                    throw TypeError(".udpServerProtocol.Message.fileEndMd5: object expected");
                message.fileEndMd5 = $root.udpServerProtocol.FileEndMd5.fromObject(object.fileEndMd5);
            }
            if (object.requestFileEndMd5 != null) {
                if (typeof object.requestFileEndMd5 !== "object")
                    throw TypeError(".udpServerProtocol.Message.requestFileEndMd5: object expected");
                message.requestFileEndMd5 = $root.udpServerProtocol.RequestFileEndMd5.fromObject(object.requestFileEndMd5);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udpServerProtocol.Message
         * @static
         * @param {udpServerProtocol.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.newUserRequest != null && message.hasOwnProperty("newUserRequest")) {
                object.newUserRequest = $root.udpServerProtocol.NewUserRequest.toObject(message.newUserRequest, options);
                if (options.oneofs)
                    object.message = "newUserRequest";
            }
            if (message.replyUserResponse != null && message.hasOwnProperty("replyUserResponse")) {
                object.replyUserResponse = $root.udpServerProtocol.ReplyUserResponse.toObject(message.replyUserResponse, options);
                if (options.oneofs)
                    object.message = "replyUserResponse";
            }
            if (message.requestStartSendingFile != null && message.hasOwnProperty("requestStartSendingFile")) {
                object.requestStartSendingFile = $root.udpServerProtocol.RequestStartSendingFile.toObject(message.requestStartSendingFile, options);
                if (options.oneofs)
                    object.message = "requestStartSendingFile";
            }
            if (message.replyStartSendingFile != null && message.hasOwnProperty("replyStartSendingFile")) {
                object.replyStartSendingFile = $root.udpServerProtocol.ReplyStartSendingFile.toObject(message.replyStartSendingFile, options);
                if (options.oneofs)
                    object.message = "replyStartSendingFile";
            }
            if (message.fileChunk != null && message.hasOwnProperty("fileChunk")) {
                object.fileChunk = $root.udpServerProtocol.FileChunk.toObject(message.fileChunk, options);
                if (options.oneofs)
                    object.message = "fileChunk";
            }
            if (message.requestFileChunk != null && message.hasOwnProperty("requestFileChunk")) {
                object.requestFileChunk = $root.udpServerProtocol.RequestFileChunk.toObject(message.requestFileChunk, options);
                if (options.oneofs)
                    object.message = "requestFileChunk";
            }
            if (message.fileEndMd5 != null && message.hasOwnProperty("fileEndMd5")) {
                object.fileEndMd5 = $root.udpServerProtocol.FileEndMd5.toObject(message.fileEndMd5, options);
                if (options.oneofs)
                    object.message = "fileEndMd5";
            }
            if (message.requestFileEndMd5 != null && message.hasOwnProperty("requestFileEndMd5")) {
                object.requestFileEndMd5 = $root.udpServerProtocol.RequestFileEndMd5.toObject(message.requestFileEndMd5, options);
                if (options.oneofs)
                    object.message = "requestFileEndMd5";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof udpServerProtocol.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof udpServerProtocol.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udpServerProtocol.Message";
        };

        return Message;
    })();

    return udpServerProtocol;
})();

module.exports = $root;
