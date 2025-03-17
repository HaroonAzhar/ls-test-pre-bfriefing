import { CartItem } from "@/lib/types/cart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Summary{
    total_cost: number, 
    sold_items: CartItem[], 
}

const initialState: Summary = {
  total_cost: 0,
  sold_items: [],
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setSummary(state, action: PayloadAction<{ total_cost: number; sold_items:CartItem[] }>) {
      state.total_cost = action.payload.total_cost;
      state.sold_items = action.payload.sold_items;
    },
    clearSummary(state) {
      state.sold_items=[];
      state.total_cost = 0;
    },
  },
});

export const { setSummary, clearSummary } = summarySlice.actions;
export default summarySlice.reducer;
