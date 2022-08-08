import { TEvent } from "./../../calendar/types/index";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CalendarState {
  activeEvent: TEvent | null;
  events: TEvent[];
  loading: boolean;
}

const initialState: CalendarState = {
  activeEvent: null,
  events: [],
  loading: false,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    hideLoading: ( state ) => {
      state.loading = false
    },
    setActiveEvent: (state, { payload }: PayloadAction<TEvent>) => {
      state.activeEvent = payload;
    },
    setEvents: (state, { payload }: PayloadAction<TEvent[]>) => {
      state.events = payload;
    },
    setVoidEvent: (state) => {
      state.activeEvent = {
        _id: null,
        allDay: false,
        start: new Date(),
        end: new Date(),
        notes: "",
        title: "",
      };
    },
    clearActualEvent: (state) => {
      state.activeEvent = null;
    },
    onAddNewEvent: (state, { payload }: PayloadAction<TEvent>) => {
      state.events.push(payload);
    },
    onEditEvent: (state, { payload }: PayloadAction<TEvent>) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return {
            ...event,
            ...payload,
          };
        }

        return event;
      });
    },
    onDeleteEvent: ( state , { payload } : PayloadAction<TEvent> ) => {
      if( state.activeEvent ){
        state.events = state.events.filter( event => event._id !== payload._id )
        state.activeEvent = null
      }
    },
    onLogoutCalendar: ( state ) => {
      state.activeEvent = null
      state.events = []
    }
  },
});

export const {
  clearActualEvent,
  onLogoutCalendar,
  setActiveEvent,
  setVoidEvent,
  onAddNewEvent,
  onDeleteEvent,
  onEditEvent,
  hideLoading,
  setLoading,
  setEvents
} = calendarSlice.actions;

export default calendarSlice;

