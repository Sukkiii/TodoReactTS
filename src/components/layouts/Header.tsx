import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box className='flex justify-between'>
      <Typography variant='h2' color='primary' className='flex items-center'>
        Todo Diary
      </Typography>
      <Box>
        <img
          className='w-20 animate-wiggle'
          src='src/assets/fightingRabbit.png'
          alt='fighting rabbit'
        ></img>
      </Box>
    </Box>
  )
}
