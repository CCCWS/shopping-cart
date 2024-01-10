import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducer/saveItem";
import loadingReducer from "./reducer/loading";
import cartReducer from "./reducer/cart";
import deviceReducer from "./reducer/device";

const store = configureStore({
  reducer: {
    data: itemReducer,
    loading: loadingReducer,
    cart: cartReducer,
    device: deviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
