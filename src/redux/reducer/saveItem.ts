import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DataType {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  count?: number | undefined;
}

interface StateType {
  itemList: DataType[];
}
const initialState: StateType = {
  itemList: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    //api 요청으로 데이터를 받아서 저장
    saveItem: (state, action: PayloadAction<DataType[]>) => {
      state.itemList = action.payload;
    },

    //장바구니 추가 시 개수 증가
    increaseCartItemCount: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line array-callback-return
      state.itemList.find((e) => {
        if (e.id === action.payload) {
          // count 키 값이 없다면 새로 추가
          if ("count" in e === false) {
            e.count = 1;
          } else {
            //  count 키 값이 있거나 값이 0이라면 1증가
            if (e.count || e.count === 0) {
              e.count += 1;
            }
          }
        }
      });
    },

    //장바구니 제거 시 개수 감소
    decreaseCartItemCount: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line array-callback-return
      state.itemList.find((e) => {
        if (e.id === action.payload) {
          if (e.count) {
            e.count -= 1;
          }
        }
      });
    },
  },
});

export const itemAction = itemSlice.actions;
export default itemSlice.reducer;
