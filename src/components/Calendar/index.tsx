// import { useQuery } from '@tanstack/react-query'
import dayjs, { Dayjs } from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useMemo, useState } from 'react'
// import { api } from '../../pages/lib/axios'
import { getWeekDays } from '../../utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

interface CalendarProps {
  selectedDates?: Date[] | null
  onDateSelecteds: (date: Date[]) => void
}

export function Calendar({
  selectedDates,
  onDateSelecteds: onDateSelects,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')

    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  // const { data: blockedDates } = useQuery<BlockedDates>(
  //   ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
  //   async () => {
  //     const response = await api.get(`users/${username}/blocked-dates`, {
  //       params: {
  //         year: currentDate.get('year'),
  //         month: currentDate.get('month'),
  //       },
  //     })

  //     return response.data
  //   },
  // )

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previuosMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )

    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })

    const calendarDays = [
      ...previuosMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          disabled: date.endOf('day').isBefore(new Date()),
          // blockedDates.blockedWeekDays.includes(date.get('day')),
        }
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate])

  function handleToggleSelectDay(date: Dayjs) {
    const datesSelects = selectedDates?.map((e) => dayjs(e).valueOf())

    if (datesSelects?.includes(date.valueOf())) {
      const dateRepeatedPosition = datesSelects.findIndex(
        (e) => e === date.valueOf(),
      )

      datesSelects.splice(dateRepeatedPosition, 1)
      onDateSelects(datesSelects.map((e) => dayjs(e).toDate()))
      return
    }

    onDateSelects([...(selectedDates ?? []), date.toDate()])
  }

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>

          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  const datesFormatted = selectedDates?.map((currentDate) =>
                    dayjs(currentDate).format('DD-MM-YYYY'),
                  )

                  const thisDayIsSelected = datesFormatted?.includes(
                    date.format('DD-MM-YYYY'),
                  )
                    ? 'selected'
                    : 'normal'

                  return (
                    <td key={date.toString()}>
                      <CalendarDay
                        onClick={() => handleToggleSelectDay(date)}
                        disabled={disabled}
                        variant={thisDayIsSelected}
                      >
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
