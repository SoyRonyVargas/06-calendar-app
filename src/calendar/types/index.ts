import { View } from 'react-big-calendar'

export type TEvent = { 
    _id?: string | null;
    id?: string | null;
    allDay: boolean;
    title: string; 
    notes: string;
    start: Date; 
    end: Date;
};

export type DoubleClickEvent = (
    event: TEvent, 
    e: React.SyntheticEvent<HTMLElement>
) => void

export type ViewEvent = ((view: View) => void)

export type ReturnStyledEvent = {
    className?: string | undefined; 
    style?: React.CSSProperties
}

export type FormDatePicker = (
        (
            date:  Date | null,
            name: string
        ) => void
)

export type UpdateEventPayload = {
    id: string,
    eventUpdated: TEvent
}

// export type FormModal = {
//     title
// }