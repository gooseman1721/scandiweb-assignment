import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { get_item_details } from "../../GraphQLEndpoint.jsx";

const fetchProductCartDetails = createAsyncThunk(
  "cart/fetchDetails",
  (product_id) => get_item_details(product_id)
);

function objectsAreTheSame(objectA, objectB) {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) {
    return false;
  } else if (
    !Object.keys(objectA).every((key) => Object.keys(objectB).includes(key))
  ) {
    return false;
  } else {
    return Object.keys(objectA).every((key) => objectA[key] === objectB[key]);
  }
}

const initialState = {
  cartProducts: [],
  status: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartProducts.push({ ...action.payload, cartAmount: 1 });
    },
    addProductToCart(state, action) {
      const product = state.cartProducts.find(
        (product) =>
          product.id === action.payload.product.id &&
          (!action.payload.selectedAttributes ||
            objectsAreTheSame(
              product.selectedAttributes,
              action.payload.selectedAttributes
            ))
      );

      if (!product) {
        console.log(state.cartProducts);
        state.cartProducts.push({
          ...action.payload.product,
          cartAmount: 1,
          selectedAttributes: action.payload.selectedAttributes,
        });
      } else {
        product.cartAmount++;
      }
    },
    increaseItemCount(state, action) {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      item.cartAmount++;
    },
    decreaseItemCount(state, action) {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      item.cartAmount--;
      if (item.cartAmount < 1) {
        state.cartProducts = state.cartProducts.filter(
          (remaining) => remaining.id !== item.id
        );
      }
    },
    removeItem(state, action) {
      const item = state.cartProducts.find(
        (item) => item.id === action.payload
      );
      state.cartProducts = state.cartProducts.filter(
        (remaining) => remaining.id !== item.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductCartDetails.fulfilled, (state, action) => {
      const defaultAttributeValues = () => {
        const attributeObj = {};
        action.payload.product.attributes.forEach((element) => {
          attributeObj[element.id] = element.items[0].id;
        });
        return attributeObj;
      };

      state.cartProducts.push({
        ...action.payload.product,
        cartAmount: 1,
        selectedAttributes: defaultAttributeValues(),
      });
    });
  },
});

export const {
  addItem,
  addProductToCart,
  increaseItemCount,
  decreaseItemCount,
  removeItem,
} = cartSlice.actions;

export { fetchProductCartDetails };

export default cartSlice.reducer;
