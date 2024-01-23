import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import dayjs from 'dayjs'

const days = ['일', '월', '화', '수', '목', '금', '토']

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs())

  const startOfMonth = currentMonth.startOf('month')
  const endOfMonth = currentMonth.endOf('month')
  const daysInMonth = endOfMonth.date()
  const startDayOfWeek = startOfMonth.day()

  const handlePreMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'))
  }

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'))
  }

  const generateCalendarDays = () => {
    const daysArray = []
    let currentDay = 1

    for (let i = 0; i < 6; i++) {
      const week = []

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDayOfWeek) || currentDay > daysInMonth) {
          week.push(<Box key={`empty-${j}`} className='calendar-day'></Box>)
        } else {
          week.push(
            <Box key={currentDay} className='calendar-day text-sub-hover-color'>
              {currentDay}
            </Box>,
          )
          currentDay++
        }
      }

      daysArray.push(
        <Box
          key={`week-${i}`}
          className='grid grid-cols-7 auto-rows-auto justify-items-center text-sub-hover-color'
        >
          {week}
        </Box>,
      )
    }

    return daysArray
  }

  return (
    <Box className='flex flex-col w-full gap-middle'>
      <Box className='grid grid-cols-7 justify-items-center'>
        <Typography className='col-span-3 text-size-sub text-main-hover-color'>
          {currentMonth.format('YYYY년 MM월')}
        </Typography>
        <KeyboardArrowLeftRoundedIcon
          onClick={handlePreMonth}
          className='col-span-1 col-end-7 cursor-pointer fill-main-color'
        />
        <KeyboardArrowRightRoundedIcon
          onClick={handleNextMonth}
          className='col-span-1 col-end-8 cursor-pointer fill-main-color'
        />
      </Box>
      <Box className='grid grid-cols-7 justify-items-center'>
        {days.map((_) => (
          <Box key={_} className='text-sub-hover-color'>
            {_}
          </Box>
        ))}
      </Box>
      <Box className='flex flex-col flex-wrap gap-big'>
        {generateCalendarDays()}
      </Box>
    </Box>
  )
}
