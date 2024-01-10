import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { useTypeDispatch } from "../../redux/reduxType";
import { itemAction } from "../../redux/reducer/saveItem";
import { cartAction } from "../../redux/reducer/cart";
import { loadingAction } from "../../redux/reducer/loading";
import { deviceAction } from "../../redux/reducer/device";

import { PageDiv } from "../../PageStype";

import Header from "./Header";
import Footer from "./Footer";
import ItemList from "./ItemList";

import db from "../../db/db.json";

const Order = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(loadingAction.changeGetApiLoadingState(true));
    dispatch(loadingAction.changeOrderLoadingState(false));
    dispatch(cartAction.initCart());

    const getApi = setTimeout(async () => {
      // const res = await axios.get("http://localhost:3001/items");
      // dispatch(itemAction.saveItem(res.data));
      dispatch(itemAction.saveItem(db.items));
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
  position: relative;
  display: grid;
  grid-template-rows: 5% 1fr 11rem;
`;

export default Order;
