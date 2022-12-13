import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get_currencies } from "../../GraphQLEndpoint";

const fetchCurrencies = createAsyncThunk("currency/fetchCurrencies", () =>
  get_currencies()
);

const initialState = {
  currencies: [],
  selectedCurrency: { label: "USD", symbol: "$" },
  status: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = [...action.payload];
    });
  },
});

export const { changeSelectedCurrency } = currencySlice.actions;

export { fetchCurrencies };

export default currencySlice.reducer;
