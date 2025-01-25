import React, { useState } from "react";
import { Md5 } from "ts-md5";
const times = require('../index.node');
interface EncryptResult {
  timeTaken: number;
  hash: string;
}

const hashString = (input: string): string => {
  return Md5.hashStr(input).toString();
};

interface EncryptComponentProps extends EncryptResult {
  name: string;
}

const EncryptComponent: React.FC<EncryptComponentProps> = ({
  timeTaken,
  hash,
  name,
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid whitesmoke",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={containerStyle}>
      <h3>{name}</h3>
      <p>
        Time taken: {timeTaken}ms, Hash: {hash}
      </p>
    </div>
  );
};

export const TimeComparisons = () => {
  const [numberOfCharacters, setNumberOfCharacters] = useState<number>(10);
  const [md5EncryptResult, setMd5EncryptResult] =
    useState<EncryptResult | null>(null);
  const [sha1EncryptResult, setSha1EncryptResult] =
    useState<EncryptResult | null>(null);
  const [sha256EncryptResult, setSha256EncryptResult] =
    useState<EncryptResult | null>(null);

  const [sha512EncryptResult, setSha512EncryptResult] =
    useState<EncryptResult | null>(null);

  const handleMd5Hash = (numberOfCharacters: number) => {
    const input = "a".repeat(numberOfCharacters);
    const start = performance.now();
    const hash = hashString(input);
    const end = performance.now();
    const timeTaken = end - start;
    console.log(`MD5 hash time: ${timeTaken}ms`);
    setMd5EncryptResult({
      timeTaken: timeTaken,
      hash: hash,
    });
    return hash;
  };

  const handleSha1Hash = async (numberOfCharacters: number) => {
    const encoder = new TextEncoder();
    const data = "a".repeat(numberOfCharacters);
    const encodedData = encoder.encode(data);
    const start = performance.now();
    const hashBuffer = await crypto.subtle.digest("SHA-1", encodedData);
    const end = performance.now();
    const timeTaken = end - start;
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    console.log(`SHA-1 hash time: ${timeTaken}ms`);
    setSha1EncryptResult({
      timeTaken: timeTaken,
      hash: hashHex,
    });
  };

  const handleSha256Hash = async (numberOfCharacters: number) => {
    const encoder = new TextEncoder();
    const data = "a".repeat(numberOfCharacters);
    const encodedData = encoder.encode(data);
    const start = performance.now();
    const hashBuffer = await crypto.subtle.digest("SHA-256", encodedData);
    const end = performance.now();
    const timeTaken = end - start;
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    console.log(`SHA-256 hash time: ${timeTaken}ms`);
    setSha256EncryptResult({
      timeTaken: timeTaken,
      hash: hashHex,
    });
  };

  function formatNumberOfCharacters(number: number) {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        type="number"
        value={numberOfCharacters}
        onChange={(e) => setNumberOfCharacters(parseInt(e.target.value))}
        style={{
          height: "30px",
          width: "100%",
          padding: "5px",
        }}
      />
      <p>
        Number of characters: {formatNumberOfCharacters(numberOfCharacters)}
      </p>
      <button
        onClick={async () => {
          setMd5EncryptResult(null);
          setSha1EncryptResult(null);
          setSha256EncryptResult(null);
          setSha512EncryptResult(null);
          const { md5, sha1, sha256, sha512, md5Hash, sha1Hash, sha256Hash, sha512Hash } = await times.computeTime("a".repeat(numberOfCharacters), 1000);
          setMd5EncryptResult({
            timeTaken: md5,
            hash: md5Hash
          });
          setSha1EncryptResult({
            timeTaken: sha1,
            hash: sha1Hash
          });
          setSha256EncryptResult({
            hash: sha256Hash,
            timeTaken: sha256
          });
          setSha512EncryptResult({
            hash: sha512Hash,
            timeTaken: sha512
          });
        }}
      >
        Compare hash times
      </button>
      <div style={{ display: "none" }}>
        <button onClick={() => handleMd5Hash(numberOfCharacters)}>
          Generate hash
        </button>
        <button onClick={async () => await handleSha1Hash(numberOfCharacters)}>
          Generate sha1 hash
        </button>
        <button
          onClick={async () => await handleSha256Hash(numberOfCharacters)}
        >
          Generate sha256 hash
        </button>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <div>
          {md5EncryptResult !== null ? (
            <EncryptComponent {...md5EncryptResult} name="MD5" />
          ) : (
            <p> Loading...</p>
          )}
        </div>
        <div>
          {sha1EncryptResult !== null ? (
            <EncryptComponent {...sha1EncryptResult} name="SHA-1" />
          ) : (
            <p> Loading...</p>
          )}
        </div>
        <div>
          {sha256EncryptResult !== null ? (
            <EncryptComponent {...sha256EncryptResult} name="SHA-256" />
          ) : (
            <p> Loading...</p>
          )}
        </div>
        <div>
          {sha512EncryptResult !== null ? (
            <EncryptComponent {...sha512EncryptResult} name="SHA-512" />
          ) : (
            <p> Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
