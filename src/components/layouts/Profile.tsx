import { Box, Typography } from '@mui/material'
import { Logo } from '@/assets'
import { useEffect, useState } from 'react'

export default function Profile() {
  const [user, setUser] = useState({
    userImage: localStorage.getItem('userImage') || '',
    userName: localStorage.getItem('userName') || 'Default Name',
    userIntroduce:
      localStorage.getItem('userIntroduce') || 'No introduction available.',
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <Box className='flex justify-between gap-middle'>
      <Box className='flex items-center justify-center overflow-hidden border-4 rounded-full w-profileImg h-profileImg border-sub-color'>
        {user.userImage ? (
          <img
            className='w-full h-full'
            src={user.userImage}
            alt='user profile'
          />
        ) : (
          <img className='w-3/4 h-3/4' src={Logo} alt='fighting rabbit' />
        )}
      </Box>
      <Box className='flex flex-col w-profile gap-sm'>
        <Typography className='text-size-sub text-main-color'>
          {user.userName}
        </Typography>
        <Typography className='font-semibold text-size-text text-sub-hover-color'>
          {user.userIntroduce}
        </Typography>
      </Box>
    </Box>
  )
}
