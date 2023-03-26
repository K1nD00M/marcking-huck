import { Product } from './../types/Product';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'App/providers/StoreProvider/config/stateSchema';
import axios from 'axios';

const getProduct = createAsyncThunk (
   'product/get',
   async (data, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await axios<Product>('localhost:8000/product')

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