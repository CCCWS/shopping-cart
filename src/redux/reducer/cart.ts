/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ItemType {
  id: string;
  count: number;
}

interface StateType {
  totalCount: number;
  totalPrice: number;
  itemList: ItemType[];
}
const initialState: StateType = {
  totalCount: 0,
  totalPrice: 0,
  itemList: [
    {
      id: "TEST",
      count: 5,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //장바구니 상품 개수 증가
    calcAddCart: (state, action: PayloadAction<number>) => {
      state.totalCount = state.totalCount + 1;
      state.totalPrice = state.totalPrice + action.payload;
    },

    //장바구니 상품 개수 하락
    calcRemoveCart: (state, action: PayloadAction<number>) => {
      state.totalCount = state.totalCount - 1;
      state.totalPrice = state.totalPrice - action.payload;
    },

    //상품 개수 증가
    addCartList: (state, action: PayloadAction<string>) => {
      //장바구니에 상품이 있는지 확인하고
      //있다면 개수 추가 없다면 return

      const searchCart = state.itemList.find((e, i: number) => {
        if (e.id === action.payload) {
          console.log("개수 증가");
          e.count += 1;
        }

        return e.id === action.payload;
      });

      //searchCart에서 상품을 찾지 못 했다면 새로 추가
      if (!searchCart) {
        state.itemList.push({ id: action.payload, count: 1 });
        console.log("새로 추가");
      }
    },

    //상품 개수 감소
    removeCartList: (state, action: PayloadAction<string>) => {
      state.itemList.find((e, i: number) => {
        if (e.id === action.payload) {
          console.log("개수 감소");
          e.count -= 1;

          if (e.count === 0) {
            console.log("상품 제거");
            state.itemList.splice(i, 1);
          }
        }

        return e.id === action.payload;
      });
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
