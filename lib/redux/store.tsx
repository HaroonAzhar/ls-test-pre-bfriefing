import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product-slice";
import cartReducer from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']