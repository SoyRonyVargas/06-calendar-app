import AuthSlice, { onLogin, onLogout } from "../../../store/auth/authSlice"
import { initialState , stateAuthenticated } from "../../fixtures/authStates"
import { UserLoginTest } from "../../fixtures/testUser"


describe('Probando el estado del AuthSlice', () => {
  
    test('Deberia de regresar el estado inicial', () => {
      
        const state = AuthSlice.getInitialState()

        expect(state).toEqual(initialState)

    })
    
    test('Deberia de realizar el login', () => {
      
        const state = AuthSlice.reducer( initialState , onLogin(UserLoginTest) )

        expect(state).toEqual(stateAuthenticated)
        

    })
   
    test('Deberia de realizar el logout normal', () => {
      
        const state = AuthSlice.reducer( stateAuthenticated , onLogout(null) )

        expect(state).toEqual({
            ...initialState,
            status: "not-authenticated"
        })
        

    })
    
    test('Deberia de realizar el logout por error de autenticacion', () => {
      
        const errorMsg = "Error, accesos incorrectos"

        const state = AuthSlice.reducer( stateAuthenticated , onLogout(errorMsg) )

        expect(state).toEqual({
            ...initialState,
            status: "not-authenticated",
            errorMsg
        })

    })

})
