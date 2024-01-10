import React from "react";
import styled from "styled-components";

import { useTypeDispatch } from "../../redux/reduxType";
import { cartAction } from "../../redux/reducer/cart";
import { itemAction } from "../../redux/reducer/saveItem";

interface ItemType {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  count?: number;
}

interface ItemProps {
  item: ItemType;
}

const ItemDiv = ({ item }: ItemProps) => {
  const dispatch = useTypeDispatch();

  //장바구니 상품 추가 이벤트
  const onAddCart = (price: number, id: string) => {
    if (item.count === 99) return;
    dispatch(cartAction.calcAddCart(price));
    dispatch(itemAction.increaseCartItemCount(id));
  };

  //장바구니 상품 제거 이벤트
  const onRemoveCart = (price: number, id: string) => {
    if (item.count === 0 || item.count === undefined) return;
    dispatch(cartAction.calcRemoveCart(price));
    dispatch(itemAction.decreaseCartItemCount(id));
  };

  return (
    <Div $cartItemCount={item.count}>
      <ItemImg>
        <div></div>
      </ItemImg>

      <ItemInfoBox>
        <ItemName>
          {item.name} {item.event === 1 && <div>이벤트</div>}
        </ItemName>

        <ItemCount>
          <button onClick={() => onRemoveCart(item.price, item.id)}>-</button>
          <div>{item.count ? item.count : 0}</div>
          <button onClick={() => onAddCart(item.price, item.id)}>+</button>
        </ItemCount>

        <ItemPrice>{item.price.toLocaleString("ko-KR")}원</ItemPrice>
      </ItemInfoBox>
    </Div>
  );
};

const Div = styled.div<{ $cartItemCount: number | undefined }>`
  width: 100%;
  min-height: 6rem;

  border-radius: 10px;
  border: 2px solid var(--gray);

  background-color: ${(props) =>
    props.$cartItemCount && props.$cartItemCount >= 1 && "var(--itemCartBg)"};

  padding: 10px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 15% calc(100% - 15% - 20px);
  gap: 0px 20px;

  transition: 0.3s;

  @media (max-width: 460px) {
    grid-template-columns: 20% calc(100% - 20% - 10px);
    gap: 0px 10px;
    padding: 5px;
  }

  @media (max-width: 300px) {
    grid-template-columns: 30% calc(100% - 30% - 10px);
  }

  &:hover {
    border: 2px solid black;
  }
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    background-color: var(--gray);
    border-radius: 10px;
  }

  & > :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const ItemInfoBox = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & > :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const ItemName = styled.div`
  div {
    display: inline-block;

    padding: 3px;

    color: white;
    background-color: var(--eventBg);

    border-radius: 10px;
  }
`;

const ItemCount = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;

  gap: 0px 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

const ItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default React.memo(ItemDiv);
