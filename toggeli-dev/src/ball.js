class Ball {
  constructor(game, options = {}) {
    this.ball = game.matter.add
      .image(options.x, options.y, "ball")
      .setBounce(1)
      .setVelocityX(40);
    // .setVelocityY(-20);
  }
}

export default Ball;
