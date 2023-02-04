import { Routes, Route, Link, RouteComponentProps } from 'react-router-dom'
import { Login, Registration } from '../../pages'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/registration" element={Registration} />
      <Route path="/login" element={Login} />
    </Routes>
  )
}
