import { useState, useEffect } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'

export default function MyPageBox() {
  const [user, setUser] = useState({
    userImage: localStorage.getItem('userImage') || '',
    userName: localStorage.getItem('userName') || '',
    userIntroduce: localStorage.getItem('userIntroduce') || '',
  })
  const [, setImageURL] = useState('')
  const [isNewUser, setIsNewUser] = useState(!localStorage.getItem('user'))

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsNewUser(false)
    }
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      const imageUrl = reader.result as string
      setImageURL(imageUrl)
      setUser((prevUser) => ({ ...prevUser, userImage: imageUrl }))
    }
    reader.readAsDataURL(file)
  }

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <>
      <Box className='flex justify-between my-10'>
        <Typography className='text-size-sub text-sub-hover-color'>
          MyPage
        </Typography>
        <Typography
          className='cursor-pointer text-size-sub text-sub-hover-color'
          onClick={handleSave}
        >
          {isNewUser ? '저장하기' : '수정하기'}
        </Typography>
      </Box>
      <Box className='relative flex flex-col w-3/4 mx-auto my-5 gap-middle'>
        <Box className='relative w-48 h-48 mx-auto image-insert'>
          <label htmlFor='image-upload' className='w-full h-full'>
            <Box className='flex items-center justify-center w-full h-full m-auto border-2 rounded-full border-sub-color'>
              {user.userImage ? (
                <img
                  src={user.userImage}
                  alt='user'
                  className='object-cover w-full h-full rounded-full'
                />
              ) : (
                <Typography className='text-sub-color'>이미지 없음</Typography>
              )}
            </Box>
          </label>
          <input
            type='file'
            id='image-upload'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor='image-upload'>
            <Box className='absolute flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full cursor-pointer bottom-2 right-2 border-sub-color'>
              <AddPhotoAlternateOutlinedIcon className='fill-sub-color' />
            </Box>
          </label>
        </Box>
        <Box className='flex items-center w-full gap-middle'>
          <Typography className='min-w-fit text-sub-hover-color'>
            이름
          </Typography>
          <TextField
            placeholder='이름을 입력하세요.'
            variant='standard'
            value={user.userName}
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                userName: e.target.value,
              }))
            }
            sx={{
              '& .MuiInputBase-input': {
                color: '#8f8f8f',
                borderBottomColor: '#8f8f8f',
                border: 'none',
              },
              '& .MuiInputBase-root': {
                borderColor: '#8f8f8f',
              },
            }}
            className='w-full'
          ></TextField>
        </Box>
        <Box className='flex flex-col h-48 gap-2 introduce-insert'>
          <Typography className='min-w-fit text-sub-hover-color'>
            자기소개
          </Typography>
          <TextField
            placeholder='자기소개를 입력하세요.'
            variant='outlined'
            multiline
            value={user.userIntroduce}
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                userIntroduce: e.target.value,
              }))
            }
            sx={{
              '& .MuiInputBase-input': {
                color: '#8f8f8f',
              },
            }}
            className='w-full text-sub-hover-color'
            rows={4}
            maxRows={6}
          />
        </Box>
      </Box>
    </>
  )
}
