import { Schedule } from '@/components/schedule'
import { Box } from '@mui/material'

export default function Schedules() {
  return (
    <Box className='flex flex-col gap-middle'>
      <Schedule color='pink' />
      <Schedule color='yellow' />
      <Schedule color='skyblue' />
      <Schedule color='green' />
    </Box>
  )
}
