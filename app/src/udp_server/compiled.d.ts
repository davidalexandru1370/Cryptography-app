import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace udp_server. */
export namespace udp_server {

    /** Properties of a NewUserRequest. */
    interface INewUserRequest {

        /** NewUserRequest name */
        name: string;
    }

    /** Represents a NewUserRequest. */
    class NewUserRequest implements INewUserRequest {

        /**
         * Constructs a new NewUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.INewUserRequest);

        /** NewUserRequest name. */
        public name: string;

        /**
         * Creates a new NewUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewUserRequest instance
         */
        public static create(properties?: udp_server.INewUserRequest): udp_server.NewUserRequest;

        /**
         * Encodes the specified NewUserRequest message. Does not implicitly {@link udp_server.NewUserRequest.verify|verify} messages.
         * @param message NewUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.INewUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewUserRequest message, length delimited. Does not implicitly {@link udp_server.NewUserRequest.verify|verify} messages.
         * @param message NewUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.INewUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.NewUserRequest;

        /**
         * Decodes a NewUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.NewUserRequest;

        /**
         * Verifies a NewUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewUserRequest
         */
        public static fromObject(object: { [k: string]: any }): udp_server.NewUserRequest;

        /**
         * Creates a plain object from a NewUserRequest message. Also converts values to other types if specified.
         * @param message NewUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.NewUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NewUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplyUserResponse. */
    interface IReplyUserResponse {

        /** ReplyUserResponse name */
        name: string;
    }

    /** Represents a ReplyUserResponse. */
    class ReplyUserResponse implements IReplyUserResponse {

        /**
         * Constructs a new ReplyUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IReplyUserResponse);

        /** ReplyUserResponse name. */
        public name: string;

        /**
         * Creates a new ReplyUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplyUserResponse instance
         */
        public static create(properties?: udp_server.IReplyUserResponse): udp_server.ReplyUserResponse;

        /**
         * Encodes the specified ReplyUserResponse message. Does not implicitly {@link udp_server.ReplyUserResponse.verify|verify} messages.
         * @param message ReplyUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IReplyUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplyUserResponse message, length delimited. Does not implicitly {@link udp_server.ReplyUserResponse.verify|verify} messages.
         * @param message ReplyUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IReplyUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplyUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplyUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.ReplyUserResponse;

        /**
         * Decodes a ReplyUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplyUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.ReplyUserResponse;

        /**
         * Verifies a ReplyUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplyUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplyUserResponse
         */
        public static fromObject(object: { [k: string]: any }): udp_server.ReplyUserResponse;

        /**
         * Creates a plain object from a ReplyUserResponse message. Also converts values to other types if specified.
         * @param message ReplyUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.ReplyUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplyUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplyUserResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestStartSendingFile. */
    interface IRequestStartSendingFile {

        /** RequestStartSendingFile fileName */
        fileName: string;

        /** RequestStartSendingFile chunkSize */
        chunkSize: number;

        /** RequestStartSendingFile chunkCount */
        chunkCount: number;

        /** RequestStartSendingFile fileId */
        fileId: number;
    }

    /** Represents a RequestStartSendingFile. */
    class RequestStartSendingFile implements IRequestStartSendingFile {

        /**
         * Constructs a new RequestStartSendingFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IRequestStartSendingFile);

        /** RequestStartSendingFile fileName. */
        public fileName: string;

        /** RequestStartSendingFile chunkSize. */
        public chunkSize: number;

        /** RequestStartSendingFile chunkCount. */
        public chunkCount: number;

        /** RequestStartSendingFile fileId. */
        public fileId: number;

        /**
         * Creates a new RequestStartSendingFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartSendingFile instance
         */
        public static create(properties?: udp_server.IRequestStartSendingFile): udp_server.RequestStartSendingFile;

        /**
         * Encodes the specified RequestStartSendingFile message. Does not implicitly {@link udp_server.RequestStartSendingFile.verify|verify} messages.
         * @param message RequestStartSendingFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IRequestStartSendingFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartSendingFile message, length delimited. Does not implicitly {@link udp_server.RequestStartSendingFile.verify|verify} messages.
         * @param message RequestStartSendingFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IRequestStartSendingFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartSendingFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.RequestStartSendingFile;

        /**
         * Decodes a RequestStartSendingFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.RequestStartSendingFile;

        /**
         * Verifies a RequestStartSendingFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartSendingFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStartSendingFile
         */
        public static fromObject(object: { [k: string]: any }): udp_server.RequestStartSendingFile;

        /**
         * Creates a plain object from a RequestStartSendingFile message. Also converts values to other types if specified.
         * @param message RequestStartSendingFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.RequestStartSendingFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartSendingFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestStartSendingFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReplyStartSendingFile. */
    interface IReplyStartSendingFile {

        /** ReplyStartSendingFile fileId */
        fileId: number;

        /** ReplyStartSendingFile serverFileId */
        serverFileId: number;
    }

    /** Represents a ReplyStartSendingFile. */
    class ReplyStartSendingFile implements IReplyStartSendingFile {

