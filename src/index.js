import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";     // ⬅️ new
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>      {/* ⬅️ wrapper supplies mode + toggle */}
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
