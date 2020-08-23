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
    this.load.image("ball", "assets/ball.png");
    this.load.image("kicker", "assets/kicker_1.png");
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

    const ball = new Ball(this, { x: 100, y: 270 });
    this.objects.push(ball);

    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_GOAL,
        team: "red",
        controls: {
          up: "up",
          down: "down"
        }
      })
    );

    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_DEFENSE,
        team: "red",
        controls: {
          up: "W",
          down: "S"
        }
      })
    );

    this.objects.push(
      new KickerRacket(this, {
        position: RACKET_CENTER,
        team: "red",
        controls: {
          up: "W",
          down: "S"
        }
      })
    );
  }

  update() {
    for (let obj in this.objects) {
      this.objects[obj].update && this.objects[obj].update();
    }
  }
}

export default Game;
