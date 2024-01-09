import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box>
      <Typography
        sx={{
          color: '#ff98a4',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        Todo Diary
      </Typography>
    </Box>
  )
}
