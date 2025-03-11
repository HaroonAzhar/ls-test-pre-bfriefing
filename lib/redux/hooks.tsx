import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

// // Custom hooks to use throughout your app
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()