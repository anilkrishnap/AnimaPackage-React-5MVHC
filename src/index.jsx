import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './global.css';

const app = document.getElementById("app");
ReactDOM.hydrate(<App />, app);

// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<App />);
