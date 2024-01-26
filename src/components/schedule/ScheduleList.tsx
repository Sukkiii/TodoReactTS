import { Clovers } from '@/components/schedule'
import { Box, Input } from '@mui/material'

interface ScheduleListProps {
  scheduleColor: string
}

export default function ScheduleList({ scheduleColor }: ScheduleListProps) {
  const color = [scheduleColor]

  return (
    <Box className='flex'>
      <Clovers colors={color} />
      <Input autoFocus></Input>
    </Box>
  )
}
