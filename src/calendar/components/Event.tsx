import { EventProps } from 'react-big-calendar'
import { TEvent } from '../types'
import React from 'react'

const Event = (props: EventProps<TEvent>) => {
    
    // console.log(props);

    return (
        <>
            {props.title}
        </>
    )
    
}

export default Event