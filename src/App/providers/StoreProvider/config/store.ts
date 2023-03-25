import { userReducer } from 'entities/User/model/slice/userSlice';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router';
import { CombinedState, Reducer } from 'redux';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducersManager';

export function createReduxStore(
   initialState?: StateSchema,
   asyncReducers?: ReducersMapObject<StateSchema>,
) {
   const rootReducers: ReducersMapObject<StateSchema> = {
      // Редюсеры
      user: userReducer,
   };

   const reducerManager = createReducerManager(rootReducers);

   const store = configureStore({
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      preloadedState: initialState,
   });

   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];