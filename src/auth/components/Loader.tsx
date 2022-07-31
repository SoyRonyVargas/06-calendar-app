import { checkToken } from '../helpers/checkToken'
import useAuthStore from '../hooks/useAuthStore'

const Loader = () => {

    const { authStatus , isLoadingLoader } = useAuthStore()

    const COND = ( authStatus === "checking" && !!checkToken() ) || isLoadingLoader

    return (
        <main className={`container-loader ${ COND ? "show-container-loader" : "hide-container-loader" }`}>
            <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div>
        </main>
    )
}

export default Loader