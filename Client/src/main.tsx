import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProviderContext } from "./Context/ContextApi.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProviderContext>
        <App />
      </DataProviderContext>
    </BrowserRouter>
  </StrictMode>,
);
