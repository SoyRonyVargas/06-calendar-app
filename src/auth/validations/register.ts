export const formRegisterValidators = {
    email: [ 
        ( value : string ) => 
            value.includes("@") && 
            value.trim().length > 0 && 
            String(value)
                .toLowerCase()
                .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ), 
        "Ingresa un correo electronico valido"
    ],
    password: [ ( value : string ) => value.length > 0 && value.length >= 6, "La contraseña debe tener al menos 6 caracteres"],
    name: [ ( value : string ) => value.trim().length > 0 , "Ingresa el nombre"],
}
