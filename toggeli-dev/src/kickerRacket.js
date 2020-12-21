import Kicker from "./kicker";

export const RACKET_GOAL = 1;
export const RACKET_DEFENSE = 2;
export const RACKET_CENTER = 3;
export const RACKET_OFFENSE = 4;

class KickerRacket {
  constructor(game, options) {
    this.game = game;
    this.kickers = [];
    this.controls = options.controls;

    this.keyUp = game.input.keyboard.addKey(this.controls.up);
    this.keyDown = game.input.keyboard.addKey(this.controls.down);
    this.keyLeft = game.input.keyboard.addKey(this.controls.left)
    this.keyRight = game.input.keyboard.addKey(this.controls.right)


    this.kickerShapes = game.cache.json.get('kickerShapes')



    if (options.team === "red" && options.position === RACKET_GOAL) {
      this.kickers.push(
        new Kicker(game, {
          x: 930,
          y: 260
        })
      );
    }

    if (options.team === "red" && options.position === RACKET_DEFENSE) {
      this.kickers.push(
        new Kicker(game, {
          x: 750,
          y: 80
        }),
        new Kicker(game, {
          x: 750,
          y: 260
        }),
        new Kicker(game, {
          x: 750,
          y: 440
        })
      );
    }

    if (options.team === "red" && options.position === RACKET_CENTER) {
      this.kickers.push(
        new Kicker(game, {
          x: 480 + 60,
          y: 40
        }),
        new Kicker(game, {
          x: 480 + 60,
          y: 130 + 20
        }),
        new Kicker(game, {
          x: 480 + 60,
          y: 260
        }),
        new Kicker(game, {
          x: 480 + 60,
          y: 260 + 120
        }),
        new Kicker(game, {
          x: 480 + 60,
          y: 520 - 20
        })
      );
    }
  }

  update() {

    // Left Bewegung
    if (this.keyLeft._justDown) {
      this.kickers.forEach(kicker => {
        kicker.kicker.setTexture('kickerKickA')
        kicker.kicker.setFlipY(false)
        kicker.changeBody()
      })
      if (this.keyLeft.getDuration() > 7) {
        this.kickers.forEach(kicker => {
          kicker.kicker.setTexture('kickerKickB')
          kicker.kicker.setFlipY(false)
        })
      }
    }
    
    if (!this.keyLeft._justDown && !this.keyRight._justDown) {
      this.kickers.forEach(kicker => {
        kicker.kicker.setTexture('kicker')
        kicker.kicker.setFlipY(false)
      })
    }


    // Right Bewegung
    if (this.keyRight._justDown) {
      this.kickers.forEach(kicker => {
          kicker.kicker.setTexture('kickerKickA')
          kicker.kicker.setFlipY(true)
        }
      )

      if (this.keyRight.getDuration() > 7) {
        this.kickers.forEach(kicker => {
          kicker.kicker.setTexture('kickerKickB')
          kicker.kicker.setFlipY(true)
        }
      )
      }
    }
    
    /*if (!this.keyRight._justDown) {
      this.kickers.forEach(kicker => {
        kicker.kicker.setTexture('kicker')
       //kicker.kicker.scaleX *= 1;
      })
    }*/

    let moveBlocked = false;
    if (this.keyUp._justDown) {
      moveBlocked = this.kickers.some(
        kicker => kicker.kicker.body.bounds.min.y <= 9
      );
      if (!moveBlocked) {
        for (let kicker in this.kickers) {
          this.kickers[kicker].kicker.y -= 10;
        }
      }
    } else if (this.keyDown._justDown) {
      moveBlocked = this.kickers.some(kicker => {
        return (
          this.game.scale.height -
            kicker.kicker.y -
            kicker.kicker._displayOriginY <=
          9
        );
      });
      if (!moveBlocked) {
        for (let kicker in this.kickers) {
          this.kickers[kicker].kicker.y += 10;
        }
      }
    }
  }
}

export default KickerRacket;
