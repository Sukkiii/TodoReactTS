import { useState } from 'react'
import { Box } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

interface CloversProps {
  colors: string[]
}
export default function Clovers({ colors }: CloversProps) {
  let fill = [colors[0], colors[0], colors[0], colors[0]]
  const [, setIsDone] = useState(false)

  const handleDone = () => {
    setIsDone(true)
  }

  switch (colors.length) {
    case 1:
      fill = [colors[0], colors[0], colors[0], colors[0]]
      break
    case 2:
      fill = [colors[0], colors[0], colors[1], colors[1]]
      break
    case 3:
      fill = [colors[0], colors[0], colors[1], colors[2]]
      break
    case 4:
      fill = [colors[0], colors[1], colors[2], colors[3]]
      break
    default:
      return ['sub', 'sub', 'sub', 'sub']
  }

  return (
    <Box className='w-6 mr-3 cursor-pointer' onClick={handleDone}>
      <Box className='relative h-8 ml-2 rotate-45'>
        <FavoriteRoundedIcon
          fill={fill[1]}
          className={`absolute top-[-3.5px] w-5 h-5 fill-clover-${fill[1]}`}
        />
        <FavoriteRoundedIcon
          className={`absolute top-[4px] w-5 h-5 rotate-90 left-2 fill-clover-${fill[2]}`}
        />
        <FavoriteRoundedIcon
          className={`absolute top-[4px] left-[-8px] rotate-[270deg] w-5 h-5 fill-clover-${fill[0]}`}
        />
        <FavoriteRoundedIcon
          className={`absolute w-5 h-5 rotate-180 top-[12px] fill-clover-${fill[3]}`}
        />
      </Box>
    </Box>
  )
}
