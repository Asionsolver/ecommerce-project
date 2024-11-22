import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";
// import App from "./App";
const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
          <Toaster
            className=""
            position="top-right"
            toastOptions={{
              duration: 5000,
            }}
            style={{
              background: "#6f68d1",
              color: "#fff",
            }}
          />
        </Suspense>
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
