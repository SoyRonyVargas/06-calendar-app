import { RootState } from './../store';

export const selectShowLoader = ( state: RootState ) => state.ui.loader
export const selectIsModelOpen = ( state: RootState ) => state.ui.showModal
