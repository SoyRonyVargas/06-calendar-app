import { parseISO } from "date-fns";
import { TEvent } from "../types";

export const parseEvents = ( events : TEvent[] ) : TEvent[] => {

    return events.map( event => {

        event.start = parseISO( ((event.start as unknown) as string) )
        event.end = parseISO( ( (event.end as unknown ) as string ) )
        event.allDay = false
        return event

    })

}

export const parseEvent = ( event : TEvent ) : TEvent => {

    event.start = parseISO( ((event.start as unknown) as string) )
    event.end = parseISO( ( (event.end as unknown ) as string ) )
    event.allDay = false
    return event

}