import React, { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export const Forum: FC = () => {
  const navigate = useNavigate()
  const toRegistration = () => {
    console.log('апи форума в разработке')
  }
  const handleButtonStartPage = useCallback(() => {
    navigate('/')
  }, [])
  return (
    <div>
      <Button
        type="button"
        className="button_raspisnay"
        onClick={toRegistration}>
        Получить данные
      </Button>
      <Button
        type="button"
        className="button_raspisnay"
        onClick={toRegistration}>
        Получить много данных
      </Button>
      <Button
        type="button"
        className="button_raspisnay"
        onClick={toRegistration}>
        Получить еще больше данных
      </Button>
      <Button
        onClick={handleButtonStartPage}
        className="button_raspisnay"
        type="button">
        На главную страницу
      </Button>
    </div>
  )
}
