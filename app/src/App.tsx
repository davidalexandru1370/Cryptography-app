import * as React from "react";
import { createRoot } from "react-dom/client";
import { TimeComparisons } from "./pages/timeComparions";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TimeComparisons />
  </React.StrictMode>
);
