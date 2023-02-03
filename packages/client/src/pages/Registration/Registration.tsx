import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './registration.css'

export const Registration: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div className="registr">
      <h1> Регестрация</h1>
    </div>
  )
}
