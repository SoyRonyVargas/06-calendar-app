import { eventsFixtures, initialState, stateWithActiveEventState, stateWithEventState } from "../../fixtures/calendarStates"
import { calendarSlice, setActiveEvent, onAddNewEvent , onEditEvent, onDeleteEvent, onLogoutCalendar } from "../../../store/calendar"
import { TEvent } from "../../../calendar/types"


describe('Probando el calendarSlice', () => {

    test('Deberia regresar el estado inicial', () => {
      
        const state = calendarSlice.getInitialState()

        expect(state).toEqual(initialState)

    })
    
    test('setActiveEvent deberia activar un evento', () => {
      
        const state = calendarSlice.reducer( stateWithEventState , setActiveEvent(eventsFixtures[0]) )

        expect(state.activeEvent).toEqual(eventsFixtures[0])

    })
    
    test('onAddNewEvent deberia agregar un evento nuevo', () => {

        const event : TEvent = {
            allDay: true,
            end: new Date('2022-10-21 13:00:00'),
            start: new Date('2022-10-21 15:00:00'),
            notes: "Pruebas",
            title: "Titulo de pruebas 1",
            _id: "test-id-3",
        }
      
        const state = calendarSlice.reducer( stateWithActiveEventState , onAddNewEvent(event) )

        expect(state.events).toContain(event)

    })
    
    test('onEditEvent deberia actualizar el evento', () => {

        const event : TEvent = {
            ...eventsFixtures[0],
            title: "Evento 1 Actualizado"
        }

        const state = calendarSlice.reducer( stateWithActiveEventState , onEditEvent(event) )

        expect(state.events[0]).toEqual(event)

    })
    
    test('onDeleteEvent deberia eliminar el evento actual', () => {

        const event : TEvent = eventsFixtures[0];

        const state = calendarSlice.reducer( stateWithActiveEventState , onDeleteEvent(event) )

        expect(state.events).not.toContain(event)
        
        expect(state.activeEvent).toBe(null)

    })
    
    test('onLogoutCalendar deberia vaciar calendarState', () => {

        const state = calendarSlice.reducer( stateWithActiveEventState , onLogoutCalendar() )

        expect(state.activeEvent).toBe(null)
        
        expect(state.events).toEqual([])

    })
    
    
})
