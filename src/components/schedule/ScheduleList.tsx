import { Clovers } from '@/components/schedule'
import { Box, Input, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

interface ScheduleListProps {
  scheduleColor: string
  schedule: { id: number; title: string }
}

export default function ScheduleList({
  scheduleColor,
  schedule,
}: ScheduleListProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [scheduleName, setScheduleName] = useState<string | undefined>(
    localStorage.getItem(dayjs().format('DDMMYY')),
  )

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
    setScheduleName(e.target.value)
  }

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEdit()
      localStorage.setItem(dayjs().format('DDMMYY'), scheduleName || '')
    }
  }

  useEffect(() => {
    if (!isEditing) {
      localStorage.setItem(dayjs().format('DDMMYY'), JSON.stringify(schedule))
    }
  }, [isEditing, schedule])

  return (
    <Box className='flex gap-sm'>
      <Clovers colors={[scheduleColor]} />
      {!isEditing ? (
        <Input
          autoFocus
          value={scheduleName}
          onChange={handleInputChange}
          onKeyDown={handleKeyEnter}
          className={`w-4/5 text-size-text-sm align-center text-clover-${scheduleColor}`}
          color={colorName as 'primary' | 'secondary' | 'info' | 'success'}
        />
      ) : (
        <Typography
          className={`w-4/5 text-size-text-sm flex items-center text-clover-${scheduleColor}`}
        >
          {scheduleName}
        </Typography>
      )}
    </Box>
  )
}
