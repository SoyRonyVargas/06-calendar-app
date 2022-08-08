import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User , AuthState } from '../../types'
import { RootState } from '../store'

const initialState: AuthState = {
    user: null,
    status: 'checking',
    errorMsg: null,
    loading: false,
    okMsg: null
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: ( state, { payload }: PayloadAction<User> ) => {
        state.status = "authenticated"
        state.errorMsg = null
        state.user = payload
    },
    onLogout: ( state , { payload }: PayloadAction<string | null> ) => {
        state.status = "not-authenticated"
        state.errorMsg = payload
        state.user = null
    },
    setMsgOk: ( state , { payload }: PayloadAction<string | null> ) => {
        state.okMsg = payload
    },
    onAuthFailed: ( state , { payload }: PayloadAction<string | null> ) => {
        state.errorMsg = payload
    },
    onChecking: ( state ) => {
        state.status = "checking"
        state.errorMsg = null
        state.user = null
    },
    cleanErrorMsgAuth: ( state ) => {
        state.errorMsg = null
    },
    startLoading: ( state ) => {
        state.loading = true
    },
    hideLoading: ( state ) => {
        state.loading = false
    }
  },
})

export const { 
    onAuthFailed,
    onChecking,
    setMsgOk, 
    onLogin , 
    onLogout,
    startLoading,
    hideLoading,
} = AuthSlice.actions

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthUser = ( state : RootState ) => state.auth.user;
export const selectAuthStatus = ( state : RootState ) => state.auth.status;
export const selectAuthError = ( state : RootState ) => state.auth.errorMsg;
export const selectAuthLoader = ( state : RootState ) => state.auth.loading;
export const selectErrorAuth = ( state : RootState ) => state.auth.errorMsg;
export const selectMsgAuth = ( state : RootState ) => state.auth.okMsg;

export default AuthSlice