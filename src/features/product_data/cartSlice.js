import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.entities.push(action.payload);
    },
    increaseItemCount(state, action) {
      const item = state.entities.find((item) => item.id === action.payload);
      item.cartAmount++;
    },
    decreaseItemCount(state, action) {
      const item = state.entities.find((item) => item.id === action.payload);
      item.cartAmount--;
      if (item.cartAmount < 1) {
        state.entities = state.entities.filter(
          (remaining) => remaining.id !== item.id
        );
      }
    },
    removeItem(state, action) {
      const item = state.entities.find((item) => item.id === action.payload);
      state.entities = state.entities.filter(
        (remaining) => remaining.id !== item.id
      );
    },
  },
});

export const { addItem, increaseItemCount, decreaseItemCount, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
