import { MyGame, Sprite } from './MyGame'
import { GameEntities } from './types'

const fishDirections: boolean[] = []

abstract class Fish {
  spriteFish: Sprite | undefined
  x: number
  y: number
  width: number
  height: number
  speed: number
  swims: boolean
  canvasHeight: number
  canvasWidth: number
  crc: CanvasRenderingContext2D
  game: MyGame
  moveFish!: () => void

  constructor(
    crc: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    game: MyGame
  ) {
    this.width = 0
    this.height = 0
    this.x = 0
    this.y = 0
    this.speed = 15
    this.swims = false
    this.crc = crc
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth
    this.game = game
  }
  animate() {
    this.moveFish()
  }

  setSprite(sprites: Sprite) {
    this.spriteFish = sprites
    this.width = this.spriteFish.width
    this.height = this.spriteFish.height
  }

  render() {
    if (!this.spriteFish) {
      return
    }

    this.crc.drawImage(
      this.spriteFish.image,
      this.x,
      this.y,
      this.width,
      this.height
    )
    this.animate()
  }
}

export class BigFish extends Fish {
  constructor(
    crc: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    { game }: GameEntities
  ) {
    super(crc, canvasHeight, canvasWidth, game)
    this.x = 100
    this.y = 400
    this.crc = crc
    this.canvasHeight = canvasHeight
    this.canvasWidth = canvasWidth

    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keyup', this.keyUp)
  }

  keyUp = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0]
      fishDirections[event.keyCode] = false
      this.swims = false
    }
  }

  keyDown = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0]
      fishDirections[event.keyCode] = true
    }
  }

  moveFish = () => {
    if (this.y !== undefined && this.x !== undefined) {
      if (fishDirections[40] && this.y < this.canvasHeight - this.height) {
        this.y += this.speed
        this.swims = true
      }
      if (fishDirections[37] && this.x > 0) {
        this.x -= this.speed
        this.swims = true
      }
      if (fishDirections[39] && this.x < this.canvasWidth - this.width) {
        this.x += this.speed
        this.swims = true
      }
      if (fishDirections[38] && this.y > 100) {
        this.y -= this.speed
        this.swims = true
      }
    }
  }
}
/*
добавить еды быстро наелась выше скорость достижение это продолжительность плаванья и макс скорость комбо еды
*/
