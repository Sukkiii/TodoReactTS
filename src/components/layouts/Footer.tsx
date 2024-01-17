import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import TodayIcon from '@mui/icons-material/Today'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import dayjs from 'dayjs'

export default function Footer() {
  const today = dayjs().format('YYYYMMDD')
  const [currentPage, setCurrentPage] = useState('')
  const location = useLocation()

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname])

  const getPageStyles = (pageName: string) => ({
    mainText:
      currentPage === pageName ? 'text-main-hover-color' : 'text-sub-color',
    mainIcon:
      currentPage === pageName ? 'fill-main-hover-color' : 'fill-sub-color',
    elseText: currentPage.includes(pageName)
      ? 'text-main-hover-color'
      : 'text-sub-color',
    elseIcon: currentPage.includes(pageName)
      ? 'fill-main-hover-color'
      : 'fill-sub-color',
  })

  return (
    <Box className='flex justify-between w-full h-20 border-t-2 border-t-gray-200'>
      <Link
        to='/'
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 cursor-pointer border-r-gray-200'
      >
        <HomeIcon className={`text-size-text ${getPageStyles('/').mainIcon}`} />
        <Typography className={`text-size-text ${getPageStyles('/').mainText}`}>
          Home
        </Typography>
      </Link>
      <Link
        to={`/today/${today}`}
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 border-r-2 cursor-pointer border-r-gray-200'
      >
        <TodayIcon
          className={`text-size-text ${getPageStyles('/today').elseIcon}`}
        />
        <Typography
          className={`text-size-text ${getPageStyles('/today').elseText}`}
        >
          Today
        </Typography>
      </Link>
      <Link
        to='/mypage'
        className='flex flex-col flex-wrap items-center content-center justify-center w-1/3 cursor-pointer '
      >
        <AccountCircleIcon
          className={`text-size-text ${getPageStyles('/mypage').elseIcon}`}
        />
        <Typography
          className={`text-size-text ${getPageStyles('/mypage').elseText}`}
        >
          MyPage
        </Typography>
      </Link>
    </Box>
  )
}
