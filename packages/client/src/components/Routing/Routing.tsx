import { Routes, Route } from 'react-router-dom'
import { Login, Registration, StartPage } from '../../pages'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  )
}