        /**
         * Constructs a new ReplyStartSendingFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IReplyStartSendingFile);

        /** ReplyStartSendingFile fileId. */
        public fileId: number;

        /** ReplyStartSendingFile serverFileId. */
        public serverFileId: number;

        /**
         * Creates a new ReplyStartSendingFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReplyStartSendingFile instance
         */
        public static create(properties?: udp_server.IReplyStartSendingFile): udp_server.ReplyStartSendingFile;

        /**
         * Encodes the specified ReplyStartSendingFile message. Does not implicitly {@link udp_server.ReplyStartSendingFile.verify|verify} messages.
         * @param message ReplyStartSendingFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IReplyStartSendingFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReplyStartSendingFile message, length delimited. Does not implicitly {@link udp_server.ReplyStartSendingFile.verify|verify} messages.
         * @param message ReplyStartSendingFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IReplyStartSendingFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplyStartSendingFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReplyStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.ReplyStartSendingFile;

        /**
         * Decodes a ReplyStartSendingFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReplyStartSendingFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.ReplyStartSendingFile;

        /**
         * Verifies a ReplyStartSendingFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReplyStartSendingFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReplyStartSendingFile
         */
        public static fromObject(object: { [k: string]: any }): udp_server.ReplyStartSendingFile;

        /**
         * Creates a plain object from a ReplyStartSendingFile message. Also converts values to other types if specified.
         * @param message ReplyStartSendingFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.ReplyStartSendingFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReplyStartSendingFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReplyStartSendingFile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileChunk. */
    interface IFileChunk {

        /** FileChunk fileId */
        fileId: number;

        /** FileChunk chunkNumber */
        chunkNumber: number;

        /** FileChunk chunk */
        chunk: Uint8Array;
    }

    /** Represents a FileChunk. */
    class FileChunk implements IFileChunk {

        /**
         * Constructs a new FileChunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IFileChunk);

        /** FileChunk fileId. */
        public fileId: number;

        /** FileChunk chunkNumber. */
        public chunkNumber: number;

        /** FileChunk chunk. */
        public chunk: Uint8Array;

        /**
         * Creates a new FileChunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileChunk instance
         */
        public static create(properties?: udp_server.IFileChunk): udp_server.FileChunk;

        /**
         * Encodes the specified FileChunk message. Does not implicitly {@link udp_server.FileChunk.verify|verify} messages.
         * @param message FileChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IFileChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileChunk message, length delimited. Does not implicitly {@link udp_server.FileChunk.verify|verify} messages.
         * @param message FileChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IFileChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileChunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.FileChunk;

        /**
         * Decodes a FileChunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.FileChunk;

        /**
         * Verifies a FileChunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileChunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileChunk
         */
        public static fromObject(object: { [k: string]: any }): udp_server.FileChunk;

        /**
         * Creates a plain object from a FileChunk message. Also converts values to other types if specified.
         * @param message FileChunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.FileChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileChunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileChunk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileEndMd5. */
    interface IFileEndMd5 {

        /** FileEndMd5 fileId */
        fileId: number;

        /** FileEndMd5 md5 */
        md5: Uint8Array;
    }

    /** Represents a FileEndMd5. */
    class FileEndMd5 implements IFileEndMd5 {

        /**
         * Constructs a new FileEndMd5.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IFileEndMd5);

        /** FileEndMd5 fileId. */
        public fileId: number;

        /** FileEndMd5 md5. */
        public md5: Uint8Array;

        /**
         * Creates a new FileEndMd5 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileEndMd5 instance
         */
        public static create(properties?: udp_server.IFileEndMd5): udp_server.FileEndMd5;

        /**
         * Encodes the specified FileEndMd5 message. Does not implicitly {@link udp_server.FileEndMd5.verify|verify} messages.
         * @param message FileEndMd5 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IFileEndMd5, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileEndMd5 message, length delimited. Does not implicitly {@link udp_server.FileEndMd5.verify|verify} messages.
         * @param message FileEndMd5 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IFileEndMd5, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileEndMd5 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.FileEndMd5;

        /**
         * Decodes a FileEndMd5 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.FileEndMd5;

        /**
         * Verifies a FileEndMd5 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileEndMd5 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileEndMd5
         */
        public static fromObject(object: { [k: string]: any }): udp_server.FileEndMd5;

        /**
         * Creates a plain object from a FileEndMd5 message. Also converts values to other types if specified.
         * @param message FileEndMd5
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.FileEndMd5, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileEndMd5 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileEndMd5
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestFileChunk. */
    interface IRequestFileChunk {

        /** RequestFileChunk fileId */
        fileId: number;

        /** RequestFileChunk chunkNumber */
        chunkNumber: number;
    }

    /** Represents a RequestFileChunk. */
    class RequestFileChunk implements IRequestFileChunk {

        /**
         * Constructs a new RequestFileChunk.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IRequestFileChunk);

        /** RequestFileChunk fileId. */
        public fileId: number;

