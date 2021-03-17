function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


class Ball {
  constructor(game, options = {}) {


    const x = game.game.config.width / 2
    const y = 0
    this.ball = game.matter.add
      .image(x, y, "ball")
      .setBounce(1, 1)
      .setName('ball')
      .setMass(10)
      .setVelocityY(40)
      .setVelocityX(getRandomArbitrary(-15, 15))

    this.ball.body.collideWorldBounds = true
    //this.ball.body.restitution = 0
    // .setVelocityY(-20);
  }
}

export default Ball;
