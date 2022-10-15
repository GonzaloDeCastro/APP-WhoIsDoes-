import React from "react";
import ReactDOM from "react-dom/client";
import GlobalCSS from "./css/global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </>
);
