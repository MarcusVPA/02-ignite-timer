import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/02-ignite-timer" element={<DefaultLayout />}>
        <Route path="/02-ignite-timer" element={<Home />} />
        <Route path="/02-ignite-timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
