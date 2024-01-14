import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { useTypeDispatch, useTypeSelector } from "../../redux/reduxType";
import { itemAction } from "../../redux/reducer/saveItem";
import { cartAction } from "../../redux/reducer/cart";
import { loadingAction } from "../../redux/reducer/loading";

import { PageDiv } from "../../PageStype";

import Header from "./Header";
import Footer from "./Footer";
import ItemList from "./ItemList";

const Order = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(loadingAction.changeGetApiLoadingState(true));
    dispatch(loadingAction.changeOrderLoadingState(false));
    dispatch(cartAction.initCart());

    const getApi = setTimeout(async () => {
      if (process.env.NODE_ENV === "development") {
        const res = await axios.get("http://localhost:3001/items");
        dispatch(itemAction.saveItem(res.data));
      }

      if (process.env.NODE_ENV === "production") {
        const res = await axios.get(
          "https://my-json-server.typicode.com/cccws/tempDB/db"
        );
        dispatch(itemAction.saveItem(res.data.items));
      }

      dispatch(loadingAction.changeGetApiLoadingState(false));
    }, 2000);

    return () => clearTimeout(getApi);
  }, [dispatch]);

  return (
    <OrderDiv>
      <Header />
      <ItemList />
      <Footer />
    </OrderDiv>
  );
};

const OrderDiv = styled(PageDiv)`
  width: 100%;
  height: 100vh;

  position: relative;
  overflow-y: scroll;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default Order;
