import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTypeDispatch, useTypeSelector } from "../../redux/reduxType";

import { loadingAction } from "../../redux/reducer/loading";

const Footer = () => {
  const nav = useNavigate();
  const dispatch = useTypeDispatch();

  const cartData = useTypeSelector((state) => state.cart);
  const dataLoading = useTypeSelector((state) => state.loading.getApiLoading);
  const orderLoading = useTypeSelector((state) => state.loading.orderLoading);

  const onOrderBtnClick = () => {
    if (dataLoading) return;
    if (orderLoading) return;
    if (cartData.totalCount === 0) return;

    dispatch(loadingAction.changeOrderLoadingState(true));
  };

  useEffect(() => {
    if (!orderLoading) return;

    const movePage = setTimeout(() => {
      // dispatch(loadingAction.changeOrderLoadingState(false));

      //에러 상황 연출을 위해 1개의 상품 구매시 에러 페이지로 이동
      if (cartData.totalCount === 1) {
        nav("/error");
      }

      if (cartData.totalCount > 1) {
        nav("/complete");
      }
    }, 2000);

    return () => clearTimeout(movePage);
  }, [nav, dispatch, cartData, orderLoading]);

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
  height: 100%;
  background-color: white;

  box-shadow: 0px 0px 10px 1px gray;
  border-radius: 20px 20px 0px 0px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 1;
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
