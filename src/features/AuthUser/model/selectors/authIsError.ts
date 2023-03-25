import { StateSchema } from 'App/providers/StoreProvider';

export const getIsError = (state: StateSchema) => state.auth?.isError;
