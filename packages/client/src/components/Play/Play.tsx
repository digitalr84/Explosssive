import { useRef, useEffect, useCallback } from 'react'
import { MyGame } from '../../myGame/MyGame'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

export const Play = () => {
  const mygame = useRef<MyGame | null>(null)
  const mycanvas = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()

  const handleButtonLeader = useCallback(() => {
    navigate('/')
  }, [navigate])

  useEffect(() => {
    mygame.current = new MyGame(mycanvas.current as HTMLCanvasElement)
    mygame.current.initial(() => {
      console.log('lets sweem')
    })
    return () => {
      mygame.current.stop()
    }
  })
  return (
    <div>
      <Button
        onClick={handleButtonLeader}
        className="button_raspisnay"
        type="submit">
        Нажмите для победы, ну или всплытия, хотя тоже не стоит
      </Button>
      <canvas id="idcanvas" ref={mycanvas} />
    </div>
  )
}
