import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { get_category_names } from "../../GraphQLEndpoint";

const fetchCategoryNames = createAsyncThunk(
  "productCategories/fetchCategories",
  () => get_category_names()
);

const initialState = {
  categories: ["default"],
  selectedCategory: 0,
  status: null,
};

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {
    changeSelectedCategory(state, action) {
      state.selectedCategory = parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryNames.fulfilled, (state, action) => {
      state.categories = [...action.payload];
    });
  },
});

export const selectProductCategories = (state) => state.categories;

export const selectSelectedProductCategory = (state) => state.selectedCategory;

export { fetchCategoryNames };

export const { changeSelectedCategory } = productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
