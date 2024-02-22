import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'

export default function Today() {
  const today = dayjs()

  return (
    <Box className='flex flex-col w-full gap-middle'>
      <Box className='flex gap-4 mb-4 justify-items-center'>
        <Typography className='text-size-sub text-sub-hover-color'>
          Today :
        </Typography>
        <Typography className='text-size-sub text-main-hover-color'>
          {today.format('MM월 DD일')}
        </Typography>
      </Box>
    </Box>
  )
}
