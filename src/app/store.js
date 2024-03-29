import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/product_data/cartSlice";
import productListReducer from "../features/product_data/productListSlice";
import productCategoriesReducer from "../features/product_data/productCategoriesSlice";
import productDetailsSlice from "../features/product_data/productDetailsSlice";
import currencySlice from "../features/product_data/currencySlice";

const persistentStore = localStorage.getItem("scandiwebAssignmentSessionData")
  ? JSON.parse(localStorage.getItem("scandiwebAssignmentSessionData"))
  : {};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productList: productListReducer,
    productCategories: productCategoriesReducer,
    productDetails: productDetailsSlice,
    currencies: currencySlice,
  },
  preloadedState: persistentStore,
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("scandiwebAssignmentSessionData", serializedState);
});
