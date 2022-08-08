import { act, renderHook } from "@testing-library/react"
import useUI from "../../../calendar/hooks/useUI"
import { Provider } from "react-redux"
import { store } from "../../../store"


describe('Probando el hook useUI', () => { 

    test('Deberia retornar valores por defecto', () => {

        const { result : { current } } = renderHook( () => useUI() , {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    { children }
                </Provider>
            )
        })

        expect(current).toEqual({
            isModalOpen: false,
            isLoadingModal: false,
            handleHideModal: expect.any(Function),
            handleShowModal: expect.any(Function),
        })
        
    })
    
    test('Deberia actualizar valores del handleShowModal', () => {

        const { result } = renderHook( () => useUI() , {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    { children }
                </Provider>
            )
        })

        const { handleShowModal } = result.current

        act( () => {
            
            handleShowModal()

        })

        expect( result.current.isModalOpen ).toBe(true)

    })
    
    test('Deberia actualizar valores del handleShowModal Y handleHideModal', () => {

        const { result } = renderHook( () => useUI() , {
            wrapper: ({ children }) => (
                <Provider store={store}>
                    { children }
                </Provider>
            )
        })

        const { handleShowModal , handleHideModal } = result.current

        act( () => {
            
            handleShowModal()

        })

        expect( result.current.isModalOpen ).toBe(true)
        
        act( () => {
            
            handleHideModal()

        })

        expect( result.current.isModalOpen ).toBe(false)

    })

})