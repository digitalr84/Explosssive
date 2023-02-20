import { useCallback } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

export const StartPage = () => {
  const navigate = useNavigate()

  const handleButtonClick = useCallback(() => {
    console.log('Clicked event')
    navigate('/registration')
  }, [navigate])
  const handleButtonClickCl = useCallback(() => {
    console.log('Clicked event')
    navigate('/login')
  }, [navigate])
  const handleButtonGame = useCallback(() => {
    navigate('/game')
  }, [navigate])

  return (
    <div className="App">
      <h1>Вот тут будет жить ваше приложение :)</h1>
      <Button
        onClick={handleButtonClick}
        className="button_raspisnay"
        type="submit">
        Регестрация
      </Button>
      <Button
        onClick={handleButtonClickCl}
        className="button_raspisnay"
        type="submit">
        Логин
      </Button>
      <Button
        onClick={handleButtonGame}
        className="button_raspisnay"
        type="submit">
        Игра
      </Button>
    </div>
  )
}
