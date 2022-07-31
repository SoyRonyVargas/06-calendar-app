import { DoubleClickEvent, ReturnStyledEvent, TEvent, ViewEvent } from '../types'
import { EventPropGetter, View } from 'react-big-calendar'
import useCalendarStore from './useCalendarStore'
import { useState } from 'react'
import useUI from './useUI'

const useCalendar = () => {

    const { handleShowModal } = useUI()

    const { handleSelectStoreEvent , events } = useCalendarStore()

    const [ view , setView ] = useState<View>( ( window.localStorage.getItem("view") as View ) || "agenda" )
    
    const eventStyleGetter : EventPropGetter<TEvent> = ( event , start , end , isSelected ) : ReturnStyledEvent => {

        return {
            style: {
                background: '#DF7575',
                opacity: '.8'
            }
        }

    }

    const handleDoubleClick : DoubleClickEvent = ( event , element ) => {

        // console.log({ event , element });

        handleShowModal()

    }

    const handleSelectEvent : DoubleClickEvent = ( event , element ) => {

        // console.log({ event , element });

        handleSelectStoreEvent(event)

    }

    const handleViewChange : ViewEvent = ( view ) => {

        // console.log('cambio');

        // console.log(view);

        window.localStorage.setItem( "view", view )

        setView(view)

    }

    return {
        view,
        events,
        eventStyleGetter,
        handleViewChange,
        handleSelectEvent,
        handleDoubleClick,
    }

}

export default useCalendar