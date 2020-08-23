import Phaser from "phaser";

class Kicker {
  constructor(game, options = {}) {
    this.kicker = game.matter.add
      .image(options.x, options.y, "kicker")
      .setScale(0.6)
      .setAngle(options.left ? 90 : 270)
      .setStatic(true);

    this.kicker.body.restitution = 1;
    this.kicker.body.allowGravity = false;
    this.kicker.allowGravity = false;

    this.game = game;

    this.kicker.body.onCollideCallback = event => {
      if (event.bodyA.label === "bounds" || event.bodyB.label === "bounds") {
        this.collidesWithWall = true;
      }
    };

    this.kicker.body.onCollideEndCallback = event => {
      console.log("collide end");
      this.collidesWithWall = true;
    };
  }

  update() {}

  move(movement) {
    console.log(this.game.scale.height);
    console.log(this.kicker.y);
    this.kicker.y = this.kicker.y - movement;
  }
}

export default Kicker;
