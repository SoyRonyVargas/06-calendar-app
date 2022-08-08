import { showLoader, UISlice } from "../../../store"

describe('Pruebas al slide de la ui', () => {
  
  test('Deberia tener el estado inicial', () => {

    const state = UISlice.getInitialState()

    expect(state).toEqual({
      showModal: false,
      loader: false
    })
    
  })
  
  test('Deberia activar el loader', () => {

    const state = UISlice.getInitialState()

    const stateModified = UISlice.reducer( state , showLoader )

    expect(stateModified).toEqual({
      showModal: false,
      loader: true
    })
    
  })
  
})
