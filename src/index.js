import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthService from "./context/AuthService";

ReactDOM.render(
  <React.StrictMode>
    <AuthService>
      <App />
    </AuthService>
  </React.StrictMode>,
  document.getElementById("root")
);
