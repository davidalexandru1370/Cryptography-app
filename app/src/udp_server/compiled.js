/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.udp_server = (function() {

    /**
     * Namespace udp_server.
     * @exports udp_server
     * @namespace
     */
    var udp_server = {};

    udp_server.NewUserRequest = (function() {

        /**
         * Properties of a NewUserRequest.
         * @memberof udp_server
         * @interface INewUserRequest
         * @property {string} name NewUserRequest name
         */

        /**
         * Constructs a new NewUserRequest.
         * @memberof udp_server
         * @classdesc Represents a NewUserRequest.
         * @implements INewUserRequest
         * @constructor
         * @param {udp_server.INewUserRequest=} [properties] Properties to set
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
         * @memberof udp_server.NewUserRequest
         * @instance
         */
        NewUserRequest.prototype.name = "";

        /**
         * Creates a new NewUserRequest instance using the specified properties.
         * @function create
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {udp_server.INewUserRequest=} [properties] Properties to set
         * @returns {udp_server.NewUserRequest} NewUserRequest instance
         */
        NewUserRequest.create = function create(properties) {
            return new NewUserRequest(properties);
        };

        /**
         * Encodes the specified NewUserRequest message. Does not implicitly {@link udp_server.NewUserRequest.verify|verify} messages.
         * @function encode
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {udp_server.INewUserRequest} message NewUserRequest message or plain object to encode
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
         * Encodes the specified NewUserRequest message, length delimited. Does not implicitly {@link udp_server.NewUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {udp_server.INewUserRequest} message NewUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.NewUserRequest} NewUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.NewUserRequest();
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
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.NewUserRequest} NewUserRequest
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
         * @memberof udp_server.NewUserRequest
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
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.NewUserRequest} NewUserRequest
         */
        NewUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.NewUserRequest)
                return object;
            var message = new $root.udp_server.NewUserRequest();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a NewUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {udp_server.NewUserRequest} message NewUserRequest
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
         * @memberof udp_server.NewUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NewUserRequest
         * @function getTypeUrl
         * @memberof udp_server.NewUserRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NewUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.NewUserRequest";
        };

        return NewUserRequest;
    })();

    udp_server.ReplyUserResponse = (function() {

        /**
         * Properties of a ReplyUserResponse.
         * @memberof udp_server
         * @interface IReplyUserResponse
         * @property {string} name ReplyUserResponse name
         */

        /**
         * Constructs a new ReplyUserResponse.
         * @memberof udp_server
         * @classdesc Represents a ReplyUserResponse.
         * @implements IReplyUserResponse
         * @constructor
         * @param {udp_server.IReplyUserResponse=} [properties] Properties to set
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
         * @memberof udp_server.ReplyUserResponse
         * @instance
         */
        ReplyUserResponse.prototype.name = "";

        /**
         * Creates a new ReplyUserResponse instance using the specified properties.
         * @function create
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {udp_server.IReplyUserResponse=} [properties] Properties to set
         * @returns {udp_server.ReplyUserResponse} ReplyUserResponse instance
         */
        ReplyUserResponse.create = function create(properties) {
            return new ReplyUserResponse(properties);
        };

        /**
         * Encodes the specified ReplyUserResponse message. Does not implicitly {@link udp_server.ReplyUserResponse.verify|verify} messages.
         * @function encode
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {udp_server.IReplyUserResponse} message ReplyUserResponse message or plain object to encode
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
         * Encodes the specified ReplyUserResponse message, length delimited. Does not implicitly {@link udp_server.ReplyUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {udp_server.IReplyUserResponse} message ReplyUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.ReplyUserResponse} ReplyUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.ReplyUserResponse();
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
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.ReplyUserResponse} ReplyUserResponse
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
         * @memberof udp_server.ReplyUserResponse
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
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.ReplyUserResponse} ReplyUserResponse
         */
        ReplyUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.ReplyUserResponse)
                return object;
            var message = new $root.udp_server.ReplyUserResponse();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ReplyUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {udp_server.ReplyUserResponse} message ReplyUserResponse
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
         * @memberof udp_server.ReplyUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyUserResponse
         * @function getTypeUrl
         * @memberof udp_server.ReplyUserResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.ReplyUserResponse";
        };

        return ReplyUserResponse;
    })();

    udp_server.RequestStartSendingFile = (function() {

        /**
         * Properties of a RequestStartSendingFile.
         * @memberof udp_server
         * @interface IRequestStartSendingFile
         * @property {string} fileName RequestStartSendingFile fileName
         * @property {number} chunkSize RequestStartSendingFile chunkSize
         * @property {number} chunkCount RequestStartSendingFile chunkCount
         * @property {number} fileId RequestStartSendingFile fileId
         */

        /**
         * Constructs a new RequestStartSendingFile.
         * @memberof udp_server
         * @classdesc Represents a RequestStartSendingFile.
         * @implements IRequestStartSendingFile
         * @constructor
         * @param {udp_server.IRequestStartSendingFile=} [properties] Properties to set
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
         * @memberof udp_server.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.fileName = "";

        /**
         * RequestStartSendingFile chunkSize.
         * @member {number} chunkSize
         * @memberof udp_server.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.chunkSize = 0;

        /**
         * RequestStartSendingFile chunkCount.
         * @member {number} chunkCount
         * @memberof udp_server.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.chunkCount = 0;

        /**
         * RequestStartSendingFile fileId.
         * @member {number} fileId
         * @memberof udp_server.RequestStartSendingFile
         * @instance
         */
        RequestStartSendingFile.prototype.fileId = 0;

        /**
         * Creates a new RequestStartSendingFile instance using the specified properties.
         * @function create
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {udp_server.IRequestStartSendingFile=} [properties] Properties to set
         * @returns {udp_server.RequestStartSendingFile} RequestStartSendingFile instance
         */
        RequestStartSendingFile.create = function create(properties) {
            return new RequestStartSendingFile(properties);
        };

        /**
         * Encodes the specified RequestStartSendingFile message. Does not implicitly {@link udp_server.RequestStartSendingFile.verify|verify} messages.
         * @function encode
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {udp_server.IRequestStartSendingFile} message RequestStartSendingFile message or plain object to encode
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
         * Encodes the specified RequestStartSendingFile message, length delimited. Does not implicitly {@link udp_server.RequestStartSendingFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {udp_server.IRequestStartSendingFile} message RequestStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestStartSendingFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestStartSendingFile message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.RequestStartSendingFile} RequestStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestStartSendingFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.RequestStartSendingFile();
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
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.RequestStartSendingFile} RequestStartSendingFile
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
         * @memberof udp_server.RequestStartSendingFile
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
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.RequestStartSendingFile} RequestStartSendingFile
         */
        RequestStartSendingFile.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.RequestStartSendingFile)
                return object;
            var message = new $root.udp_server.RequestStartSendingFile();
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
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {udp_server.RequestStartSendingFile} message RequestStartSendingFile
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
         * @memberof udp_server.RequestStartSendingFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestStartSendingFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestStartSendingFile
         * @function getTypeUrl
         * @memberof udp_server.RequestStartSendingFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestStartSendingFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.RequestStartSendingFile";
        };

        return RequestStartSendingFile;
    })();

    udp_server.ReplyStartSendingFile = (function() {

        /**
         * Properties of a ReplyStartSendingFile.
         * @memberof udp_server
         * @interface IReplyStartSendingFile
         * @property {number} fileId ReplyStartSendingFile fileId
         * @property {number} serverFileId ReplyStartSendingFile serverFileId
         */

        /**
         * Constructs a new ReplyStartSendingFile.
         * @memberof udp_server
         * @classdesc Represents a ReplyStartSendingFile.
         * @implements IReplyStartSendingFile
         * @constructor
         * @param {udp_server.IReplyStartSendingFile=} [properties] Properties to set
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
         * @memberof udp_server.ReplyStartSendingFile
         * @instance
         */
        ReplyStartSendingFile.prototype.fileId = 0;

        /**
         * ReplyStartSendingFile serverFileId.
         * @member {number} serverFileId
         * @memberof udp_server.ReplyStartSendingFile
         * @instance
         */
        ReplyStartSendingFile.prototype.serverFileId = 0;

        /**
         * Creates a new ReplyStartSendingFile instance using the specified properties.
         * @function create
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {udp_server.IReplyStartSendingFile=} [properties] Properties to set
         * @returns {udp_server.ReplyStartSendingFile} ReplyStartSendingFile instance
         */
        ReplyStartSendingFile.create = function create(properties) {
            return new ReplyStartSendingFile(properties);
        };

        /**
         * Encodes the specified ReplyStartSendingFile message. Does not implicitly {@link udp_server.ReplyStartSendingFile.verify|verify} messages.
         * @function encode
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {udp_server.IReplyStartSendingFile} message ReplyStartSendingFile message or plain object to encode
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
         * Encodes the specified ReplyStartSendingFile message, length delimited. Does not implicitly {@link udp_server.ReplyStartSendingFile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {udp_server.IReplyStartSendingFile} message ReplyStartSendingFile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReplyStartSendingFile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReplyStartSendingFile message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.ReplyStartSendingFile} ReplyStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReplyStartSendingFile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.ReplyStartSendingFile();
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
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.ReplyStartSendingFile} ReplyStartSendingFile
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
         * @memberof udp_server.ReplyStartSendingFile
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
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.ReplyStartSendingFile} ReplyStartSendingFile
         */
        ReplyStartSendingFile.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.ReplyStartSendingFile)
                return object;
            var message = new $root.udp_server.ReplyStartSendingFile();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.serverFileId != null)
                message.serverFileId = object.serverFileId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ReplyStartSendingFile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {udp_server.ReplyStartSendingFile} message ReplyStartSendingFile
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
         * @memberof udp_server.ReplyStartSendingFile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReplyStartSendingFile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReplyStartSendingFile
         * @function getTypeUrl
         * @memberof udp_server.ReplyStartSendingFile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReplyStartSendingFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.ReplyStartSendingFile";
        };

        return ReplyStartSendingFile;
    })();

    udp_server.FileChunk = (function() {

        /**
         * Properties of a FileChunk.
         * @memberof udp_server
         * @interface IFileChunk
         * @property {number} fileId FileChunk fileId
         * @property {number} chunkNumber FileChunk chunkNumber
         * @property {Uint8Array} chunk FileChunk chunk
         */

        /**
         * Constructs a new FileChunk.
         * @memberof udp_server
         * @classdesc Represents a FileChunk.
         * @implements IFileChunk
         * @constructor
         * @param {udp_server.IFileChunk=} [properties] Properties to set
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
         * @memberof udp_server.FileChunk
         * @instance
         */
        FileChunk.prototype.fileId = 0;

        /**
         * FileChunk chunkNumber.
         * @member {number} chunkNumber
         * @memberof udp_server.FileChunk
         * @instance
         */
        FileChunk.prototype.chunkNumber = 0;

        /**
         * FileChunk chunk.
         * @member {Uint8Array} chunk
         * @memberof udp_server.FileChunk
         * @instance
         */
        FileChunk.prototype.chunk = $util.newBuffer([]);

        /**
         * Creates a new FileChunk instance using the specified properties.
         * @function create
         * @memberof udp_server.FileChunk
         * @static
         * @param {udp_server.IFileChunk=} [properties] Properties to set
         * @returns {udp_server.FileChunk} FileChunk instance
         */
        FileChunk.create = function create(properties) {
            return new FileChunk(properties);
        };

        /**
         * Encodes the specified FileChunk message. Does not implicitly {@link udp_server.FileChunk.verify|verify} messages.
         * @function encode
         * @memberof udp_server.FileChunk
         * @static
         * @param {udp_server.IFileChunk} message FileChunk message or plain object to encode
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
         * Encodes the specified FileChunk message, length delimited. Does not implicitly {@link udp_server.FileChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.FileChunk
         * @static
         * @param {udp_server.IFileChunk} message FileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileChunk message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.FileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.FileChunk} FileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileChunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.FileChunk();
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
         * @memberof udp_server.FileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.FileChunk} FileChunk
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
         * @memberof udp_server.FileChunk
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
         * @memberof udp_server.FileChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.FileChunk} FileChunk
         */
        FileChunk.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.FileChunk)
                return object;
            var message = new $root.udp_server.FileChunk();
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
         * @memberof udp_server.FileChunk
         * @static
         * @param {udp_server.FileChunk} message FileChunk
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
         * @memberof udp_server.FileChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileChunk
         * @function getTypeUrl
         * @memberof udp_server.FileChunk
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileChunk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.FileChunk";
        };

        return FileChunk;
    })();

    udp_server.FileEndMd5 = (function() {

        /**
         * Properties of a FileEndMd5.
         * @memberof udp_server
         * @interface IFileEndMd5
         * @property {number} fileId FileEndMd5 fileId
         * @property {Uint8Array} md5 FileEndMd5 md5
         */

        /**
         * Constructs a new FileEndMd5.
         * @memberof udp_server
         * @classdesc Represents a FileEndMd5.
         * @implements IFileEndMd5
         * @constructor
         * @param {udp_server.IFileEndMd5=} [properties] Properties to set
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
         * @memberof udp_server.FileEndMd5
         * @instance
         */
        FileEndMd5.prototype.fileId = 0;

        /**
         * FileEndMd5 md5.
         * @member {Uint8Array} md5
         * @memberof udp_server.FileEndMd5
         * @instance
         */
        FileEndMd5.prototype.md5 = $util.newBuffer([]);

        /**
         * Creates a new FileEndMd5 instance using the specified properties.
         * @function create
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {udp_server.IFileEndMd5=} [properties] Properties to set
         * @returns {udp_server.FileEndMd5} FileEndMd5 instance
         */
        FileEndMd5.create = function create(properties) {
            return new FileEndMd5(properties);
        };

        /**
         * Encodes the specified FileEndMd5 message. Does not implicitly {@link udp_server.FileEndMd5.verify|verify} messages.
         * @function encode
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {udp_server.IFileEndMd5} message FileEndMd5 message or plain object to encode
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
         * Encodes the specified FileEndMd5 message, length delimited. Does not implicitly {@link udp_server.FileEndMd5.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {udp_server.IFileEndMd5} message FileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileEndMd5.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileEndMd5 message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.FileEndMd5} FileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileEndMd5.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.FileEndMd5();
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
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.FileEndMd5} FileEndMd5
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
         * @memberof udp_server.FileEndMd5
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
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.FileEndMd5} FileEndMd5
         */
        FileEndMd5.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.FileEndMd5)
                return object;
            var message = new $root.udp_server.FileEndMd5();
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
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {udp_server.FileEndMd5} message FileEndMd5
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
         * @memberof udp_server.FileEndMd5
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileEndMd5.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileEndMd5
         * @function getTypeUrl
         * @memberof udp_server.FileEndMd5
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileEndMd5.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.FileEndMd5";
        };

        return FileEndMd5;
    })();

    udp_server.RequestFileChunk = (function() {

        /**
         * Properties of a RequestFileChunk.
         * @memberof udp_server
         * @interface IRequestFileChunk
         * @property {number} fileId RequestFileChunk fileId
         * @property {number} chunkNumber RequestFileChunk chunkNumber
         */

        /**
         * Constructs a new RequestFileChunk.
         * @memberof udp_server
         * @classdesc Represents a RequestFileChunk.
         * @implements IRequestFileChunk
         * @constructor
         * @param {udp_server.IRequestFileChunk=} [properties] Properties to set
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
         * @memberof udp_server.RequestFileChunk
         * @instance
         */
        RequestFileChunk.prototype.fileId = 0;

        /**
         * RequestFileChunk chunkNumber.
         * @member {number} chunkNumber
         * @memberof udp_server.RequestFileChunk
         * @instance
         */
        RequestFileChunk.prototype.chunkNumber = 0;

        /**
         * Creates a new RequestFileChunk instance using the specified properties.
         * @function create
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {udp_server.IRequestFileChunk=} [properties] Properties to set
         * @returns {udp_server.RequestFileChunk} RequestFileChunk instance
         */
        RequestFileChunk.create = function create(properties) {
            return new RequestFileChunk(properties);
        };

        /**
         * Encodes the specified RequestFileChunk message. Does not implicitly {@link udp_server.RequestFileChunk.verify|verify} messages.
         * @function encode
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {udp_server.IRequestFileChunk} message RequestFileChunk message or plain object to encode
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
         * Encodes the specified RequestFileChunk message, length delimited. Does not implicitly {@link udp_server.RequestFileChunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {udp_server.IRequestFileChunk} message RequestFileChunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileChunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestFileChunk message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.RequestFileChunk} RequestFileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileChunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.RequestFileChunk();
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
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.RequestFileChunk} RequestFileChunk
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
         * @memberof udp_server.RequestFileChunk
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
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.RequestFileChunk} RequestFileChunk
         */
        RequestFileChunk.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.RequestFileChunk)
                return object;
            var message = new $root.udp_server.RequestFileChunk();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            if (object.chunkNumber != null)
                message.chunkNumber = object.chunkNumber >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestFileChunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {udp_server.RequestFileChunk} message RequestFileChunk
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
         * @memberof udp_server.RequestFileChunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestFileChunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestFileChunk
         * @function getTypeUrl
         * @memberof udp_server.RequestFileChunk
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestFileChunk.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.RequestFileChunk";
        };

        return RequestFileChunk;
    })();

    udp_server.RequestFileEndMd5 = (function() {

        /**
         * Properties of a RequestFileEndMd5.
         * @memberof udp_server
         * @interface IRequestFileEndMd5
         * @property {number} fileId RequestFileEndMd5 fileId
         */

        /**
         * Constructs a new RequestFileEndMd5.
         * @memberof udp_server
         * @classdesc Represents a RequestFileEndMd5.
         * @implements IRequestFileEndMd5
         * @constructor
         * @param {udp_server.IRequestFileEndMd5=} [properties] Properties to set
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
         * @memberof udp_server.RequestFileEndMd5
         * @instance
         */
        RequestFileEndMd5.prototype.fileId = 0;

        /**
         * Creates a new RequestFileEndMd5 instance using the specified properties.
         * @function create
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {udp_server.IRequestFileEndMd5=} [properties] Properties to set
         * @returns {udp_server.RequestFileEndMd5} RequestFileEndMd5 instance
         */
        RequestFileEndMd5.create = function create(properties) {
            return new RequestFileEndMd5(properties);
        };

        /**
         * Encodes the specified RequestFileEndMd5 message. Does not implicitly {@link udp_server.RequestFileEndMd5.verify|verify} messages.
         * @function encode
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {udp_server.IRequestFileEndMd5} message RequestFileEndMd5 message or plain object to encode
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
         * Encodes the specified RequestFileEndMd5 message, length delimited. Does not implicitly {@link udp_server.RequestFileEndMd5.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {udp_server.IRequestFileEndMd5} message RequestFileEndMd5 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestFileEndMd5.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestFileEndMd5 message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.RequestFileEndMd5} RequestFileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestFileEndMd5.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.RequestFileEndMd5();
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
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.RequestFileEndMd5} RequestFileEndMd5
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
         * @memberof udp_server.RequestFileEndMd5
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
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.RequestFileEndMd5} RequestFileEndMd5
         */
        RequestFileEndMd5.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.RequestFileEndMd5)
                return object;
            var message = new $root.udp_server.RequestFileEndMd5();
            if (object.fileId != null)
                message.fileId = object.fileId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestFileEndMd5 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {udp_server.RequestFileEndMd5} message RequestFileEndMd5
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
         * @memberof udp_server.RequestFileEndMd5
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestFileEndMd5.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestFileEndMd5
         * @function getTypeUrl
         * @memberof udp_server.RequestFileEndMd5
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestFileEndMd5.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.RequestFileEndMd5";
        };

        return RequestFileEndMd5;
    })();

    udp_server.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof udp_server
         * @interface IMessage
         * @property {udp_server.INewUserRequest|null} [newUserRequest] Message newUserRequest
         * @property {udp_server.IReplyUserResponse|null} [replyUserResponse] Message replyUserResponse
         * @property {udp_server.IRequestStartSendingFile|null} [requestStartSendingFile] Message requestStartSendingFile
         * @property {udp_server.IReplyStartSendingFile|null} [replyStartSendingFile] Message replyStartSendingFile
         * @property {udp_server.IFileChunk|null} [fileChunk] Message fileChunk
         * @property {udp_server.IRequestFileChunk|null} [requestFileChunk] Message requestFileChunk
         * @property {udp_server.IFileEndMd5|null} [fileEndMd5] Message fileEndMd5
         * @property {udp_server.IRequestFileEndMd5|null} [requestFileEndMd5] Message requestFileEndMd5
         */

        /**
         * Constructs a new Message.
         * @memberof udp_server
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {udp_server.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message newUserRequest.
         * @member {udp_server.INewUserRequest|null|undefined} newUserRequest
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.newUserRequest = null;

        /**
         * Message replyUserResponse.
         * @member {udp_server.IReplyUserResponse|null|undefined} replyUserResponse
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.replyUserResponse = null;

        /**
         * Message requestStartSendingFile.
         * @member {udp_server.IRequestStartSendingFile|null|undefined} requestStartSendingFile
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.requestStartSendingFile = null;

        /**
         * Message replyStartSendingFile.
         * @member {udp_server.IReplyStartSendingFile|null|undefined} replyStartSendingFile
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.replyStartSendingFile = null;

        /**
         * Message fileChunk.
         * @member {udp_server.IFileChunk|null|undefined} fileChunk
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.fileChunk = null;

        /**
         * Message requestFileChunk.
         * @member {udp_server.IRequestFileChunk|null|undefined} requestFileChunk
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.requestFileChunk = null;

        /**
         * Message fileEndMd5.
         * @member {udp_server.IFileEndMd5|null|undefined} fileEndMd5
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.fileEndMd5 = null;

        /**
         * Message requestFileEndMd5.
         * @member {udp_server.IRequestFileEndMd5|null|undefined} requestFileEndMd5
         * @memberof udp_server.Message
         * @instance
         */
        Message.prototype.requestFileEndMd5 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message message.
         * @member {"newUserRequest"|"replyUserResponse"|"requestStartSendingFile"|"replyStartSendingFile"|"fileChunk"|"requestFileChunk"|"fileEndMd5"|"requestFileEndMd5"|undefined} message
         * @memberof udp_server.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "message", {
            get: $util.oneOfGetter($oneOfFields = ["newUserRequest", "replyUserResponse", "requestStartSendingFile", "replyStartSendingFile", "fileChunk", "requestFileChunk", "fileEndMd5", "requestFileEndMd5"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof udp_server.Message
         * @static
         * @param {udp_server.IMessage=} [properties] Properties to set
         * @returns {udp_server.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link udp_server.Message.verify|verify} messages.
         * @function encode
         * @memberof udp_server.Message
         * @static
         * @param {udp_server.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newUserRequest != null && Object.hasOwnProperty.call(message, "newUserRequest"))
                $root.udp_server.NewUserRequest.encode(message.newUserRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.replyUserResponse != null && Object.hasOwnProperty.call(message, "replyUserResponse"))
                $root.udp_server.ReplyUserResponse.encode(message.replyUserResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.requestStartSendingFile != null && Object.hasOwnProperty.call(message, "requestStartSendingFile"))
                $root.udp_server.RequestStartSendingFile.encode(message.requestStartSendingFile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.replyStartSendingFile != null && Object.hasOwnProperty.call(message, "replyStartSendingFile"))
                $root.udp_server.ReplyStartSendingFile.encode(message.replyStartSendingFile, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.fileChunk != null && Object.hasOwnProperty.call(message, "fileChunk"))
                $root.udp_server.FileChunk.encode(message.fileChunk, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.requestFileChunk != null && Object.hasOwnProperty.call(message, "requestFileChunk"))
                $root.udp_server.RequestFileChunk.encode(message.requestFileChunk, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.fileEndMd5 != null && Object.hasOwnProperty.call(message, "fileEndMd5"))
                $root.udp_server.FileEndMd5.encode(message.fileEndMd5, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.requestFileEndMd5 != null && Object.hasOwnProperty.call(message, "requestFileEndMd5"))
                $root.udp_server.RequestFileEndMd5.encode(message.requestFileEndMd5, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link udp_server.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof udp_server.Message
         * @static
         * @param {udp_server.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof udp_server.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {udp_server.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.udp_server.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.newUserRequest = $root.udp_server.NewUserRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.replyUserResponse = $root.udp_server.ReplyUserResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.requestStartSendingFile = $root.udp_server.RequestStartSendingFile.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.replyStartSendingFile = $root.udp_server.ReplyStartSendingFile.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.fileChunk = $root.udp_server.FileChunk.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.requestFileChunk = $root.udp_server.RequestFileChunk.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.fileEndMd5 = $root.udp_server.FileEndMd5.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.requestFileEndMd5 = $root.udp_server.RequestFileEndMd5.decode(reader, reader.uint32());
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
         * @memberof udp_server.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {udp_server.Message} Message
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
         * @memberof udp_server.Message
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
                    var error = $root.udp_server.NewUserRequest.verify(message.newUserRequest);
                    if (error)
                        return "newUserRequest." + error;
                }
            }
            if (message.replyUserResponse != null && message.hasOwnProperty("replyUserResponse")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.ReplyUserResponse.verify(message.replyUserResponse);
                    if (error)
                        return "replyUserResponse." + error;
                }
            }
            if (message.requestStartSendingFile != null && message.hasOwnProperty("requestStartSendingFile")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.RequestStartSendingFile.verify(message.requestStartSendingFile);
                    if (error)
                        return "requestStartSendingFile." + error;
                }
            }
            if (message.replyStartSendingFile != null && message.hasOwnProperty("replyStartSendingFile")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.ReplyStartSendingFile.verify(message.replyStartSendingFile);
                    if (error)
                        return "replyStartSendingFile." + error;
                }
            }
            if (message.fileChunk != null && message.hasOwnProperty("fileChunk")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.FileChunk.verify(message.fileChunk);
                    if (error)
                        return "fileChunk." + error;
                }
            }
            if (message.requestFileChunk != null && message.hasOwnProperty("requestFileChunk")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.RequestFileChunk.verify(message.requestFileChunk);
                    if (error)
                        return "requestFileChunk." + error;
                }
            }
            if (message.fileEndMd5 != null && message.hasOwnProperty("fileEndMd5")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.FileEndMd5.verify(message.fileEndMd5);
                    if (error)
                        return "fileEndMd5." + error;
                }
            }
            if (message.requestFileEndMd5 != null && message.hasOwnProperty("requestFileEndMd5")) {
                if (properties.message === 1)
                    return "message: multiple values";
                properties.message = 1;
                {
                    var error = $root.udp_server.RequestFileEndMd5.verify(message.requestFileEndMd5);
                    if (error)
                        return "requestFileEndMd5." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof udp_server.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {udp_server.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.udp_server.Message)
                return object;
            var message = new $root.udp_server.Message();
            if (object.newUserRequest != null) {
                if (typeof object.newUserRequest !== "object")
                    throw TypeError(".udp_server.Message.newUserRequest: object expected");
                message.newUserRequest = $root.udp_server.NewUserRequest.fromObject(object.newUserRequest);
            }
            if (object.replyUserResponse != null) {
                if (typeof object.replyUserResponse !== "object")
                    throw TypeError(".udp_server.Message.replyUserResponse: object expected");
                message.replyUserResponse = $root.udp_server.ReplyUserResponse.fromObject(object.replyUserResponse);
            }
            if (object.requestStartSendingFile != null) {
                if (typeof object.requestStartSendingFile !== "object")
                    throw TypeError(".udp_server.Message.requestStartSendingFile: object expected");
                message.requestStartSendingFile = $root.udp_server.RequestStartSendingFile.fromObject(object.requestStartSendingFile);
            }
            if (object.replyStartSendingFile != null) {
                if (typeof object.replyStartSendingFile !== "object")
                    throw TypeError(".udp_server.Message.replyStartSendingFile: object expected");
                message.replyStartSendingFile = $root.udp_server.ReplyStartSendingFile.fromObject(object.replyStartSendingFile);
            }
            if (object.fileChunk != null) {
                if (typeof object.fileChunk !== "object")
                    throw TypeError(".udp_server.Message.fileChunk: object expected");
                message.fileChunk = $root.udp_server.FileChunk.fromObject(object.fileChunk);
            }
            if (object.requestFileChunk != null) {
                if (typeof object.requestFileChunk !== "object")
                    throw TypeError(".udp_server.Message.requestFileChunk: object expected");
                message.requestFileChunk = $root.udp_server.RequestFileChunk.fromObject(object.requestFileChunk);
            }
            if (object.fileEndMd5 != null) {
                if (typeof object.fileEndMd5 !== "object")
                    throw TypeError(".udp_server.Message.fileEndMd5: object expected");
                message.fileEndMd5 = $root.udp_server.FileEndMd5.fromObject(object.fileEndMd5);
            }
            if (object.requestFileEndMd5 != null) {
                if (typeof object.requestFileEndMd5 !== "object")
                    throw TypeError(".udp_server.Message.requestFileEndMd5: object expected");
                message.requestFileEndMd5 = $root.udp_server.RequestFileEndMd5.fromObject(object.requestFileEndMd5);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof udp_server.Message
         * @static
         * @param {udp_server.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.newUserRequest != null && message.hasOwnProperty("newUserRequest")) {
                object.newUserRequest = $root.udp_server.NewUserRequest.toObject(message.newUserRequest, options);
                if (options.oneofs)
                    object.message = "newUserRequest";
            }
            if (message.replyUserResponse != null && message.hasOwnProperty("replyUserResponse")) {
                object.replyUserResponse = $root.udp_server.ReplyUserResponse.toObject(message.replyUserResponse, options);
                if (options.oneofs)
                    object.message = "replyUserResponse";
            }
            if (message.requestStartSendingFile != null && message.hasOwnProperty("requestStartSendingFile")) {
                object.requestStartSendingFile = $root.udp_server.RequestStartSendingFile.toObject(message.requestStartSendingFile, options);
                if (options.oneofs)
                    object.message = "requestStartSendingFile";
            }
            if (message.replyStartSendingFile != null && message.hasOwnProperty("replyStartSendingFile")) {
                object.replyStartSendingFile = $root.udp_server.ReplyStartSendingFile.toObject(message.replyStartSendingFile, options);
                if (options.oneofs)
                    object.message = "replyStartSendingFile";
            }
            if (message.fileChunk != null && message.hasOwnProperty("fileChunk")) {
                object.fileChunk = $root.udp_server.FileChunk.toObject(message.fileChunk, options);
                if (options.oneofs)
                    object.message = "fileChunk";
            }
            if (message.requestFileChunk != null && message.hasOwnProperty("requestFileChunk")) {
                object.requestFileChunk = $root.udp_server.RequestFileChunk.toObject(message.requestFileChunk, options);
                if (options.oneofs)
                    object.message = "requestFileChunk";
            }
            if (message.fileEndMd5 != null && message.hasOwnProperty("fileEndMd5")) {
                object.fileEndMd5 = $root.udp_server.FileEndMd5.toObject(message.fileEndMd5, options);
                if (options.oneofs)
                    object.message = "fileEndMd5";
            }
            if (message.requestFileEndMd5 != null && message.hasOwnProperty("requestFileEndMd5")) {
                object.requestFileEndMd5 = $root.udp_server.RequestFileEndMd5.toObject(message.requestFileEndMd5, options);
                if (options.oneofs)
                    object.message = "requestFileEndMd5";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof udp_server.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof udp_server.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/udp_server.Message";
        };

        return Message;
    })();

    return udp_server;
})();

module.exports = $root;
