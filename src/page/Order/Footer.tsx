import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reduxStore";

import { loadingAction } from "../../redux/reducer/loading";

const Footer = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const cartData = useSelector((state: RootState) => state.cart);
  const dataLoading = useSelector(
    (state: RootState) => state.loading.getApiLoading
  );

  const orderLoading = useSelector(
    (state: RootState) => state.loading.orderLoading
  );

  const onOrderBtnClick = () => {
    if (dataLoading) return;
    if (orderLoading) return;
    if (cartData.totalCount === 0) return;

    dispatch(loadingAction.changeOrderLoadingState(true));
  };

  return (
    <FooterDiv>
      <CartInfo>
        <div>{`총 수량 : ${cartData.totalCount.toLocaleString(
          "ko-KR"
        )}개`}</div>
        <div>{`총 가격 : ${cartData.totalPrice.toLocaleString(
          "ko-KR"
        )}원`}</div>
      </CartInfo>

      <OrderBtn
        onClick={onOrderBtnClick}
        $dataLoading={dataLoading}
        $orderLoading={orderLoading}
      >
        {orderLoading ? "로딩중..." : "주문하기"}
      </OrderBtn>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  width: 100%;
  height: 12rem;
  background-color: white;

  box-shadow: 0px 0px 10px 1px gray;
  border-radius: 20px 20px 0px 0px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartInfo = styled.div`
  width: 100%;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  gap: 5px 0px;
`;

const OrderBtn = styled.button<{
  $dataLoading: boolean;
  $orderLoading: boolean;
}>`
  width: 100%;
  height: 4rem;

  border: none;

  color: white;

  background-color: black;
  background-color: ${(props) =>
    (props.$dataLoading || props.$orderLoading) && "var(--gray)"};

  &:hover {
    cursor: ${(props) => !props.$dataLoading && "pointer"};
  }
`;

export default Footer;
