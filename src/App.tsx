import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from '@/pages/MainPage'
import TodayPage from '@/pages/TodayPage'
import MyPage from './pages/MyPage'
import { Layout } from '@/components/layouts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/today/:id' element={<TodayPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
