import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import TodayIcon from '@mui/icons-material/Today'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Footer() {
  return (
    <Box className='flex justify-between w-full h-20 border-t-2 border-t-gray-200'>
      <Box className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 border-r-gray-200'>
        <HomeIcon className='fill-main-hover-color'></HomeIcon>
        <Typography className='text-main-hover-color text-size-text'>
          Home
        </Typography>
      </Box>
      <Box className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 border-r-gray-200'>
        <TodayIcon className='fill-sub-color'></TodayIcon>
        <Typography className='text-sub-color text-size-text'>Today</Typography>
      </Box>
      <Box className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 '>
        <AccountCircleIcon className='fill-sub-color'></AccountCircleIcon>
        <Typography className='text-sub-color text-size-text'>
          MyPage
        </Typography>
      </Box>
    </Box>
  )
}
