import { Box, Typography, Input, TextField } from '@mui/material'

export default function MyPageBox() {
  return (
    <>
      <Box className='flex justify-between my-10'>
        <Typography className='text-size-sub text-sub-hover-color'>
          MyPage
        </Typography>
        <Typography className='cursor-pointer text-size-sub text-sub-hover-color'>
          저장하기
        </Typography>
      </Box>
      <Box className='flex flex-col w-3/4 mx-auto gap-middle'>
        <Box className=' image-insert'>
          <Box className='flex items-center justify-center w-48 h-48 m-auto border-4 rounded-full border-sub-color'>
            <Typography className='text-sub-color'>이미지 없음</Typography>
          </Box>
        </Box>
        <Box className='flex items-center w-full gap-middle'>
          <Typography className='min-w-fit text-sub-hover-color'>
            이름
          </Typography>
          <Input
            placeholder='이름을 입력하세요.'
            className='w-full text-sub-hover-color'
          ></Input>
        </Box>
        <Box className='flex flex-col h-48 gap-2 introduce-insert'>
          <Typography className='min-w-fit text-sub-hover-color'>
            자기소개
          </Typography>
          <TextField
            placeholder='자기소개를 입력하세요.'
            className='w-full'
            rows={4}
          />
        </Box>
      </Box>
    </>
  )
}
