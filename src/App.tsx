import { Routes, Route } from "react-router-dom";

import Landing from "./page/Landing";
import Order from "./page/Order/Order";
import Complete from "./page/Result/Complete";
import Error from "./page/Result/Error";

import GlobalStyle from "./GlobalStyle";
import "./color.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
