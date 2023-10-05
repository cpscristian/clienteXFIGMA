import React from "react";
import ReactDOMClient from "react-dom/client";
import { PaginaLogin } from "./screens/PaginaLogin";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PaginaLogin />);
