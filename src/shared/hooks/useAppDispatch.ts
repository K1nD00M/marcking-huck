import { RootState } from 'App/providers/StoreProvider/config/store';
import { AppDispatch } from 'App/providers/StoreProvider/config/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"; 

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector