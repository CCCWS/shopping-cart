import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "./reduxStore";

export const useTypeDispatch: () => AppDispatch = useDispatch;
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
