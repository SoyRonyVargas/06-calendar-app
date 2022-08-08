import { onLogout, selectAuthError, selectAuthStatus, selectAuthUser, selectMsgAuth } from '../../store/auth/authSlice'
import { thunkAuthLogin , thunkAuthRegister, thunkCheckAuth } from '../../store/auth/thunks'
import { selectShowLoader } from '../../store/ui/selectors'
import { onLogoutCalendar } from '../../store/calendar'
import { AuthLogin, AuthRegister } from '../../types'
import { removeToken } from '../helpers/removeToken'
import { hideLoader, showLoader } from '../../store'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { useSelector } from 'react-redux'

const useAuthStore = () => {

    const isLoadingLoader = useSelector(selectShowLoader)
    const msgErrorAuth = useSelector(selectAuthError)
    const authStatus = useSelector(selectAuthStatus)
    const authUser = useSelector(selectAuthUser)
    const msgOkAuth = useSelector(selectMsgAuth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const navigateLogin = () => navigate("/auth/login")

    const handleLogin = async (user: AuthLogin) => await dispatch(thunkAuthLogin(user))

    const handleRegister = async (user: AuthRegister) => await dispatch(thunkAuthRegister( user , navigateLogin ))

    const handleCheckAuth = async () => await dispatch(thunkCheckAuth())

    const handleLogout = async () => {

        dispatch(showLoader())

        removeToken()

        dispatch(onLogout(null))
        
        dispatch(onLogoutCalendar())

        dispatch(hideLoader())

    }

    return {
        authUser,
        msgOkAuth,
        authStatus,
        msgErrorAuth,
        isLoadingLoader,
        handleLogin,
        handleLogout,
        handleRegister,
        handleCheckAuth
    }

}

export default useAuthStore