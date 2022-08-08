import { AuthLogin, AuthRegister, User, UserLoginResponse } from "../../types";

export const UserLoginTest : User = {
    email: "prueba@gmail.com",
    name: "Test",
    id: "test-id"
}

export const UserAuthLogin : AuthLogin = {
    email: "prueba@gmail.com",
    password: "123456"
}

export const UserAuthLoginWithError : AuthLogin = {
    email: "pruebax@gmail.com",
    password: "1234567957575757"
}

export const UserAuthRegister : AuthRegister = {
    email: "prueba@gmail.com",
    password: "123456",
    name: "test",
    id: "123"
}

export const User2AuthRegister : AuthRegister = {
    email: "prueba-numero-2@test.com",
    password: "1111111",
    name: "pruebas",
    id: "2"
}

export const UserAuthResponseRegister : UserLoginResponse = {
    token: "test-token",
    user: UserAuthRegister
}

export const User2AuthResponseRegister : UserLoginResponse = {
    token: "test-token-2",
    user: User2AuthRegister
}