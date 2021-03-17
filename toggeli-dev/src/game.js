import Phaser from "phaser";
import Ball from "./ball";
import KickerRacket, {
  RACKET_GOAL,
  RACKET_DEFENSE,
  RACKET_CENTER
} from "./kickerRacket";

class Game {
  constructor() {
    this.GAME_WIDTH = 960;
    this.GAME_HEIGHT = 540;

    let config = {
      type: Phaser.AUTO,
      width: this.GAME_WIDTH,
      height: this.GAME_HEIGHT,
      physics: {
        default: "matter",
        matter: {
          debug: true,
          gravity: { x: 0, y: 0 }
        }
      },
      scene: {
        preload: this.preload,
        create: this.create,
        update: this.update
      }
    };
    this.game = new Phaser.Game(config);
  }

  preload() {

    this.load.json('kickerShapes', 'assets/kickerShapes.json');
    this.load.image("ball", "assets/ball.png");
    /*this.load.image("kicker", "assets/kicker_1.png");
    this.load.image('kickerKickA', 'assets/kicker_2.png');
    this.load.image('kickerKickB', 'assets/kicker_3.png');*/
    this.load.atlas('kicker', 'assets/kicker.png', 'assets/kicker.json');

    this.load.image("background", "assets/background.png");
  }

  create() {
    this.objects = [];

    let bounds = this.matter.world.setBounds();
    Object.values(bounds.walls).forEach(o => (o.label = "bounds"));

    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setScale(0.5);

      console.log(this)

    setTimeout(() => {
      const ball = new Ball(this, { x: 100, y: 270 });
      this.objects.push(ball);
    }, 1000)


    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_GOAL,
        team: "red",
        controls: {
          up: "up",
          down: "down",
          left: 'left',
          right: 'right'
        }
      })
    );

    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_DEFENSE,
        team: "red",
        controls: {
          up: "W",
          down: "S",
          left: 'A',
          right: 'D'
        }
      })
    );

    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_CENTER,
        team: "red",
        controls: {
          up: "W",
          down: "S",
          left: 'A',
          right: 'D'
        }
      })
    );

    this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {

      
      if (!bodyA.gameObject || !bodyB.gameObject)  {
        return
      }

      if ((bodyA.gameObject.name === 'ball' || bodyA.gameObject.name === 'kicker' ) && bodyB.gameObject.name === 'ball' || bodyB.gameObject.name === 'kicker') {
       


        const ball = bodyA.gameObject.name === 'ball' ? bodyA : bodyB
        const kicker = bodyA.gameObject.name === 'kicker' ? bodyA : bodyB
        if (kicker.parent.label === 'kicker_1') {
          return
        }

        if (kicker.parent.label === 'kicker_2' || kicker.parent.label === 'kicker_3') {
          if (kicker.x < ball.x) {
            return
          }
        }
        if (kicker.parent.label === 'kicker_4' || kicker.parent.label === 'kicker_5') {
          if (kicker.x > ball.x) {
            return
          }
        }


        ball.gameObject.setVelocityX((ball.velocity.x * -1) + 10)
        ball.gameObject.setVelocityY((ball.velocity.y * -1) + 10)
      }
    })

  }

  update() {
    for (let obj in this.objects) {
      this.objects[obj].update && this.objects[obj].update();
    }
  }
}

export default Game;
