import { UserLoginResponse , Response , AuthLogin, FetchErrorSingle, AuthRegister } from "../../types";
import { hideLoading, onAuthFailed, onLogin, onLogout, setMsgOk, startLoading } from "./authSlice";
import { saveToken } from "../../auth/helpers/saveToken";
import { thunkGetAllEvents } from "../calendar";
import { ThunkFunction ,  } from "../../types";
import AuthAxios from "../../api/auth";
import { checkToken } from "../../auth/helpers/checkToken";
import { hideLoader, showLoader } from "../ui/uiSlice";
import { removeToken } from "../../auth/helpers/removeToken";

export const thunkAuthLogin = ( user : AuthLogin ) : ThunkFunction => async ( dispatch ) => {

    try 
    {
        
        dispatch(startLoading())
        
        const { data : { data } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth' , user)
        
        window.localStorage.setItem('view', 'month')

        saveToken(data.token)

        dispatch(onLogin(data.user))

        dispatch(thunkGetAllEvents())

        dispatch(hideLoading())

    } 
    catch ( error ) 
    {

        // console.log(error);

        const e = error as FetchErrorSingle

        if( e.response )
        {
            const { msg } = e.response.data || { msg: "Error del servidor" }
            
            dispatch(onAuthFailed(msg))
            
            dispatch(hideLoading())
            
            setTimeout( () => {
                
                dispatch(onAuthFailed(null))

            } , 6000)

        }
    }

}

export const thunkAuthRegister = ( user: AuthRegister , cb : Function ) : ThunkFunction => async ( dispatch ) => {

    try 
    {

        dispatch(startLoading())
        
        const { data : { msg } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth/new', user)
        
        dispatch(setMsgOk(msg))
        
        await new Promise( r => setTimeout( r , 0 ) );

        dispatch(setMsgOk(null))

        cb()

        dispatch(hideLoading())

    }
    catch (error) {
        
        const e = error as FetchErrorSingle

        if( e.response )
        {
            const { msg } = e.response.data || "Error del servidor"
            
            dispatch(onAuthFailed(msg))
            
            dispatch(hideLoading())
            
            setTimeout( () => {
                
                dispatch(onAuthFailed(null))

            } , 6000)

        }

    }

}

export const thunkCheckAuth = () : ThunkFunction => async ( dispatch ) => {

    const token = checkToken()

    if (!token) return dispatch(onLogout(null))

    try 
    {

        dispatch(showLoader())

        const { data: { data } } = await AuthAxios.post<Response<UserLoginResponse>>('/auth/validate')

        dispatch(onLogin(data.user))
        
        dispatch(thunkGetAllEvents())

        dispatch(hideLoader())

    }
    catch (err) 
    { 
        dispatch(onLogout("Sesión expirada."))
        dispatch(hideLoader())
        removeToken()
    }

}