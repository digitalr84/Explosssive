export class MyGame {
  private helo = 2
  private canvasEvery: CanvasRenderingContext2D

  constructor(protected canvas: HTMLCanvasElement) {
    this.canvasEvery = this.canvas.getContext('2d') as CanvasRenderingContext2D
    console.log(this.canvasEvery)
  }
  initial() {
    console.log(this.helo)
  }
  stop() {
    console.log('this.helo')
  }
}
