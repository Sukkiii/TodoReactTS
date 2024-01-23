import { Box, Typography, Input } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { ClickAwayListener } from '@mui/base'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

export default function Schedule() {
  const [open, setOpen] = useState(false)
  const [scheduleTitle, setScheduleTitle] = useState('Schedule 1')
  const [isEditing, setIsEditing] = useState(false)

  const handleClick = () => {
    setOpen((_) => !_)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScheduleTitle(e.target.value)
  }

  const handleInputBlur = () => {
    setIsEditing(false)
  }

  return (
    <Box className='flex flex-col gap-middle'>
      <Box className='flex gap-2'>
        <Box className='flex items-center h-12 gap-2 p-2 pl-4 w-fit rounded-3xl bg-light-gray-color'>
          {isEditing ? (
            <Input
              autoFocus
              value={scheduleTitle}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className='text-clover-pink'
            />
          ) : (
            <Typography className='text-clover-pink'>
              {scheduleTitle}
            </Typography>
          )}
          <Box className='flex items-center justify-center w-6 h-6 p-1 bg-white rounded-full'>
            <AddIcon className='fill-dark-main-color' />
          </Box>
        </Box>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box className='flex items-center justify-center my-auto cursor-pointer'>
            <MoreHorizIcon className='fill-sub-color' onClick={handleClick} />
            {open && (
              <Box className='flex items-center justify-center px-4 py-2 my-auto bg-light-gray-color rounded-3xl'>
                <Typography
                  className='text-sub-hover-color text-size-text'
                  onClick={handleEdit}
                >
                  수정하기
                </Typography>
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      </Box>
    </Box>
  )
}
