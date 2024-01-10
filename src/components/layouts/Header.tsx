import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box className='flex justify-between'>
      <Typography
        sx={{
          color: '#ff98a4',
          fontSize: '30px',
          fontWeight: 'bold',
          alignItems: 'center',
          display: 'flex',
        }}
      >
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
