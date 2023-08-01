import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextData from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextData>
        <App />
      </ContextData>
    </BrowserRouter>
  </React.StrictMode>
);
