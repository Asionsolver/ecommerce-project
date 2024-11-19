import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
const App = lazy(() => import("./App"));
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
      <App /></Suspense>
    </StrictMode>
  </BrowserRouter>
);
 