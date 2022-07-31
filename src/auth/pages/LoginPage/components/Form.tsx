import { selectAuthError , selectAuthLoader } from '../../../../store/auth/authSlice'
import { formLoginValidators } from '../../../validations'
import useAuthStore from '../../../hooks/useAuthStore'
import { useForm } from '../../../../hooks/useForm'
import { AuthLogin } from '../../../../types'
import { useSelector } from 'react-redux'
import { FormBox } from '../styled'

// const INITIAL_STATE: AuthLogin = {
//     email: "prueba@gmail.com",
//     password: "12345"
// }

const INITIAL_STATE: AuthLogin = {
    email: "",
    password: ""
}

const Form = () => {
    
    const isAuthLoading = useSelector(selectAuthLoader)
    const hasErrorAuth = useSelector(selectAuthError)
    
    const { handleLogin , msgOkAuth } = useAuthStore()
    
    const handleSubmit = () => handleLogin(formState)

    const {
        errors,
        submited,
        formState,
        // isFormValid,
        onInputChange,
        handleSubmitForm,
    } = useForm( INITIAL_STATE, formLoginValidators , handleSubmit )

    return (
        <FormBox className="box" onSubmit={handleSubmitForm}>

            {/* <pre>
                {
                    JSON.stringify( formState , null , 3 )
                }
            </pre>
           
            <pre>
                {
                    JSON.stringify( errors , null , 3 )
                }
            </pre>

            { isFormValid ? 'valido' : "no" } */}

            <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                    <input
                        name="email"
                        type="email"
                        value={formState.email}
                        disabled={isAuthLoading}
                        onChange={onInputChange}
                        className="input is-medium"
                        placeholder="e.g. alex@example.com"
                    />
                    {
                        (errors?.email && submited) &&
                        <p className="help is-danger is-strong">
                            {errors?.email}
                        </p>
                    }
                </div>
            </div>
            <div className="field">
                <label className="label">Contraseña</label>
                <div className="control">
                    <input 
                        type="password" 
                        name="password"
                        placeholder="********" 
                        disabled={isAuthLoading}
                        onChange={onInputChange}
                        value={formState.password}
                        className="input is-medium" 
                    />
                    {
                        (errors?.password && submited) &&
                        <p className="help is-danger is-strong">
                            {errors?.password}
                        </p>
                    }
                </div>
            </div>

            {
                hasErrorAuth && 
                <div className="notification is-danger is-light">
                    {/* Usuario o contraseña incorrectos */}
                    { hasErrorAuth }
                </div>
            }

            {
                msgOkAuth && 
                <div className="notification is-success is-light">
                    { msgOkAuth }
                </div>
            }

            
            <button 
                className={`button is-primary is-medium is-fullwidth ${ isAuthLoading ? "is-loading" : "" }`}
                type='submit'
            >Iniciar Sesión</button>

        </FormBox>
    )
}

export default Form