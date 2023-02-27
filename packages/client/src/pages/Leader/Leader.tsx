import React, { FC, useRef, useCallback } from 'react'
import { myAppSelector } from '../../myhooks/redux'
import { useNavigate } from 'react-router-dom'
import { UserInterface } from '../../store/LoginBuilder'
import { myAppDispatch } from '../../myhooks/redux'
import { takeLeader, newLeader } from '../../controllers/auth'

import { Button } from '../../components/Button'

export const Leader: FC = () => {
  const navigate = useNavigate()
  const dispath = myAppDispatch()

  const handleButtonChangeData = useCallback(() => {
    const score = Date.now()
    dispath(newLeader(score))
  }, [])
  const handleButtonChangeAvatar = useCallback(() => {
    const leaderData = {
      ratingFieldName: 'bubble',
      cursor: 0,
      limit: 100,
    }
    dispath(takeLeader(leaderData))
  }, [])

  const handleButtonStartPage = useCallback(() => {
    navigate('/')
  }, [])
  return (
    <div>
      <p>пока поулченая таблица только в консоль логе</p>
      <p>
        что бы занести победителя в таблицу на сервере нужно на главной кликнуть
        профиль - получить данные, потом можно возвращаться сюда
      </p>
      <p>да, это игра Myst</p>
      <Button
        onClick={handleButtonChangeAvatar}
        className="button_raspisnay"
        type="button">
        Получить данные
      </Button>
      <Button
        onClick={handleButtonChangeData}
        className="button_raspisnay"
        type="button">
        Занести победителя
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
