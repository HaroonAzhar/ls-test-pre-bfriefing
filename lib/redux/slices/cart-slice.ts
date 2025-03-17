import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/lib/types/product";
import { CartItem } from "@/lib/types/cart";



interface CartState {
  cartItems: CartItem[];
  checkoutSuccess: boolean;
}

const initialState: CartState = {
  cartItems: [],
  checkoutSuccess: false,
};

export const checkoutCart = createAsyncThunk("cart/checkout", async (cart: CartItem[]) => {
  console.log("cart= ", cart);
  const response = await fetch("https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/sales", {
    method: "POST",
    body: JSON.stringify(cart),
  });
  return await response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.cartItems.find((item) => item.product_id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ product_id: action.payload.id, name:action.payload.name, price:action.payload.price, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex((item) => item.product_id === action.payload);
      if (index !== -1) {
        const removedItem = state.cartItems.splice(index, 1)[0];
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.cartItems.find((item) => item.product_id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkoutCart.fulfilled, (state) => {
      state.cartItems = [];
      state.checkoutSuccess = true;
    });
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
