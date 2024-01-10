import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useTypeDispatch } from "./redux/reduxType";
import { deviceAction } from "./redux/reducer/device";

import Landing from "./page/Landing";
import Order from "./page/Order/Order";
import Complete from "./page/Result/Complete";
import Error from "./page/Result/Error";

import GlobalStyle from "./GlobalStyle";
import "./color.css";
import theme from "./theme";

const App = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(deviceAction.checkDeviceType());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
