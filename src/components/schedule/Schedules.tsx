import { Schedule } from '@/components/schedule'
import { Box } from '@mui/material'

export default function Schedules() {
  return (
    <Box className='flex flex-col gap-sm'>
      <Schedule color='pink' id={1} />
      <Schedule color='yellow' id={2} />
      <Schedule color='skyblue' id={3} />
      <Schedule color='green' id={4} />
    </Box>
  )
}
