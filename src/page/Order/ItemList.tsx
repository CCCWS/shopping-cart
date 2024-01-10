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
      <Item>
        {dataLoading ? (
          <Loading>
            목록을
            <br />
            불러오고 있습니다.
          </Loading>
        ) : (
          <>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <ItemDiv item={item} />
              </React.Fragment>
            ))}
          </>
        )}
      </Item>
      {orderLoading && <Test>주문중 입니다.</Test>}
    </>
  );
};

const Item = styled.div`
  width: 100%;
  /* height: calc(100% - 12rem - 5%); */
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px 0px;

  padding: 20px;
  overflow-y: scroll;

  position: relative;
`;

const Loading = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Test = styled(Loading)`
  width: 100%;
  height: calc(100% - 12rem - 5%);
  top: 5%;
  /* backdrop-filter: blur(5px); */
  background-color: #ff000034;
  position: absolute;
`;

export default ItemList;
