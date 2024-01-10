import React, { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/reduxStore";

import ItemDiv from "./ItemDiv";

const ItemList = () => {
  const data = useSelector((state: RootState) => state.data.itemList);
  const loading = useSelector((state: RootState) => state.loading.loading);

  const [click, setClick] = useState<boolean>(false);

  return (
    <Item>
      {loading ? (
        <Loading>
          목록을
          <br />
          불러오고 있습니다.
        </Loading>
      ) : (
        <>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <ItemDiv item={item}></ItemDiv>
            </React.Fragment>
          ))}
        </>
      )}
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  height: calc(100% - 12rem - 5%);

  display: flex;
  flex-direction: column;
  gap: 20px 0px;

  padding: 20px;
  overflow-y: scroll;
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

export default ItemList;
