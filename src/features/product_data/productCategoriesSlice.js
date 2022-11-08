import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: null,
};

const productCategoriesSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productCategoriesCreate(state, action) {
      state.entities.push(action.payload);
    },
  },
});

export const selectProductCategories = (state) => state.entities;

export const { productCategoriesCreate } = productCategoriesSlice.actions;

export default productCategoriesSlice.reducer;
