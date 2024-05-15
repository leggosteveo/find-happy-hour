import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  EstablishmentsServiceProvider,
} from "./js/services/EstablishmentsService";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EstablishmentsServiceProvider>
      <App />
    </EstablishmentsServiceProvider>
  </React.StrictMode>
);
