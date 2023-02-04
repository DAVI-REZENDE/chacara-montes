import { Calendar } from '@/components/Calendar'
import { useState } from 'react'
import { Contanier, ContanierCalendar } from './styles'

export default function NewEvent() {
  const [selectedDates, setSelectedDates] = useState<Date[] | null>(null)

  return (
    <Contanier>
      <ContanierCalendar>
        <Calendar
          selectedDates={selectedDates}
          onDateSelecteds={setSelectedDates}
        />
      </ContanierCalendar>
    </Contanier>
  )
}
