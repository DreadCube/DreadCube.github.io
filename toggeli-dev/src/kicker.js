import Phaser from "phaser";

class Kicker {

  applyKickerSettings () {
    this.kicker.setScale(0.6)
    this.kicker.setAngle(this.options.left ? 90 : 270)
    this.kicker.setStatic(true)
    this.kicker.setName('kicker')
  
    this.kicker.setOrigin(0.5, 0.5)
    this.kicker.body.restitution = 0.25;


    this.kicker.body.allowGravity = false;
    this.kicker.allowGravity = false;

    this.kicker.setBounce(1, 1)

  }

  constructor(game, options = {}) {
    this.options = options
    this.kickerShapes = game.cache.json.get('kickerShapes')

    this.game = game


    this.kicker = game.matter.add.sprite(options.x, options.y, 'kicker', 'kicker_1.png', {shape: this.kickerShapes.kicker_1})

    this.applyKickerSettings()






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


  changeFrame(frame = 0) {

    const x = this.kicker.x
    const y = this.kicker.y
   
    this.kicker.destroy()

    switch (frame) {
      case 0:
        this.kicker = this.game.matter.add.sprite(x, y, 'kicker', 'kicker_1.png', {shape: this.kickerShapes.kicker_1, })
        
        break 

      case 1:
        this.kicker = this.game.matter.add.sprite(x, y, 'kicker', 'kicker_2.png', {shape: this.kickerShapes.kicker_2})
      break

      case 2:
        this.kicker = this.game.matter.add.sprite(x, y, 'kicker', 'kicker_3.png', {
          shape: this.kickerShapes.kicker_3
        })

        
      break

      case 3:
        this.kicker = this.game.matter.add.sprite(x, y, 'kicker', 'kicker_4.png', {shape: this.kickerShapes.kicker_4})
      break

      case 4:
        this.kicker = this.game.matter.add.sprite(x, y, 'kicker', 'kicker_5.png', {shape: this.kickerShapes.kicker_5})
       
      break
    }
    
    this.applyKickerSettings()

  
    
  }

  move(movement) {
    console.log(this.game.scale.height);
    console.log(this.kicker.y);
    this.kicker.y = this.kicker.y - movement;
  }
}

export default Kicker;
