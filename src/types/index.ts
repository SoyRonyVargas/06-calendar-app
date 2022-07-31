import { AppDispatch, RootState } from './../store/store';

export type ThunkFunction = (
    ( dispatch : AppDispatch , getState: () => RootState ) => Promise<void>
)