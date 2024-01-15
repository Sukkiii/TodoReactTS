import { Box, Typography } from '@mui/material'
import { Logo } from '@/assets'

export default function Header() {
  return (
    <Box className='flex justify-between'>
      <Typography variant='h2' color='primary' className='flex items-center'>
        Todo Diary
      </Typography>
      <Box>
        <img className='w-20 animate-wiggle' src={Logo} alt='fighting rabbit' />
      </Box>
    </Box>
  )
}
