import Phaser from "phaser";

class Kicker {
  constructor(game, options = {}) {
    this.options = options
    this.kickerShapes = game.cache.json.get('kickerShapes')

    this.game = game
    this.kicker = game.matter.add.sprite(options.x, options.y, 'background', 'kicker', {shape: this.kickerShapes.kicker_1})

    this.kicker.setScale(0.6)
    this.kicker.setAngle(options.left ? 90 : 270)
    this.kicker.setStatic(true)


   /* this.kicker = game.matter.add
      .image(options.x, options.y, "kicker")
      .setScale(0.6)
      .setAngle(options.left ? 90 : 270)
      .setStatic(true);*/

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

  update() {
  }


  changeBody(shape = 1) {

    console.log(this.kicker)
    this.kicker.setBody(this.kickerShapes.kicker_2)
  /* this.kicker.destroy()
    this.kicker = this.game.matter.add.sprite(this.options.x, this.options.y, 'background', 'kicker', {shape: this.kickerShapes.kicker_2})
    this.kicker.setScale(0.6)
    this.kicker.setAngle(this.options.left ? 90 : 270)
    this.kicker.setStatic(true)*/

    //const newBody = this.game.matter.bodies.fromVertices(this.options.x, this.options.y, [[], []],  this.kickerShapes.kicker_2)
    /*çconsole.log(this.game.matter.bodies)
    this.kicker.setAngle(this.options.left ? 90 : 270)
    this.kicker.setExistingBody(newBody, true)*/
    /*this.kicker.setScale(0.6)
    this.kicker.setAngle(this.options.left ? 90 : 270)
    this.kicker.setStatic(true)*/
    
  }

  move(movement) {
    console.log(this.game.scale.height);
    console.log(this.kicker.y);
    this.kicker.y = this.kicker.y - movement;
  }
}

export default Kicker;
