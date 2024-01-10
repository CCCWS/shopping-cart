import React, { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/reduxStore";

import ItemDiv from "./ItemDiv";

const ItemList = () => {
  const data = useSelector((state: RootState) => state.data.itemList);
  const dataLoading = useSelector(
    (state: RootState) => state.loading.getApiLoading
  );
  const orderLoading = useSelector(
    (state: RootState) => state.loading.orderLoading
  );

  return (
    <>
      <Item $orderLoading={orderLoading}>
        {dataLoading ? (
          <DataLoadingDiv>
            목록을
            <br />
            불러오고 있습니다.
          </DataLoadingDiv>
        ) : (
          <>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <ItemDiv item={item} />
              </React.Fragment>
            ))}
          </>
        )}
        {orderLoading && <OrderLoadingDiv>주문중 입니다.</OrderLoadingDiv>}
      </Item>
    </>
  );
};

const Item = styled.div<{ $orderLoading: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px 0px;

  padding: 20px;
  overflow-y: scroll;
`;

const DataLoadingDiv = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OrderLoadingDiv = styled(DataLoadingDiv)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);

  position: absolute;
`;

export default ItemList;
