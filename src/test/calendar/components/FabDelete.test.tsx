import FabDeleteButton from "../../../calendar/components/FabDeleteButton"
import { render , screen } from '@testing-library/react'
import { Provider } from "react-redux"
import { store } from "../../../store"

describe('Probando el boton FabDelete', () => { 

    test('Deberia mostrarse correctamente', () => {
      
        const { container } = render(
            <Provider store={store}>
                <FabDeleteButton/>
            </Provider>
        )

        expect(container).toMatchSnapshot()

    })
        
})