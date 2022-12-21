import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["default"],
  selectedCategory: 0,
  status: null,
};

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {
    productCategoriesCreate(state, action) {
      state.categories = [...action.payload];
    },
    changeSelectedCategory(state, action) {
      state.selectedCategory = parseInt(action.payload);
    },
  },
});

export const selectProductCategories = (state) => state.categories;

export const selectSelectedProductCategory = (state) => state.selectedCategory;

export const { productCategoriesCreate, changeSelectedCategory } =
  productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
