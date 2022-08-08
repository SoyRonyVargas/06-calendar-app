import { UserLoginTest } from './testUser'
import { AuthState } from '../../types'

export const initialState: AuthState = {
    user: null,
    status: 'checking',
    errorMsg: null,
    loading: false,
    okMsg: null
}

export const stateAuthenticated: AuthState = {
    user: UserLoginTest ,
    status: 'authenticated',
    errorMsg: null,
    loading: false,
    okMsg: null
}

export const stateUnauthenticated: AuthState = {
    user: null,
    status: 'not-authenticated',
    errorMsg: null,
    loading: false,
    okMsg: null
}