import { checkToken } from '../auth/helpers/checkToken'
import axios from 'axios'

const AuthAxios = axios.create({
    baseURL: process.env.REACT_APP_API!
})

AuthAxios.interceptors.request.use( ( config ) => {

    const token = checkToken()

    if( token )
    {
        config.headers = {
            ...config.headers,
            'x-auth-token': token
        }
    }

    return config

})

export default AuthAxios