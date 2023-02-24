import { useRef, useEffect } from 'react'
import { MyGame } from '../../myGame/MyGame'

export const Play = () => {
  const mygame = useRef<MyGame | null>(null)
  const mycanvas = useRef<HTMLCanvasElement>(null)

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
      <canvas id="idcanvas" ref={mycanvas} />
    </div>
  )
}
