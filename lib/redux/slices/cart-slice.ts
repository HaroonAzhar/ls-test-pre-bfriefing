import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/lib/types/product";
import { CartItem } from "@/lib/types/cart";

interface CartState {
  cartItems: CartItem[];
  checkoutSuccess: boolean;
  checkoutMessage: string | null; 
}

const initialState: CartState = {
  cartItems: [],
  checkoutSuccess: false,
  checkoutMessage: null,
};

export const checkoutCart = createAsyncThunk("cart/checkout", async (cart: CartItem[], { rejectWithValue }) => {
  try {
    const response = await fetch("https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/sales", {
      method: "POST",
      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    
    const resp = await response.json();
    console.log("response", resp);
    return resp
  } catch (error:any) {
    return rejectWithValue(error.message);
  }
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
        state.cartItems.push({ product_id: action.payload.id, name: action.payload.name, price: action.payload.price, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((item) => item.product_id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const item = state.cartItems.find((item) => item.product_id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    resetCheckoutState(state) {
      state.checkoutSuccess = false;
      state.checkoutMessage = null;
      state.cartItems = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutCart.fulfilled, (state, action) => {
        state.cartItems = [];
        state.checkoutSuccess = true;
        state.checkoutMessage = `Order confirmed! Your order ID: ${action.payload.orderId}`;
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        state.checkoutSuccess = false;
        state.checkoutMessage = `Checkout failed: ${action.payload}`;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, resetCheckoutState } = cartSlice.actions;
export default cartSlice.reducer;
