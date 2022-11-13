import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/product_data/cartSlice";
import productListReducer from "../features/product_data/productListSlice";
import productCategoriesReducer from "../features/product_data/productCategoriesSlice"
import productDetailsSlice from "../features/product_data/productDetailsSlice";

const persistentStore = localStorage.getItem('scandiwebAssignmentSessionData') ? JSON.parse(localStorage.getItem('scandiwebAssignmentSessionData')) : {}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    productList: productListReducer,
    productCategories: productCategoriesReducer,
    productDetails: productDetailsSlice
  },
  preloadedState: persistentStore
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem('scandiwebAssignmentSessionData', serializedState);
})