        /** RequestFileChunk chunkNumber. */
        public chunkNumber: number;

        /**
         * Creates a new RequestFileChunk instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFileChunk instance
         */
        public static create(properties?: udp_server.IRequestFileChunk): udp_server.RequestFileChunk;

        /**
         * Encodes the specified RequestFileChunk message. Does not implicitly {@link udp_server.RequestFileChunk.verify|verify} messages.
         * @param message RequestFileChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IRequestFileChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFileChunk message, length delimited. Does not implicitly {@link udp_server.RequestFileChunk.verify|verify} messages.
         * @param message RequestFileChunk message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IRequestFileChunk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFileChunk message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.RequestFileChunk;

        /**
         * Decodes a RequestFileChunk message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFileChunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.RequestFileChunk;

        /**
         * Verifies a RequestFileChunk message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFileChunk message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFileChunk
         */
        public static fromObject(object: { [k: string]: any }): udp_server.RequestFileChunk;

        /**
         * Creates a plain object from a RequestFileChunk message. Also converts values to other types if specified.
         * @param message RequestFileChunk
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.RequestFileChunk, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFileChunk to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestFileChunk
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RequestFileEndMd5. */
    interface IRequestFileEndMd5 {

        /** RequestFileEndMd5 fileId */
        fileId: number;
    }

    /** Represents a RequestFileEndMd5. */
    class RequestFileEndMd5 implements IRequestFileEndMd5 {

        /**
         * Constructs a new RequestFileEndMd5.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IRequestFileEndMd5);

        /** RequestFileEndMd5 fileId. */
        public fileId: number;

        /**
         * Creates a new RequestFileEndMd5 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFileEndMd5 instance
         */
        public static create(properties?: udp_server.IRequestFileEndMd5): udp_server.RequestFileEndMd5;

        /**
         * Encodes the specified RequestFileEndMd5 message. Does not implicitly {@link udp_server.RequestFileEndMd5.verify|verify} messages.
         * @param message RequestFileEndMd5 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IRequestFileEndMd5, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFileEndMd5 message, length delimited. Does not implicitly {@link udp_server.RequestFileEndMd5.verify|verify} messages.
         * @param message RequestFileEndMd5 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IRequestFileEndMd5, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFileEndMd5 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.RequestFileEndMd5;

        /**
         * Decodes a RequestFileEndMd5 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFileEndMd5
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.RequestFileEndMd5;

        /**
         * Verifies a RequestFileEndMd5 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFileEndMd5 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFileEndMd5
         */
        public static fromObject(object: { [k: string]: any }): udp_server.RequestFileEndMd5;

        /**
         * Creates a plain object from a RequestFileEndMd5 message. Also converts values to other types if specified.
         * @param message RequestFileEndMd5
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.RequestFileEndMd5, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFileEndMd5 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RequestFileEndMd5
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message newUserRequest */
        newUserRequest?: (udp_server.INewUserRequest|null);

        /** Message replyUserResponse */
        replyUserResponse?: (udp_server.IReplyUserResponse|null);

        /** Message requestStartSendingFile */
        requestStartSendingFile?: (udp_server.IRequestStartSendingFile|null);

        /** Message replyStartSendingFile */
        replyStartSendingFile?: (udp_server.IReplyStartSendingFile|null);

        /** Message fileChunk */
        fileChunk?: (udp_server.IFileChunk|null);

        /** Message requestFileChunk */
        requestFileChunk?: (udp_server.IRequestFileChunk|null);

        /** Message fileEndMd5 */
        fileEndMd5?: (udp_server.IFileEndMd5|null);

        /** Message requestFileEndMd5 */
        requestFileEndMd5?: (udp_server.IRequestFileEndMd5|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: udp_server.IMessage);

        /** Message newUserRequest. */
        public newUserRequest?: (udp_server.INewUserRequest|null);

        /** Message replyUserResponse. */
        public replyUserResponse?: (udp_server.IReplyUserResponse|null);

        /** Message requestStartSendingFile. */
        public requestStartSendingFile?: (udp_server.IRequestStartSendingFile|null);

        /** Message replyStartSendingFile. */
        public replyStartSendingFile?: (udp_server.IReplyStartSendingFile|null);

        /** Message fileChunk. */
        public fileChunk?: (udp_server.IFileChunk|null);

        /** Message requestFileChunk. */
        public requestFileChunk?: (udp_server.IRequestFileChunk|null);

        /** Message fileEndMd5. */
        public fileEndMd5?: (udp_server.IFileEndMd5|null);

        /** Message requestFileEndMd5. */
        public requestFileEndMd5?: (udp_server.IRequestFileEndMd5|null);

        /** Message message. */
        public message?: ("newUserRequest"|"replyUserResponse"|"requestStartSendingFile"|"replyStartSendingFile"|"fileChunk"|"requestFileChunk"|"fileEndMd5"|"requestFileEndMd5");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: udp_server.IMessage): udp_server.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link udp_server.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: udp_server.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link udp_server.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: udp_server.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): udp_server.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): udp_server.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): udp_server.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: udp_server.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
