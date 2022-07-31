import { Routes, Route, Navigate } from 'react-router-dom'
import CalendarPage from '../calendar/pages/CalendarPage'
import RegisterPage from '../auth/pages/RegisterPage'
import useAuthStore from '../auth/hooks/useAuthStore'
import LoginPage from '../auth/pages/LoginPage'
import React, { Fragment, useEffect } from 'react'

const AppRouter = () => {

    const { handleCheckAuth, authStatus } = useAuthStore()

    useEffect(() => {

        handleCheckAuth()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Routes>
                {
                    authStatus === 'authenticated'
                        ?
                        <>
                            <Route path='/' element={<CalendarPage />} />
                            <Route path='/*' element={<Navigate to={"/"} />} />
                        </>
                        :
                        <>
                            <Route path='/auth/login' element={<LoginPage />} />
                            <Route path='/auth/register' element={<RegisterPage />} />
                            <Route path='/*' element={<Navigate to={"/auth/login"} />} />
                        </>
                }
            </Routes>
        </Fragment>
    )
}

export default AppRouter