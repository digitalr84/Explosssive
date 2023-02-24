import React, { FC, useRef } from 'react'
import { myAppSelector } from '../../myhooks/redux'
import { useNavigate } from 'react-router-dom'
import { UserInterface } from '../../store/LoginBuilder'
import { myAppDispatch } from '../../myhooks/redux'
import { fetchAuth, fetchAvatar } from '../../controllers/auth'

import { useCallback } from 'react'
import { Button } from '../../components/Button'

export const Profile: FC = () => {
  const navigate = useNavigate()
  const user = myAppSelector(state => state.auth.user as UserInterface)
  const dispath = myAppDispatch()
  const ref = useRef(null)
  const farAvatat = 'https://ya-praktikum.tech/api/v2/resources/'

  console.log(user)
  const handleButtonClick = useCallback(() => {
    dispath(fetchAuth())
  }, [])
  const handleButtonChangeAvatar = useCallback(() => {
    console.log(ref.current)
    dispath(fetchAvatar(ref.current))
  }, [])
  const uploadProfileImg = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement
    ref.current = (target.files as FileList)[0]
    console.log(ref.current)
  }
  const handleButtonChangePassword = useCallback(() => {
    navigate('/password')
  }, [])
  const handleButtonChangeData = useCallback(() => {
    navigate('/changeprofile')
  }, [])

  return (
    <div>
      <p>{user && user.display_name}</p>
      <p>{user && user.first_name}</p>
      <p>{user && user.second_name}</p>
      <p>{user && user.phone}</p>
      <p>{user && user.email}</p>
      <Button
        onClick={handleButtonClick}
        className="button_raspisnay"
        type="button">
        Получить данные
      </Button>
      <div>
        <img src={user && farAvatat + user.avatar} />
      </div>
      <input accept="image/*" type="file" onChange={uploadProfileImg} />
      <Button
        onClick={handleButtonChangeAvatar}
        className="button_raspisnay"
        type="button">
        Сменить аватар
      </Button>
      <Button
        onClick={handleButtonChangePassword}
        className="button_raspisnay"
        type="button">
        Сменить пароль
      </Button>
      <Button
        onClick={handleButtonChangeData}
        className="button_raspisnay"
        type="button">
        Сменить данные
      </Button>
    </div>
  )
}
