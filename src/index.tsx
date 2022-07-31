import 'react-toastify/dist/ReactToastify.css'
import GlobalHoc from './global/Config'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import React from 'react'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalHoc>
      <App />
    </GlobalHoc>
  </React.StrictMode>
);

