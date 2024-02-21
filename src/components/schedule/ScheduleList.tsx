import { Clovers } from '@/components/schedule'
import { Box, Input, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

interface ScheduleListProps {
  scheduleColor: string
  schedule: { id: number; title: string; value: string }
}

export default function ScheduleList({
  scheduleColor,
  schedule,
}: ScheduleListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [scheduleValue, setScheduleValue] = useState<string>(schedule.value)

  let colorName = 'primary'
  switch (scheduleColor) {
    case 'yellow':
      colorName = 'secondary'
      break
    case 'skyblue':
      colorName = 'info'
      break
    case 'green':
      colorName = 'success'
      break
    default:
      break
  }

  const handleEdit = () => {
    setIsEditing(true)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleValue(e.target.value)
  }

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit()
    }
  }

  useEffect(() => {
    if (!isEditing) {
      localStorage.setItem(
        dayjs().format('YYMMDD'),
        JSON.stringify({ ...schedule, value: scheduleValue }),
      )
    }
  }, [isEditing, schedule, scheduleValue])

  return (
    <Box className='flex gap-sm'>
      <Clovers colors={[scheduleColor]} />
      {!isEditing ? (
        <Input
          value={scheduleValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyEnter}
          className={`w-4/5 text-size-text-sm align-center text-clover-${scheduleColor}`}
          color={colorName as 'primary' | 'secondary' | 'info' | 'success'}
        />
      ) : (
        <Typography
          className={`w-4/5 text-size-text-sm flex items-center text-clover-${scheduleColor}`}
        >
          {scheduleValue}
        </Typography>
      )}
    </Box>
  )
}
