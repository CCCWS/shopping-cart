import React from "react";
import styled from "styled-components";

import { useTypeSelector } from "../../redux/reduxType";

import ItemDiv from "./ItemDiv";

const ItemList = () => {
  const data = useTypeSelector((state) => state.data.itemList);
  const dataLoading = useTypeSelector((state) => state.loading.getApiLoading);
  const orderLoading = useTypeSelector((state) => state.loading.orderLoading);

  return (
    <>
      <Item $orderLoading={orderLoading}>
        {dataLoading ? (
          <LoadingDiv>
            목록을
            <br />
            불러오고 있습니다.
          </LoadingDiv>
        ) : (
          <>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <ItemDiv item={item} />
              </React.Fragment>
            ))}
          </>
        )}
        {orderLoading && <LoadingDiv>주문중 입니다.</LoadingDiv>}
      </Item>
    </>
  );
};

const Item = styled.div<{ $orderLoading: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px 0px;

  padding: 20px;

  padding-bottom: calc(10rem + 20px);

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 10px;
    padding-right: calc(20% + 20px);
  }
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);

  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ItemList;
