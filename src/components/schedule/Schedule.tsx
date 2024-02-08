import { Box, Typography, Input } from '@mui/material'
import { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { ClickAwayListener } from '@mui/base'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ScheduleList } from '@/components/schedule'
import dayjs from 'dayjs'
import { ScheduleType } from '@/types'

interface ScheduleProps {
  color: string
  id: number
}

export default function Schedule({ color, id }: ScheduleProps) {
  let colorName = 'primary'
  switch (color) {
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

  const [open, setOpen] = useState(false)
  const [scheduleTitle, setScheduleTitle] = useState(`Schedule ${id}`)
  const [isEditing, setIsEditing] = useState(false)
  const [schedules, setSchedules] = useState<ScheduleType[]>([])

  const handleClick = () => {
    setOpen((_) => !_)
  }

  const handleClickAway = () => {
    setOpen(false)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)

    const newSchedule: ScheduleType = {
      id: schedules.length + 1,
      title: scheduleTitle,
      value: '',
      isDone: false,
    }

    const updatedSchedules = [...schedules, newSchedule]

    setSchedules(updatedSchedules)

    localStorage.setItem(
      dayjs().format('YYMMDD'),
      JSON.stringify(updatedSchedules),
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleTitle(e.target.value)
  }

  const handleInputBlur = () => {
    setOpen(false)
    setIsEditing(false)
    if (isEditing) {
      handleSave()
    }
  }

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOpen(false)
      handleSave()
    }
  }

  const addSchedule = () => {
    // const newId = schedules.length + 1
    const newSchedule: ScheduleType = {
      id,
      title: `Schedule ${id}`,
      value: '',
      isDone: false,
    }

    const updatedSchedules = [...schedules, newSchedule]

    setSchedules(updatedSchedules)

    localStorage.setItem(
      dayjs().format('YYMMDD'),
      JSON.stringify(updatedSchedules),
    )
  }

  useEffect(() => {
    const storedSchedules = localStorage.getItem(dayjs().format('YYMMDD'))
    if (storedSchedules) {
      setSchedules(JSON.parse(storedSchedules))
    }
  }, [])

  useEffect(() => {
    if (!isEditing) {
      handleSave()
    }
  }, [isEditing, open])

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box className='flex flex-col gap-sm'>
        <Box className='flex gap-2'>
          <Box className='flex items-center h-10 gap-2 p-2 pl-4 w-fit rounded-3xl bg-light-gray-color'>
            {isEditing ? (
              <Input
                autoFocus
                value={scheduleTitle}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleKeyEnter}
                color={
                  colorName as 'primary' | 'secondary' | 'info' | 'success'
                }
                className={`w-24 text-size-text text-clover-${color}`}
              />
            ) : (
              <Typography
                className={`w-24 text-size-text text-clover-${color}`}
              >
                {scheduleTitle}
              </Typography>
            )}
            <Box className='flex items-center justify-center w-6 h-6 p-1 bg-white rounded-full'>
              <AddIcon
                className={`cursor-pointer fill-clover-${color}`}
                onClick={addSchedule}
              />
            </Box>
          </Box>
          <Box className='flex items-center justify-center my-auto cursor-pointer'>
            <MoreHorizIcon className='fill-sub-color' onClick={handleClick} />
            {open && (
              <Box className='flex items-center justify-center px-4 py-2 my-auto animate-fade-right animate-duration-500 animate-ease-out bg-light-gray-color rounded-3xl'>
                <Typography
                  className='text-sub-hover-color text-size-text'
                  onClick={isEditing ? handleSave : handleEdit}
                >
                  {isEditing ? '저장하기' : '수정하기'}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box className='flex flex-col gap-2'>
          {schedules.map((schedule) => (
            <ScheduleList
              key={schedule.id}
              scheduleColor={color}
              schedule={schedule}
            />
          ))}
        </Box>
      </Box>
    </ClickAwayListener>
  )
}
