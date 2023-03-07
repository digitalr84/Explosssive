import { BigFish } from './Fish'
import { GameEntities } from './types'
import { Sprite } from './MyGame'

export class View {
  public canvas: HTMLCanvasElement
  public crc: CanvasRenderingContext2D
  public sprites: Sprite
  public now: number | undefined
  public then: number | undefined
  public deltaTime: number | undefined
  public animationFrameId: number | undefined
  public BigFish: BigFish
  public pressWin: boolean

  constructor(
    canvas: HTMLCanvasElement,
    crc: CanvasRenderingContext2D,
    { fish }: GameEntities
  ) {
    this.canvas = canvas
    this.canvas.width = 1000
    this.canvas.height = 600
    this.crc = crc
    this.BigFish = fish
  }
  setSprite(sprites: Sprite) {
    this.sprites = sprites
  }

  clearCanvas(): void {
    if (this.canvas && this.crc) {
      this.crc.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }
  update(): void {
    this.clearCanvas()
    this.BigFish.render()
  }
  stopSwim() {
    console.log(999999)
  }
  animate() {
    this.now = Date.now()
    this.deltaTime = this.now - this.then
    if (this.deltaTime > 100) {
      this.then = this.now - (this.deltaTime % 100)
      this.update()
    }
  }
  letSwim() {
    this.then = Date.now()
    const updater = () => {
      this.animate()
      if (!this.pressWin) {
        this.animationFrameId = requestAnimationFrame(updater)
      }
    }
    this.animationFrameId = requestAnimationFrame(updater)
  }
}
