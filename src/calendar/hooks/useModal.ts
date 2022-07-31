import { eventValidatons } from '../validations/event'
import useCalendarStore from './useCalendarStore'
import { useForm } from '../../hooks/useForm'
import { TEvent } from "../types"
import { useEffect } from 'react'

const INITIAL_STATE: TEvent = {
        allDay: false,
        end: new Date(),
        start: new Date(),
        notes: "",
        title: "",
}

const useModal = () => {
 
    const { actualEvent, startSavingEvent } = useCalendarStore()
    
    const handleSubmitFinished = () => {

        startSavingEvent(formhook.formState)

    }

    const { setFormState , ...formhook } = useForm( INITIAL_STATE , eventValidatons , handleSubmitFinished )
    
    useEffect( () => {

        if( actualEvent !== null )
        {
            setFormState({ ...actualEvent })
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualEvent])

    return {
        ...formhook
    }
}

export default useModal