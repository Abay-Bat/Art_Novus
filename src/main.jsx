import React from "react";
import { createRoot } from "react-dom/client"; // ✅ named import
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ✅ use createRoot directly, not ReactDOM.createRoot
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
