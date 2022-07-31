import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import React from 'react'

const GlobalHoc = ({ children } : any) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </Provider>
  )
}

export default GlobalHoc