import { Box } from '@mui/system'
import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer, Profile } from '@/components/layouts'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Hahmlet', 'Trebuchet MS', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 700,
    fontWeightBold: 900,
    h2: {
      fontFamily: ['Black Han Sans', 'Trebuchet MS', 'sans-serif'].join(','),
      fontSize: '2rem',
      fontWeight: '400',
    }, // Header only
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.25rem' },
    h5: { fontSize: '1rem' },
  },
  palette: {
    primary: {
      main: '#FF98A4',
      light: '#FFC7CE',
      dark: '#FF5E70',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F5C23A',
    },
    info: {
      main: '#91CBD9',
    },
    success: {
      main: '#60AA25',
    },
  },
})

export default function Layout() {
  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className='flex flex-col m-auto my-2 rounded-md outline-slate-200 outline outline-8 w-width-fix h-height-fix'>
        <Box className='m-4 mb-0'>
          <Header />
          {location.pathname !== '/mypage' && <Profile />}
        </Box>
        <Box className='flex-1 h-full m-4 overflow-y-auto'>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
