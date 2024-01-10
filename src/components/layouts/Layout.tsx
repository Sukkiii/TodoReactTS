import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components/layouts'

export default function Layout() {
  return (
    <Box className='flex flex-col m-auto my-2 rounded-md outline-slate-200 outline outline-8 w-width-fix h-height-fix'>
      <Box className='flex-1 h-full m-4'>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  )
}
