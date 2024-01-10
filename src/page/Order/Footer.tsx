import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";

const Footer = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const nav = useNavigate();
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

      <OrderBtn $isLoading={loading}>
        {loading ? "로딩중..." : "주문하기"}
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

const OrderBtn = styled.button<{ $isLoading: boolean }>`
  width: 100%;
  height: 4rem;

  border: none;

  color: white;
  background-color: ${(props) => (props.$isLoading ? "gray" : "black")};

  &:hover {
    cursor: ${(props) => !props.$isLoading && "pointer"};
  }
`;

export default Footer;
