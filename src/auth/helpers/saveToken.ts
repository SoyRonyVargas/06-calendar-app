const NAME_ITEM_TOKEN = 'token'

export const saveToken = ( token : string ) => {

    try
    {
        window.localStorage.setItem( NAME_ITEM_TOKEN , String(token) )
    }
    catch(err)
    {
        throw new Error('Error al guardar el token')
    }

}