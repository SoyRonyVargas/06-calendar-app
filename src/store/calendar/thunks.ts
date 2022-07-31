import { onAddNewEvent , onEditEvent, setLoading , hideLoading, onDeleteEvent, setEvents } from './calendarSlice';
import { TEvent } from './../../calendar/types/index';
import { parseEvents } from '../../calendar/helpers';
import { ThunkFunction } from './../../types/index';
import { hideModal } from '../ui/uiSlice';
import AuthAxios from '../../api/auth';
import { Response } from '../../types';
import { toast } from 'react-toastify';

export const hideModalUI = () : ThunkFunction => async ( dispatch ) => {

    dispatch(hideLoading())
    
    dispatch(hideModal())

}  

export const thunkGetAllEvents = () : ThunkFunction => async ( dispatch , getState ) => {

    try 
    {
        
        const { data : { data } } = await AuthAxios.get<Response<TEvent[]>>( '/events/' )

        const events = parseEvents(data)

        dispatch(setEvents(events))

        dispatch(hideLoading())

    } 
    catch (error) 
    {
        dispatch(setEvents([]))
    }

}

export const createNewEvent = ( event : TEvent ) : ThunkFunction => async ( dispatch ) => {

    try
    {

        dispatch(setLoading())
        
        const { data : { data } } = await AuthAxios.post<Response<TEvent>>( '/events/' , event )

        event._id = data._id
        
        dispatch(onAddNewEvent(event))

        dispatch(hideModalUI())

    }
    catch(err)
    {

        toast.error("Error del servidor al crear el evento" , {
            position: 'bottom-center',
            autoClose: 5000,
            closeOnClick: true,
        })

    }

}

export const thunkEditEvent = ( newPayload : TEvent ) : ThunkFunction => async ( dispatch ) => {

    try
    {
        
        dispatch(setLoading())

        await AuthAxios.put<Response<TEvent>>( '/events/' , newPayload )

        dispatch(onEditEvent((newPayload)))
        
        dispatch(hideModalUI())

        toast.success("Actualizado correctamente." , {
            position: 'bottom-center',
            autoClose: 5000,
            closeOnClick: true,
        })

    }
    catch(err)
    {
        
        dispatch(hideLoading())

        toast.error( "Error del servidor al actualizar el evento" , {
            position: 'bottom-center',
            autoClose: 5000,
            closeOnClick: true,
        })

    }

}

export const thunkDeleteEvent = () : ThunkFunction => async ( dispatch , getState ) => {

    try 
    {
        
        const state = getState()

        const actualEvent = state.calendar.activeEvent

        if( !actualEvent ) return
        
        await AuthAxios.delete(`/events/${actualEvent._id}`)

        dispatch(onDeleteEvent(actualEvent))

        toast.success("Eliminado correctamente." , {
            position: 'bottom-center',
            autoClose: 3000,
            closeOnClick: true,
        })
        

    } 
    catch (error) 
    {

        toast.error( "Error del servidor al eliminar el evento" , {
            position: 'bottom-center',
            autoClose: 5000,
            closeOnClick: true,
        })
        
    }

}