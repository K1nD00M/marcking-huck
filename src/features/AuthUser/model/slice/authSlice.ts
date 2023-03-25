import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/form';
import { loginUser } from '../services/login'

const initialState: AuthSchema = {
   isLoading: false,
   isError: false,
   username: '',
   password: '',
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUsername: (state, action: PayloadAction<string>) => {
         state.username = action.payload;
     },
     setPassword: (state, action: PayloadAction<string>) => {
         state.password = action.payload;
     },
   },
   extraReducers: (builder) => {
      builder 
         .addCase(loginUser.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(loginUser.fulfilled, (state) => {
            state.isLoading = false
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
}); 

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
