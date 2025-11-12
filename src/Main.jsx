import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./camponent/App.jsx";
import App2 from "./camponent/main4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
