import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "@/lib/types/product";

export const fetchProducts = createAsyncThunk<Product[], void>(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://otx0e1z2lg.execute-api.us-west-2.amazonaws.com/products");
    return await response.json();
  }
);

interface ProductState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    restoreProduct(state) {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { restoreProduct } = productSlice.actions;
export default productSlice.reducer;
