import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema do PrimeReact
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.scss';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);