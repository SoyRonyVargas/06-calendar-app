import React from 'react'
import { Link } from 'react-router-dom'
import { FormBox, RightSide } from '../../LoginPage/styled'
import Form from './Form'

const Right = () => {
    return (
        <RightSide className='col--full flex_colum'>

            <img className='register__logo mb-3' src="/assets/logo.svg" alt="" />

            <Form/>
            
            <FormBox className='box is-flex is-justify-content-center'>
                <p>
                    ¿Ya tienes cuenta?
                    <Link className='ml-1  has-text-weight-medium has-text-weight-bold color-2' to="/auth/login">
                        Inicia sesión aqui.
                    </Link>
                </p>

            </FormBox>

        </RightSide>
    )
}

export default Right