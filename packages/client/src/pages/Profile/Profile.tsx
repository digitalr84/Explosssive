import React, { FC } from 'react'
import { myAppSelector } from '../../myhooks/redux'
import { useNavigate } from 'react-router-dom'
import { UserInterface } from '../../store/LoginBuilder'
import { myAppDispatch } from '../../myhooks/redux'
import { fetchAuth } from '../../controllers/auth'

import { useCallback } from 'react'
import { Button } from '../../components/Button'

export const Profile: FC = () => {
  const user = myAppSelector(state => state.auth.user as UserInterface)
  const dispath = myAppDispatch()

  console.log(user)
  const handleButtonClick = useCallback(() => {
    dispath(fetchAuth())
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
        type="submit">
        Регестрация
      </Button>
    </div>
  )
}
