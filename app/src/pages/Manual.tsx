import React, { useState, useEffect } from "react";
import "./Manual.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Manual() {
  const [style0, setStyle0] = useState({ background: "paleGreen" });
  const [style1, setStyle1] = useState({ background: "white" });
  const [style2, setStyle2] = useState({ background: "white" });
  const [style3, setStyle3] = useState({ background: "white" });
  const [style4, setStyle4] = useState({ background: "white" });
  const [style5, setStyle5] = useState({ background: "white" });
  const [style6, setStyle6] = useState({ background: "white" });
  const [style7, setStyle7] = useState({ background: "white" });
  const [style8, setStyle8] = useState({ background: "white" });
  const [style9, setStyle9] = useState({ background: "white" });
  const [style10, setStyle10] = useState({ background: "white" });
  const [style11, setStyle11] = useState({ background: "white" });
  const [style12, setStyle12] = useState({ background: "white" });
  const [style13, setStyle13] = useState({ background: "white" });
  const [style14, setStyle14] = useState({ background: "white" });
  const [style15, setStyle15] = useState({ background: "white" });
  const [value0, setValue0] = useState(0);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(4);
  const [value5, setValue5] = useState(5);
  const [value6, setValue6] = useState(6);
  const [value7, setValue7] = useState(7);
  const [value8, setValue8] = useState(8);
  const [value9, setValue9] = useState(9);
  const [value10, setValue10] = useState(10);
  const [value11, setValue11] = useState(11);
  const [value12, setValue12] = useState(12);
  const [value13, setValue13] = useState(13);
  const [value14, setValue14] = useState(14);
  const [value15, setValue15] = useState(15);
  const [columnIndex, setColumnIndex] = useState(0);
  const [A, setA] = useState(0x67452301);
  const [B, setB] = useState(0xefcdab89);
  const [C, setC] = useState(0x98badcfe);
  const [D, setD] = useState(0x10325476);
  const [AA, setAA] = useState(0x0);
  const [BB, setBB] = useState(0x1);
  const [CC, setCC] = useState(0x2);
  const [DD, setDD] = useState(0x3);
  const [m, setM] = useState([0]);
  const [showInitial, setShowInitial] = useState(true);
  const [showFinal, setShowFinal] = useState(false);
  const [result, setResult] = useState(new Uint8Array());
  const [msg, setMsg] = useState("");

  const S = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5,
    9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11,
    16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10,
    15, 21,
  ];

  const K = new Uint32Array([
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a,
    0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
    0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340,
    0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8,
    0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
    0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa,
    0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039, 0x655b59c3, 0x8f0ccc92,
    0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
    0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391,
  ]);

  const PADDING = new Uint8Array([
    0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00,
  ]);

  function F(X: number, Y: number, Z: number) {
    return (X & Y) | (~X & Z);
  }

  function G(X: number, Y: number, Z: number) {
    return (X & Z) | (Y & ~Z);
  }

  function H(X: number, Y: number, Z: number) {
    return X ^ Y ^ Z;
  }

  function I(X: number, Y: number, Z: number) {
    return Y ^ (X | ~Z);
  }

  function rotateLeft(x: number, n: number) {
    if (n != Math.floor(n) || n < 0) {
      throw "Invalid argument (n): requires positive integer";
    }
    return ((x << n) | (x >>> (32 - n))) >>> 0;
  }

  function unsigned32Add(...numbers: number[]) {
    return Array.from(numbers).reduce(function (a, b) {
      return ((a >>> 0) + (b >>> 0)) >>> 0;
    }, 0);
  }

  function getChunk(i: number, message: any) {
    let m = [];
    for (let j = 0; j < 16; ++j) {
      m[j] =
        (message[i * 64 + j * 4 + 0] << 0) |
        (message[i * 64 + j * 4 + 1] << 8) |
        (message[i * 64 + j * 4 + 2] << 16) |
        (message[i * 64 + j * 4 + 3] << 24);
    }
    return m;
  }

  function setStyle(i: number, newColor: string): void {
    if (i === 0) {
      setStyle0({ background: newColor });
    } else if (i === 1) {
      setStyle1({ background: newColor });
    } else if (i === 2) {
      setStyle2({ background: newColor });
    } else if (i === 3) {
      setStyle3({ background: newColor });
    } else if (i === 4) {
      setStyle4({ background: newColor });
    } else if (i === 5) {
      setStyle5({ background: newColor });
    } else if (i === 6) {
      setStyle6({ background: newColor });
    } else if (i === 7) {
      setStyle7({ background: newColor });
    } else if (i === 8) {
      setStyle8({ background: newColor });
    } else if (i === 9) {
      setStyle9({ background: newColor });
    } else if (i === 10) {
      setStyle10({ background: newColor });
    } else if (i === 11) {
      setStyle11({ background: newColor });
    } else if (i === 12) {
      setStyle12({ background: newColor });
    } else if (i === 13) {
      setStyle13({ background: newColor });
    } else if (i === 14) {
      setStyle14({ background: newColor });
    } else if (i === 15) {
      setStyle15({ background: newColor });
    }
  }

  function resetStyles(): void {
    setStyle0({ background: "white" });
    setStyle1({ background: "white" });
    setStyle2({ background: "white" });
    setStyle3({ background: "white" });
    setStyle4({ background: "white" });
    setStyle5({ background: "white" });
    setStyle6({ background: "white" });
    setStyle7({ background: "white" });
    setStyle8({ background: "white" });
    setStyle9({ background: "white" });
    setStyle10({ background: "white" });
    setStyle11({ background: "white" });
    setStyle12({ background: "white" });
    setStyle13({ background: "white" });
    setStyle14({ background: "white" });
    setStyle15({ background: "white" });
  }

  useEffect(() => {
    if (columnIndex != 0) {
      if (
        columnIndex == 16 ||
        columnIndex == 32 ||
        columnIndex == 48 ||
        columnIndex == 64
      ) {
        resetStyles();
      }
      if (columnIndex === 64) {
        setShowFinal(true);
        return;
      }
      if (columnIndex <= 15) {
        setStyle(columnIndex, "paleGreen");
      } else if (columnIndex <= 31) {
        setStyle((5 * columnIndex + 1) % 16, "paleGreen");
      } else if (columnIndex <= 47) {
        setStyle((3 * columnIndex + 5) % 16, "paleGreen");
      } else if (columnIndex <= 63) {
        setStyle((7 * columnIndex) % 16, "paleGreen");
      }
      let E;
      let g;

      switch (Math.floor(columnIndex / 16)) {
        case 0:
          E = F(B, C, D);
          g = columnIndex;
          break;
        case 1:
          E = G(B, C, D);
          g = (columnIndex * 5 + 1) % 16;
          break;
        case 2:
          E = H(B, C, D);
          g = (columnIndex * 3 + 5) % 16;
          break;
        default:
          E = I(B, C, D);
          g = (columnIndex * 7) % 16;
          break;
      }

      setDD(C);
      setCC(B);
      setBB(
        unsigned32Add(
          B,
          rotateLeft(unsigned32Add(A, E, K[columnIndex], m[g]), S[columnIndex])
        )
      );
      setAA(D);
    }
  }, [columnIndex]);

  useEffect(() => {
    if (msg != "") {
      setShowInitial(false);
      let input: string = msg;
      // Determine the size of the message in bytes
      let size: number = input.length;
      let paddingLength: number =
        size % 64 < 56 ? 56 - (size % 64) : 56 + 64 - (size % 64);
      let inputBytes = new Uint8Array(size + paddingLength + 8);

      // Copy the number values of the characters into an array
      for (let i = 0; i < input.length; ++i) {
        inputBytes[i] = input.charCodeAt(i);
      }

      // Pad the array to be congruent to 56 mod 64 (bytes)
      for (let i = 0; i < paddingLength; ++i) {
        inputBytes[size + i] = PADDING[i];
      }

      // Separate the size in bits into two 32-bit unsigned integers
      let sizeBitsLower = (size * 8) >>> 0;
      let sizeBitsUpper = ((size * 8) / Math.pow(2, 32)) >>> 0;

      // Append the size in bits
      inputBytes[size + paddingLength + 0] = (sizeBitsLower >>> 0) & 0xff;
      inputBytes[size + paddingLength + 1] = (sizeBitsLower >>> 8) & 0xff;
      inputBytes[size + paddingLength + 2] = (sizeBitsLower >>> 16) & 0xff;
      inputBytes[size + paddingLength + 3] = (sizeBitsLower >>> 24) & 0xff;
      inputBytes[size + paddingLength + 4] = (sizeBitsUpper >>> 0) & 0xff;
      inputBytes[size + paddingLength + 5] = (sizeBitsUpper >>> 8) & 0xff;
      inputBytes[size + paddingLength + 6] = (sizeBitsUpper >>> 16) & 0xff;
      inputBytes[size + paddingLength + 7] = (sizeBitsUpper >>> 24) & 0xff;
      setM(getChunk(0, inputBytes));
    }
  }, [msg]);

  useEffect(() => {
    if (showFinal) {
      let result1 = new ArrayBuffer(16);
      let view = new Uint32Array(result1);
      view[0] = A + 0x67452301;
      view[1] = B + 0xefcdab89;
      view[2] = C + 0x98badcfe;
      view[3] = D + 0x10325476;
      console.log(result1);
      setResult(new Uint8Array(result1));
    }
  }, [showFinal]);

  useEffect(() => {
    if (m.length !== 1) {
      setValue0(m[0]);
      setValue1(m[1]);
      setValue2(m[2]);
      setValue3(m[3]);
      setValue4(m[4]);
      setValue5(m[5]);
      setValue6(m[6]);
      setValue7(m[7]);
      setValue8(m[8]);
      setValue9(m[9]);
      setValue10(m[10]);
      setValue11(m[11]);
      setValue12(m[12]);
      setValue13(m[13]);
      setValue14(m[14]);
      setValue15(m[15]);

      let E;
      let g;

      switch (Math.floor(columnIndex / 16)) {
        case 0:
          E = F(B, C, D);
          g = columnIndex;
          break;
        case 1:
          E = G(B, C, D);
          g = (columnIndex * 5 + 1) % 16;
          break;
        case 2:
          E = H(B, C, D);
          g = (columnIndex * 3 + 5) % 16;
          break;
        default:
          E = I(B, C, D);
          g = (columnIndex * 7) % 16;
          break;
      }

      setDD(C);
      setCC(B);
      setBB(
        unsigned32Add(
          B,
          rotateLeft(unsigned32Add(A, E, K[columnIndex], m[g]), S[columnIndex])
        )
      );
      setAA(D);
    }
  }, [m]);

  const formSubmitted = (e: any) => {
    e.preventDefault();
    if (
      e.target.stringGetter.value.length > 0 &&
      e.target.stringGetter.value.length < 56
    )
      setMsg(e.target.stringGetter.value);
    else alert("Bad input");
  };

  function nextBlock(): void {
    if (columnIndex === 64) {
      return;
    }
    setA(AA);
    setB(BB);
    setC(CC);
    setD(DD);
    if (columnIndex <= 15) {
      setStyle(columnIndex, "black");
    } else if (columnIndex <= 31) {
      setStyle((5 * columnIndex + 1) % 16, "black");
    } else if (columnIndex <= 47) {
      setStyle((3 * columnIndex + 5) % 16, "black");
    } else if (columnIndex <= 63) {
      setStyle((7 * columnIndex) % 16, "black");
    }

    setColumnIndex(columnIndex + 1);
  }

  return (
    <div>
      {showInitial && (
        <div>
          <h2>Please enter a string smaller than 448 bits:</h2>
          <Form onSubmit={formSubmitted}>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Enter string" name={"stringGetter"} />
              <Form.Text className="text-muted">
                Make sure it is not an empty string.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enter
            </Button>
          </Form>
        </div>
      )}
      {!showInitial && (
        <div>
          <div className="Row">
            <Table className="horizontalTable">
              <tr
                style={{
                  borderLeft: 0,
                  borderTop: 0,
                  borderRight: 0,
                  textAlign: "center",
                }}
              >
                <td>0</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td style={style0}>0x{value0.toString(16)}</td>
                <td style={style1}>0x{value1.toString(16)}</td>
                <td style={style2}>0x{value2.toString(16)}</td>
                <td style={style3}>0x{value3.toString(16)}</td>
                <td style={style4}>0x{value4.toString(16)}</td>
                <td style={style5}>0x{value5.toString(16)}</td>
                <td style={style6}>0x{value6.toString(16)}</td>
                <td style={style7}>0x{value7.toString(16)}</td>
                <td style={style8}>0x{value8.toString(16)}</td>
                <td style={style9}>0x{value9.toString(16)}</td>
                <td style={style10}>0x{value10.toString(16)}</td>
                <td style={style11}>0x{value11.toString(16)}</td>
                <td style={style12}>0x{value12.toString(16)}</td>
                <td style={style13}>0x{value13.toString(16)}</td>
                <td style={style14}>0x{value14.toString(16)}</td>
                <td style={style15}>0x{value15.toString(16)}</td>
              </tr>
            </Table>
          </div>
          <div className="Row">
            <div className="Column">
              <Table className="verticalTable">
                <tr>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "right",
                    }}
                  >
                    A
                  </td>
                  <td style={{ background: "paleGreen" }}>
                    0x{A.toString(16)}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "right",
                    }}
                  >
                    B
                  </td>
                  <td style={{ background: "yellow" }}>0x{B.toString(16)}</td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "right",
                    }}
                  >
                    C
                  </td>
                  <td style={{ background: "orange" }}>0x{C.toString(16)}</td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "right",
                    }}
                  >
                    D
                  </td>
                  <td style={{ background: "plum " }}>0x{D.toString(16)}</td>
                </tr>
              </Table>
            </div>
            <div className="Column">
              <Table className="verticalTable">
                <tr>
                  <td style={{ background: "plum" }}>0x{AA.toString(16)}</td>
                  <td
                    style={{
                      borderRight: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    A'
                  </td>
                </tr>
                <tr>
                  <td style={{ background: "paleGreen" }}>
                    0x{BB.toString(16)}
                  </td>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    B'
                  </td>
                </tr>
                <tr>
                  <td style={{ background: "yellow" }}>0x{CC.toString(16)}</td>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    C'
                  </td>
                </tr>
                <tr>
                  <td style={{ background: "orange" }}>0x{DD.toString(16)}</td>
                  <td
                    style={{
                      borderLeft: 0,
                      borderTop: 0,
                      borderBottom: 0,
                      textAlign: "left",
                    }}
                  >
                    D'
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </div>
      )}
      {!showFinal && !showInitial && (
        <div className="Row">
          <Button variant="primary" onClick={nextBlock}>
            Click me!
          </Button>
        </div>
      )}
      <div className="Row">
        {showFinal && (
          <div className="finalText">
            <h2>
              After the final computation: 0x
              {Array.from(result)
                .map((i) => i.toString(16).padStart(2, "0"))
                .join("")}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Manual;
