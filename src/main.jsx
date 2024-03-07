import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./state/Api.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";
import globalReducer from "./state/index.jsx";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
setupListeners(store.dispatch);
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
