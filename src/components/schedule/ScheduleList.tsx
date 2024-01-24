import { Clovers } from '@/components/schedule'
import { Box, Input } from '@mui/material'

export default function ScheduleList() {
  return (
    <Box className='flex h-8'>
      <Clovers />
      <Input autoFocus></Input>
    </Box>
  )
}
