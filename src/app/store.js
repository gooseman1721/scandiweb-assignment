import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/product_data/cartSlice";
import productListReducer from "../features/product_data/productListSlice";
import productCategoriesReducer from "../features/product_data/productCategoriesSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    productList: productListReducer,
    productCategories: productCategoriesReducer
  },
});
