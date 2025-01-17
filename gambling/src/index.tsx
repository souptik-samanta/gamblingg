import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root")!); // Get the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
