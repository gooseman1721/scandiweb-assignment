import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: null,
};

const productCategoriesSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productCategoriesCreate(state, action) {
      state.categories = [...action.payload];
    },
  },
});

export const selectProductCategories = (state) => state.categories;

export const { productCategoriesCreate } = productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
