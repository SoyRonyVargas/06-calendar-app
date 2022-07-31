import { FormBox, RightSide } from '../styled'
import { Link } from 'react-router-dom'
import Form from './Form'

const RightLogin = () => (
  <RightSide className='col--full flex_colum'>

    <img className='login__logo mb-3' src="/assets/logo.svg" alt="" />

    <Form/>    

    <FormBox className='box is-flex is-justify-content-center'>
      <p>
        ¿Aún no tienes cuenta?
        <Link className='ml-1  has-text-weight-medium has-text-weight-bold color-2' to="/auth/register">
          Registrate Aqui.
        </Link>
      </p>

    </FormBox>

  </RightSide>
)

export default RightLogin