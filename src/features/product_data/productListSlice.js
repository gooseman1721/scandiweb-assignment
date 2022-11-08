import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: null,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productListCreate(state, action) {
      state.entities.push(action.payload);
    },
  },
});

export const { productListCreate } = productListSlice.actions;

export default productListSlice.reducer;
