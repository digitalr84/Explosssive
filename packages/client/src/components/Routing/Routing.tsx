import { Routes, Route } from 'react-router-dom'
import { Login, Registration, StartPage, Game, Profile } from '../../pages'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
