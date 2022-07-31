import { formRegisterValidators } from '../../../validations/register'
import useAuthStore from '../../../hooks/useAuthStore'
import { useForm } from '../../../../hooks/useForm'
import { AuthRegister } from '../../../../types'
import { FormBox } from '../../LoginPage/styled'

const INITIAL_STATE: AuthRegister = {
    email: "",
    password: "",
    name: ""
}

const Form = () => {

    const { handleRegister , msgErrorAuth } = useAuthStore()
    
    const handleSubmit = () => {
        
        handleRegister(formState)

    }

    const {
        errors,
        submited,
        formState,
        // isFormValid,
        onInputChange,
        handleSubmitForm,
    } = useForm( INITIAL_STATE, formRegisterValidators , handleSubmit )

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
            </pre> */}

            <h2 className="title is-4">Registro</h2>

            <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                    <input 
                        name="name"
                        type="text" 
                        placeholder="James" 
                        value={formState.name}
                        // disabled={isAuthLoading}
                        onChange={onInputChange}
                        className="input is-medium" 
                    />
                    {
                        (errors?.name && submited) &&
                        <p className="help is-danger is-strong">
                            {errors?.name}
                        </p>
                    }
                </div>
            </div>
            <div className="field">
                <label className="label">Correo</label>
                <div className="control">
                    <input 
                        name='email'
                        type="email" 
                        value={formState.email}
                        // disabled={isAuthLoading}
                        onChange={onInputChange}
                        className="input is-medium" 
                        placeholder="e.g. alex@ejemplo.com" 
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
                        name='password'
                        type="password" 
                        placeholder="********" 
                        // disabled={isAuthLoading}
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
                msgErrorAuth && 
                <div className="notification is-danger is-light">
                    { msgErrorAuth }
                </div>
            }

            <button className="button is-primary is-medium is-fullwidth">Registrarse</button>

        </FormBox>

    )
}

export default Form