import { CloverDefault } from '@/assets'
import { useState } from 'react'
import { Clover1 } from '@/assets'
import { Box } from '@mui/material'

export default function Clovers() {
  const [isDone, setIsDone] = useState(false)

  const handleDone = () => {
    setIsDone(true)
    if (isDone) {
      setIsDone(false)
    }
  }
  return (
    <Box className='w-4 h-4 mr-6 cursor-pointer' onClick={handleDone}>
      {isDone ? (
        <>
          <Box className='flex'>
            <img src={Clover1}></img>
            <img className='rotate-90' src={Clover1}></img>
          </Box>
          <Box className='flex'>
            <img className='rotate-[270deg]' src={Clover1}></img>
            <img className='rotate-180' src={Clover1}></img>
          </Box>
        </>
      ) : (
        <>
          <Box className='flex'>
            <img src={CloverDefault}></img>
            <img className='rotate-90' src={CloverDefault}></img>
          </Box>
          <Box className='flex'>
            <img className='rotate-[270deg]' src={CloverDefault}></img>
            <img className='rotate-180' src={CloverDefault}></img>
          </Box>
        </>
      )}
    </Box>
  )
}
