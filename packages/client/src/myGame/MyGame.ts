import { BigFish } from './Fish'
import { View } from './View'
import { GameEntities } from './types'
import img from '/src/assets/489152.jpg'

type SpriteID = {
  id: string
  src: string
  width: number
  height: number
}
export class MyGame {
  private crc: CanvasRenderingContext2D
  private width = 1000
  private height = 600
  private BigFish: BigFish
  private sprites: Sprite
  public view: View

  constructor(protected canvas: HTMLCanvasElement) {
    this.crc = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.canvas.width = this.width
    this.canvas.height = this.height

    this.BigFish = new BigFish(
      this.crc,
      this.height,
      this.width,
      this.gameEntities
    )
    this.sprites = new Sprite({ id: 'fish', src: img, width: 50, height: 60 })
    this.view = new View(this.canvas, this.crc, this.gameEntities)
  }

  async initial(callback: () => void) {
    this.start()
    callback()
  }

  private prepareObjectGame() {
    this.view.setSprite(this.sprites)
    this.BigFish.setSprite(this.sprites)
  }

  get gameEntities(): GameEntities {
    return {
      fish: this.BigFish,
      sprites: this.sprites,
      view: this.view,
      game: this,
    }
  }

  stop() {
    console.log(999999)
  }

  start() {
    this.view.setSprite(this.sprites)
    this.BigFish.setSprite(this.sprites)
    this.view.letSwim()
  }
}

export class Sprite {
  public id: number | string
  public src: string
  public width: number
  public height: number
  public image: HTMLImageElement

  constructor(receive: SpriteID) {
    this.id = receive.id
    this.src = receive.src
    this.width = receive.width
    this.height = receive.height
    this.image = new Image()
    this.image.src = this.src
  }
}
