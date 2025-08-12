import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Playground from "./Playground.jsx";
import "@fontsource/roboto/400.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
