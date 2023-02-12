import { useRef } from 'react';
import { MyGame } from '../../myGame/MyGame';

export const Play = () => {
  const mygame = useRef<MyGame | null>(null);
  const mycanvas = useRef<HTMLCanvasElement>(null);
  
  mygame.current = new MyGame(mycanvas.current as HTMLCanvasElement); 

  return (
      <div>  
        <canvas id="idcanvas" ref={mycanvas} />
      </div>
  );
};