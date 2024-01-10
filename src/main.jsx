import React from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ------------------ REDUX ------------------
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//npm install redux-devtools-extension --force
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index";
const store = configureStore(
  {
    reducer: rootReducer,
  }
  // composeWithDevTools()
);
// const store = configureStore(rootReducer, composeWithDevTools());

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
