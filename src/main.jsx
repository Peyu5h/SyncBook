import React from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ------------------ REDUX ------------------
import { Provider } from "react-redux";
import store from "./store";
// --------------------------------------------
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
