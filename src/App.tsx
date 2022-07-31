import { ToastContainer } from 'react-toastify';
import Loader from './auth/components/Loader';
import AppRouter from './router/AppRouter';
import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Loader />
      <AppRouter/>
      <ToastContainer/>
    </Fragment>
  );
}

export default App;
