import { ContainerLoginPage } from './styled'
import RightLogin from './components/Right'
import LeftLogin from './components/Left'
import './css/index.css'

const LoginPage = () => {
    return (
        <ContainerLoginPage>
            <LeftLogin/>            
            <RightLogin/>            
        </ContainerLoginPage>
    )
}

export default LoginPage