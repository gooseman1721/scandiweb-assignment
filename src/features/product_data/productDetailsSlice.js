import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetailsList: [],
  idList: [],
  status: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    productDetailsCreate(state, action) {
      if (!state.idList.includes(action.payload.id)) {
        state.idList.push(action.payload.id);
        state.productDetailsList.push(action.payload);
      }
    },
  },
});

export const { productDetailsCreate } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
