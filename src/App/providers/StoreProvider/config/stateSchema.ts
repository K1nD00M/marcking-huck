import { NavigateOptions, To } from "react-router";
import {
   AnyAction,
   EnhancedStore,
   Reducer,
   ReducersMapObject,
} from "@reduxjs/toolkit";
import { UserSchema } from "entities/User/model/types/user";
import { CombinedState } from "redux";
import { AxiosInstance } from "axios";
import { AuthSchema } from "features/AuthUser/model/types/form";

export interface StateSchema {
   user: UserSchema;
   
   auth?: AuthSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (
      state: StateSchema,
      action: AnyAction
   ) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
   api: AxiosInstance;
   navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
   state: StateSchema;
}
