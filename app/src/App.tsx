import * as React from "react";
import { createRoot } from "react-dom/client";
import { UdpServer } from "./pages/UdpServer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <p>Hello davis</p>
    <UdpServer></UdpServer>
  </React.StrictMode>
);
