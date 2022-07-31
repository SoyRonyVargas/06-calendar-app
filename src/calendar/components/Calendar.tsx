import { calendarLocalizer } from '../helpers/calendarLocalizer'
import { Calendar as BigCalendar } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { getMessagesES } from '../helpers/getMessages'
import useCalendar from '../hooks/useCalendar'
import Event from './Event'

// const myEventsList: TEvent[] = [
//     {
//         title: "Pruebas a evento",
//         start: new Date( "2022-08-01T15:00:00.000Z"),
//         end: new Date("2022-08-06T03:00:00.000Z"),
//         allDay: false,
//         notes: "",
//         _id: new Date().toString(),
//         id: new Date().toString()
//     }
// ]

const Calendar = () => {

    const {
        events,
        eventStyleGetter,
        handleDoubleClick,
        handleSelectEvent,
        handleViewChange,
        view
    } = useCalendar()

    return (
        <BigCalendar
            culture='es'
            view={view}
            defaultView={'agenda'}
            localizer={calendarLocalizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: `calc( 100vh - 56px )` }}
            messages={getMessagesES()}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={handleDoubleClick}
            onView={handleViewChange}
            components={{
                event: Event
            }}
        />
    )
}

export default Calendar