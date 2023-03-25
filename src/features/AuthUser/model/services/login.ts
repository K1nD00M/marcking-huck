import { User } from 'entities/User/model/types/user';
import { authData } from './../types/form';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'App/providers/StoreProvider/config/stateSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userActions } from 'entities/User/model/slice/userSlice';

const loginUser = createAsyncThunk<User, authData, ThunkConfig<string>> (
   'user/auth',
   async (data, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', data);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
   }
)

export { loginUser }