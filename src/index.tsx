import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./redux/reduxStore";
import { Provider } from "react-redux";

import Landing from "./page/Landing";
import Order from "./page/Order/Order";
import Complete from "./page/Result/Complete";
import Error from "./page/Result/Error";

import GlobalStyle from "./GlobalStyle";
import "./color.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
