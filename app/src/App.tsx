import * as React from "react";
import { createRoot } from "react-dom/client";
import { UdpServer } from "./pages/UdpServer";
import { TimeComparisons } from "./pages/TimeComparions";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

const Main: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const menuButtonStyle: React.CSSProperties = {
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "lightblue",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ display: "flex" }}>
        <button style={menuButtonStyle} onClick={() => setSelectedIndex(0)}>
          Udp
        </button>
        <button style={menuButtonStyle} onClick={() => setSelectedIndex(1)}>
          Time
        </button>
        <button style={menuButtonStyle} onClick={() => setSelectedIndex(2)}>
          Manual MD5
        </button>
      </div>
      <div style={{ flexGrow: 1 }}>
        {selectedIndex === 0 && <UdpServer />}
        {selectedIndex === 1 && <div>Time</div>}
        {selectedIndex === 2 && <div>Manual MD5</div>}
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <TimeComparisons />
  </React.StrictMode>
);
