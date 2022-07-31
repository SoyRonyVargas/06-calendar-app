import { RootState } from './../store';

export const selectActualEvent = ( state: RootState ) => state.calendar.activeEvent

export const selectEvents = ( state: RootState ) => state.calendar.events

export const selectLoading = ( state: RootState ) => state.calendar.loading
