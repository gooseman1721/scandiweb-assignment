import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: null,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productListCreate(state, action) {
      state.products = [...action.payload];
    },
  },
});

export const { productListCreate } = productListSlice.actions;

export default productListSlice.reducer;
