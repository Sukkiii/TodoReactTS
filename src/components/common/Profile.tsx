import { Box, Typography } from '@mui/material'

export default function Profile() {
  return (
    <Box className='flex justify-between gap-middle'>
      <Box className='flex items-center justify-center overflow-hidden border-4 rounded-full w-profileImg h-profileImg border-sub-color'>
        <img
          className='w-3/4 h-3/4'
          src='src/assets/fightingRabbit.png'
          alt='fighting rabbit'
        ></img>
      </Box>
      <Box className='flex flex-col w-profile gap-sm'>
        <Typography className='text-size-sub text-main-color'>sukki</Typography>
        <Typography className='font-semibold text-size-text text-sub-hover-color'>
          최대 50자 프로필입니다.
        </Typography>
      </Box>
    </Box>
  )
}
