import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cartprovider from "./COMPONENTS/contexts/cartContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Cartprovider>
        <App />
      </Cartprovider>
    </BrowserRouter>
  </StrictMode>,
);
