import Navbar from '../components/Navbar'
import React from 'react'

const CalendarLayout = ( { children } : any ) => {
  return (
    <div className='container-wrapper'>
        <Navbar/>
        {children}
    </div>
  )
}

export default CalendarLayout