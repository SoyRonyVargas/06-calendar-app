import { User2AuthResponseRegister, UserAuthLogin, UserAuthLoginWithError, UserAuthRegister, UserAuthResponseRegister } from "../../fixtures/testUser"
import { checkToken } from "../../../auth/helpers/checkToken"
import useAuthStore from "../../../auth/hooks/useAuthStore"
import { act , renderHook } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import GlobalHoc from "../../../global/Config"
import AuthAxios from "../../../api/auth"
import { store } from "../../../store"
import { Provider } from "react-redux"

jest.mock("../../../auth/helpers/checkToken")

const mockedAxios = AuthAxios as jest.Mocked<typeof AuthAxios>

describe('Probando el hooks useAuthStore', () => {
    
    beforeEach( () => jest.clearAllMocks())

    test('Deberia tener los valores por defecto', () => { 
        
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (
                <GlobalHoc>
                    {children}
                </GlobalHoc>
            )
        })

        expect(result.current).toEqual({
            isLoadingLoader: false,
            authStatus: 'checking',
            msgOkAuth: null,
            msgErrorAuth: null,
            authUser: expect.any(Object),
            handleLogin: expect.any(Function),
            handleLogout: expect.any(Function),
            handleRegister: expect.any(Function),
            handleCheckAuth: expect.any(Function)
        })

    })
    
    test('Deberia handleLogin llamarse correctamente', async () => { 
        
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (<Provider store={store}> <BrowserRouter> { children } </BrowserRouter> </Provider>)
        })

        const spy = jest.spyOn( mockedAxios , 'post' ).mockReturnValue(Promise.resolve({ data: { data: UserAuthResponseRegister , msg: "Autenticacion lista" } }))

        await act( async () => {

            await result.current.handleLogin(UserAuthLogin)

        })

        expect(result.current.authUser).toEqual({
            email: UserAuthResponseRegister.user.email ,
            name: UserAuthResponseRegister.user.name,
            id: UserAuthResponseRegister.user.id,
            password: expect.any(String)
        })

        spy.mockRestore()

    })
    
    test('Deberia handleLogin llamarse con crecendiales incorrectas', async () => { 
        
        const { result : resultFailed } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (<GlobalHoc> {children} </GlobalHoc>),
        })
        
        const msg = "Autenticacion fallida"
        
        jest.spyOn(mockedAxios , 'post').mockRejectedValue({ 
            data: null,
            response: {
                data: {
                    msg,
                    data: null
                }
            }
        })

        await act( async () => {

            await resultFailed.current.handleLogin(UserAuthLoginWithError)

        })

        expect(resultFailed.current.msgErrorAuth).toBe(msg)
        
    })
   
    test('Deberia handleRegister llamarse con registro correcto', async () => { 
        
        
        const msg = "Listo"
        
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (<Provider store={store}> <BrowserRouter> { children } </BrowserRouter> </Provider>)
        })
        
        mockedAxios.post = jest.fn().mockResolvedValue({ data: { msg , data: {msg} } , msg  })

        await act( async () => {

            await result.current.handleRegister(UserAuthRegister)

        })

        expect(result.current.msgOkAuth).toBe(null)
        
    })
    
    test('Deberia handleCheckAuth loguear correctamente', async () => { 
        
        mockedAxios.post = jest.fn().mockResolvedValue({ data: { msg: "Correcto" , data : User2AuthResponseRegister } });

        (checkToken as jest.Mock).mockReturnValue('token-pruebas');
        
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (<Provider store={store}> <BrowserRouter> { children } </BrowserRouter> </Provider>)
        })
        
        await act( async () => {

            await result.current.handleCheckAuth()

        })

        expect( result.current.authUser ).toEqual( User2AuthResponseRegister.user )
        expect( result.current.authStatus ).toEqual('authenticated')

    })
    
    test('Deberia handleCheckAuth hacer logout por token invalido', async () => { 
        
        (checkToken as jest.Mock).mockReturnValue(null);
        
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ({ children }) => (<Provider store={store}> <BrowserRouter> { children } </BrowserRouter> </Provider>)
        })
        
        await act( async () => {

            await result.current.handleCheckAuth()

        })

        expect( result.current.authUser ).toEqual( null )
        expect( result.current.authStatus ).toEqual( 'not-authenticated' )

    })
    
})
