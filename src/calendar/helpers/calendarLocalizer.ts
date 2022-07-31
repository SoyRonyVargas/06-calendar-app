import { dateFnsLocalizer } from 'react-big-calendar'
import startOfWeek from 'date-fns/startOfWeek'
import esES from 'date-fns/locale/es'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'

const locales = {
    'es': esES,
  }

export const calendarLocalizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})