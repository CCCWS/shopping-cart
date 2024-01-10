import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  loading: boolean;
}
const initialState: StateType = {
  loading: true,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    changeLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const loadingAction = loadingSlice.actions;
export default loadingSlice.reducer;
