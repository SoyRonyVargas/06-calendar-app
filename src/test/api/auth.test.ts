import AuthAxios from "../../api/auth"

describe('Probando la configuracion de axios', () => { 

    test('Debe de tener la configuracion por defecto', async () => { 

        expect(AuthAxios.defaults.baseURL).toBe(process.env.REACT_APP_API)

        const testToken = "test-token"

        localStorage.setItem("token", testToken)

        const response = await AuthAxios.get('/auth/test').then( res => res).catch( res => res)

        const token = response?.config?.headers!['x-auth-token']

        expect(token).toBe(testToken)            
        
    })    

})
