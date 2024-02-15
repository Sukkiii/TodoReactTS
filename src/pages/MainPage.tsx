import { Calendar } from '@/components/common'
import { Schedules } from '@/components/schedule'
import { ScrollToTop } from '@/components/layouts'

const MainPage = () => {
  return (
    <>
      <ScrollToTop />
      <Calendar />
      <Schedules />
    </>
  )
}

export default MainPage
