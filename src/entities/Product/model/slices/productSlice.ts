import { getProduct } from "../services/getProduct";
import { ProductSchema } from "./../types/Product";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductSchema = {
   isLoading: false,
   isError: false,
   data: undefined,
};

export const productSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProduct.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
         })
         .addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
         })
         .addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
         });
   },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
