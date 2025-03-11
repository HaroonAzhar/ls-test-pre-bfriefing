import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/lib/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  checkoutSuccess: boolean;
}

const initialState: CartState = {
  cartItems: [],
  checkoutSuccess: false,
};

export const checkoutCart = createAsyncThunk("cart/checkout", async (cart: CartItem[]) => {
  const response = await fetch("https://your-api-endpoint.com/checkout", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.cartItems.splice(index, 1)[0];
        // Restore product back to list
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
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
