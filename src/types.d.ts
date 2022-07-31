import { AxiosError } from "axios"

export type ThunkFunction = (
    ( dispatch : AppDispatch , getState: () => RootState ) => Promise<void>
)

export type AuthStatus = 'checking' | 'not-authenticated' | 'authenticated'

export type User = { 
    id?: string
    name: string
    email: string
}

export type AuthState = {
    user: User | null
    status: AuthStatus,
    errorMsg: string | null
    loading: boolean
    okMsg: string | null
}

export type AuthLogin = Pick<User , "email"> & {
    password: string
}

export type AuthRegister = Pick<User , "email"> & {
    password: string
    name: string
}

// RESPONSES AXIOS

export type UserLoginResponse = {
    token: string
    user: User
}

export type EventCreatedResponse = {
    token: string
    user: User
}

export type Response<T> = {
    ok: boolean
    msg: string | null
    data: T
}

type ErrorResponse = {
    location: string
    msg: string
    param: string
    value: string
}

export type FetchError = AxiosError<ErrorResponse[]>
export type FetchErrorSingle = AxiosError<ErrorResponse>

// export type AuthLoginResponse = 