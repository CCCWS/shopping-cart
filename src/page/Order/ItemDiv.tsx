import React, { useRef } from "react";
import styled from "styled-components";

import { useTypeDispatch } from "../../redux/reduxType";
import { cartAction } from "../../redux/reducer/cart";
import { itemAction } from "../../redux/reducer/saveItem";

import useObserver from "../../customHooks/useObserver";

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
  const itemRef = useRef<HTMLDivElement>(null);
  const { isView } = useObserver(itemRef, 0.2, true);

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
    <Div ref={itemRef} $cartItemCount={item.count} $isView={isView}>
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

const Div = styled.div<{
  $cartItemCount: number | undefined;
  $isView: boolean;
}>`
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

  transition: 0.5s;

  opacity: ${(props) => (props.$isView ? "1" : "0.3")};
  transform: ${(props) =>
    props.$isView ? "translateY(0px)" : "translateY(50px)"};

  @media (max-width: 460px) {
    grid-template-columns: 20% calc(100% - 20% - 10px);
    gap: 0px 10px;
    padding: 5px;
  }

  @media (max-width: 300px) {
    grid-template-columns: 30% calc(100% - 30% - 10px);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border: 2px solid black;
    }
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
  grid-template-columns: 1fr 1.5fr;
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

  /* gap: 0px 5px; */

  div {
    width: 1.2rem;
    height: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 1.2rem;
    height: 1.2rem;

    background-color: transparent;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }
`;

const ItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default React.memo(ItemDiv);
