import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components/layouts'

export default function Layout() {
  return (
    <Box className='flex flex-col border-2 rounded-md w-screen-mobile'>
      <Box className='flex-1 h-full mx-auto max-w-screen-mobile'>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  )
}
