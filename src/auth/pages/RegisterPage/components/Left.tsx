import { LeftSide } from '../../LoginPage/styled'
import { ImageRegister } from '../styled'
import React from 'react'

const Left = () => {
    return (
        <LeftSide className='col--full'>
            <ImageRegister
                className='login__image'
                src="/assets/register.svg"
                alt="Register Image"
            />
        </LeftSide>
    )
}

export default Left