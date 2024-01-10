import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./reducer/saveItem";
import loadingReducer from "./reducer/loading";
import cartReducer from "./reducer/cart";

const store = configureStore({
  reducer: {
    data: itemReducer,
    loading: loadingReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
