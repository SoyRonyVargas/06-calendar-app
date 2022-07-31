const NAME_ITEM_TOKEN = 'token'

export const checkToken = () : string | null => {

    try
    {
        return window.localStorage.getItem( NAME_ITEM_TOKEN )
    }
    catch(err)
    {
        throw new Error('Error al guardar el token')
    }

}