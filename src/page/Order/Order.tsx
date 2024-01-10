import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../redux/reduxStore";

import { itemAction } from "../../redux/reducer/saveItem";
import { loadingAction } from "../../redux/reducer/loading";

import { PageDiv } from "../../PageStype";

import Header from "./Header";
import Footer from "./Footer";
import ItemList from "./ItemList";

import db from "../../db/db.json";

// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function Order() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingAction.changeGetApiLoadingState(true));

    const api = async () => {
      // const res = await axios.get("http://localhost:3001/items");
      dispatch(itemAction.saveItem(db.items));
      dispatch(loadingAction.changeGetApiLoadingState(false));
    };

    setTimeout(() => {
      api();
    }, 1000);
  }, [dispatch]);

  return (
    <OrderDiv>
      <Header></Header>
      <ItemList></ItemList>
      <Footer></Footer>
    </OrderDiv>
  );
}

const OrderDiv = styled(PageDiv)`
  position: relative;
  display: grid;
  grid-template-rows: 5% 1fr 11rem;
`;

export default Order;
