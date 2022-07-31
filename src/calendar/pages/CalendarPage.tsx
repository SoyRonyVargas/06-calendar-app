import FabCreateButton from '../components/FabCreateButton'
import FabDeleteButton from '../components/FabDeleteButton'
import CalendarLayout from '../layout/CalendarLayout'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/Modal'

const CalendarPage = () => {
  return (
    <CalendarLayout>
      <ModalEvent/>
      <Calendar/>
      <FabCreateButton/>
      <FabDeleteButton/>
    </CalendarLayout>
  )
}

export default CalendarPage