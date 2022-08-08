import { UserAuthLogin, UserAuthRegister, UserAuthResponseRegister } from "../../fixtures/testUser";
import { hideLoading, onLogin, onLogout, startLoading } from "../../../store/auth/authSlice";
import { thunkAuthLogin, thunkAuthRegister, thunkCheckAuth } from "../../../store/auth/thunks";
import { checkToken } from "../../../auth/helpers/checkToken";
import { hideLoader, showLoader } from "../../../store";
import AuthAxios from "../../../api/auth";

jest.mock("../../../auth/helpers/checkToken")

const mockedAxios = AuthAxios as jest.Mocked<typeof AuthAxios>

describe('Probando el thunk del auth', () => {

  const dispatch = jest.fn()

  afterEach(() => jest.clearAllMocks())

  test('Deberia thunkAuthLogin llamar el dispatch correctamente', async () => {

    mockedAxios.post = jest.fn().mockResolvedValue({ data: { data: UserAuthResponseRegister } })

    await thunkAuthLogin(UserAuthLogin)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(4)

    expect(dispatch).toHaveBeenCalledWith(startLoading())

    expect(dispatch).toHaveBeenCalledWith(onLogin(UserAuthResponseRegister.user))

    expect(dispatch).toHaveBeenCalledWith(hideLoading())

  })

  test('Deberia thunkAuthRegister llamar el dispatch correctamente', async () => {

    mockedAxios.post = jest.fn().mockResolvedValue({ data: { msg: "Correcto" } })

    const cb = jest.fn()

    await thunkAuthRegister(UserAuthRegister, cb)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(4)

    expect(cb).toHaveBeenCalledTimes(1)

  })
  
  test('Deberia thunkCheckAuth validar el token', async () => {

    mockedAxios.post = jest.fn().mockResolvedValue({ data: { msg: "Correcto" , data : UserAuthResponseRegister } });

    (checkToken as jest.Mock).mockReturnValue('token-pruebas');

    await thunkCheckAuth()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(4)
    
    expect(dispatch).toHaveBeenCalledWith(onLogin(UserAuthResponseRegister.user))
    expect(dispatch).toHaveBeenCalledWith(showLoader())
    expect(dispatch).toHaveBeenCalledWith(hideLoader())

  })
  
  test('Deberia thunkCheckAuth simular error de token expirado', async () => {

    mockedAxios.post = jest.fn().mockRejectedValue({});

    (checkToken as jest.Mock).mockReturnValue('token-pruebas');

    await thunkCheckAuth()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(3)
    
    expect(dispatch).toHaveBeenCalledWith(showLoader())
    expect(dispatch).toHaveBeenCalledWith(onLogout(expect.any(String)))
    expect(dispatch).toHaveBeenCalledWith(hideLoader())

  })
  
  test('Deberia thunkCheckAuth hacer logout sin el token', async () => {

    (checkToken as jest.Mock).mockReturnValue(null);

    await thunkCheckAuth()(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1)
    
    expect(dispatch).toHaveBeenCalledWith(onLogout(null))

  })

})
