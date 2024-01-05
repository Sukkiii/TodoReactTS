import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainPage from '@/pages/MainPage'
import DetailPage from '@/pages/DetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/home' element={<Navigate replace to='' />} />
        <Route path='/main' element={<Navigate replace to='' />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
