import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'

const days = ['일', '월', '화', '수', '목', '금', '토']

export default function Calendar() {
  const today: dayjs.Dayjs = dayjs()

  return (
    <Box className='flex flex-col w-full mt-4 gap-middle'>
      <Box>
        <Typography className='text-size-sub text-main-hover-color'>
          {today.format('YYYY년 MM월')}
        </Typography>
      </Box>
      <Box className='flex justify-around'>
        {days.map((_) => (
          <Box key={_}>{_}</Box>
        ))}
      </Box>
    </Box>
  )
}
