import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useCallback } from 'react'
import { fetchSignin } from '../../controllers/auth'
import { SigninData } from '../../controllers/auth'
import { myAppDispatch } from '../../myhooks/redux'

export const Login: FC = () => {
  const dispath = myAppDispatch()
  const handleButtonClick = useCallback(() => {
    console.log('Clicked event')
    const ll: SigninData = {
      login: 'pppppppmsksk',
      password: 'HHHHHhhh11112',
    }
    dispath(fetchSignin(ll))
  }, [])

  const handleButtonClickF = useCallback(() => {
    console.log('Clicked event')
    const ll: SigninData = {
      login: 'qqqqq',
      password: 'wwwww',
    }
    dispath(fetchSignin(ll))
  }, [])

  const handleInput = useCallback(() => {
    console.log('Clicked event')
  }, [])
  return (
    <div className="registr">
      <h1> Login</h1>
      <Input onChange={handleInput} name="login" value="wwwwww" />
      <Input onChange={handleInput} name="email" value="wwwwww" />
      <Button onClick={handleButtonClickF} className="" type="submit"></Button>
      <Button onClick={handleButtonClick} className="" type="submit"></Button>
    </div>
  )
}
