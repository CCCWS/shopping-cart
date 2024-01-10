import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  getApiLoading: boolean;
  orderLoading: boolean;
}
const initialState: StateType = {
  getApiLoading: true,
  orderLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    changeGetApiLoadingState: (state, action: PayloadAction<boolean>) => {
      state.getApiLoading = action.payload;
    },

    changeOrderLoadingState: (state, action: PayloadAction<boolean>) => {
      state.getApiLoading = action.payload;
    },
  },
});

export const loadingAction = loadingSlice.actions;
export default loadingSlice.reducer;
