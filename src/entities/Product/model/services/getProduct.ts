import { Product } from './../types/Product';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'App/providers/StoreProvider/config/stateSchema';

const getProduct = createAsyncThunk<Product, string, ThunkConfig<string>> (
   'product/get',
   async (data, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Product>('/product');

            if (!response.data) {
               throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
   }
)

export { getProduct }