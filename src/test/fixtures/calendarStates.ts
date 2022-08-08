import { CalendarState } from "../../store/calendar";
import { TEvent ,  } from "../../calendar/types";

export const eventsFixtures : TEvent[] = [
    {
        allDay: true,
        end: new Date('2022-10-21 13:00:00'),
        start: new Date('2022-10-21 15:00:00'),
        notes: "Pruebas",
        title: "Titulo de pruebas 1",
        _id: "test-id",
    },
    {
        allDay: true,
        end: new Date('2022-11-21 13:00:00'),
        start: new Date('2022-11-21 15:00:00'),
        notes: "Pruebas",
        title: "titulo de pruebas 2",
        _id: "test-id-2",
    }
]

export const initialState : CalendarState = {
    activeEvent: null,
    loading: false,
    events: [],
}

export const stateWithEventState : CalendarState = {
    activeEvent: null,
    loading: false,
    events: [ ...eventsFixtures ],
}

export const stateWithActiveEventState : CalendarState = {
    activeEvent: {
        ...eventsFixtures[0]
    },
    loading: false,
    events: [ ...eventsFixtures ],
}