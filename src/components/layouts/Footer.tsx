import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import TodayIcon from '@mui/icons-material/Today'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import dayjs from 'dayjs'

export default function Footer() {
  const today = dayjs().format('YYYYMMDD')

  return (
    <Box className='flex justify-between w-full h-20 border-t-2 border-t-gray-200'>
      <Link
        to='/'
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 cursor-pointer border-r-gray-200'
      >
        <HomeIcon className='fill-main-hover-color' />
        <Typography className='text-main-hover-color text-size-text'>
          Home
        </Typography>
      </Link>
      <Link
        to={`/today/${today}`}
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 cursor-pointer border-r-gray-200'
      >
        <TodayIcon className='fill-sub-color' />
        <Typography className='text-sub-color text-size-text'>Today</Typography>
      </Link>
      <Link
        to='/mypage'
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 cursor-pointer '
      >
        <AccountCircleIcon className='fill-sub-color' />
        <Typography className='text-sub-color text-size-text'>
          MyPage
        </Typography>
      </Link>
    </Box>
  )
}
