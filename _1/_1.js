/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_1/costumes/コスチューム1.svg", {
        x: 14.757495000000006,
        y: 43.328485
      })
    ];

    this.sounds = [
      new Sound("ポップ", "./_1/sounds/ポップ.wav"),
      new Sound("可愛いジャンプ", "./_1/sounds/可愛いジャンプ.mp3"),
      new Sound("Onmtp-Negative08-1", "./_1/sounds/Onmtp-Negative08-1.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *_() {
    this.stage.vars.y += -1;
    this.y += 10;
    if (
      this.touching(Color.rgb(157, 227, 54)) ||
      this.touching(Color.rgb(226, 145, 54))
    ) {
      this.y += 0 - this.stage.vars.y;
    }
    this.y += -2;
    if (this.keyPressed("up arrow") || (0 < this.mouse.y && this.mouse.down)) {
      yield* this.playSoundUntilDone("可愛いジャンプ");
    }
    this.y += 1;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-206, -86);
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    this.direction = 90;
    while (true) {
      if (
        this.keyPressed("right arrow") ||
        (this.mouse.down && 0 < this.mouse.x)
      ) {
        this.direction = 90;
        this.stage.vars.x += 1;
      }
      if (
        this.keyPressed("left arrow") ||
        (this.mouse.down && this.mouse.x < 0)
      ) {
        this.direction = -90;
        this.stage.vars.x += -1;
      }
      this.stage.vars.x = this.stage.vars.x * 0.89;
      this.x += this.stage.vars.x;
      if (
        this.touching(Color.rgb(157, 227, 54)) ||
        this.touching(Color.rgb(226, 145, 54))
      ) {
        this.y += 1;
        if (
          this.touching(Color.rgb(157, 227, 54)) ||
          this.touching(Color.rgb(226, 145, 54))
        ) {
          this.y += 1;
          if (
            this.touching(Color.rgb(157, 227, 54)) ||
            this.touching(Color.rgb(226, 145, 54))
          ) {
            this.y += 1;
            if (
              this.touching(Color.rgb(157, 227, 54)) ||
              this.touching(Color.rgb(226, 145, 54))
            ) {
              this.y += 1;
              if (
                this.touching(Color.rgb(157, 227, 54)) ||
                this.touching(Color.rgb(226, 145, 54))
              ) {
                this.y += 1;
                if (
                  this.touching(Color.rgb(157, 227, 54)) ||
                  this.touching(Color.rgb(226, 145, 54))
                ) {
                  this.y += 1;
                  if (
                    this.touching(Color.rgb(157, 227, 54)) ||
                    this.touching(Color.rgb(226, 145, 54))
                  ) {
                    this.y += 1;
                    if (
                      this.touching(Color.rgb(157, 227, 54)) ||
                      this.touching(Color.rgb(226, 145, 54))
                    ) {
                      this.y += 1;
                      if (
                        this.touching(Color.rgb(157, 227, 54)) ||
                        this.touching(Color.rgb(226, 145, 54))
                      ) {
                        this.x += this.stage.vars.x * -1;
                        this.y += -7;
                        if (
                          this.keyPressed("up arrow") ||
                          (this.mouse.down && 0 < this.mouse.y)
                        ) {
                          if (this.stage.vars.x > 0) {
                            yield* this.startSound("可愛いジャンプ");
                            this.stage.vars.x = -10;
                          } else {
                            yield* this.startSound("可愛いジャンプ");
                            this.stage.vars.x = 10;
                          }
                          this.stage.vars.y = 15;
                        } else {
                          yield* this._();
                          this.stage.vars.x = 0;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.y += -1;
      if (
        this.touching(Color.rgb(157, 227, 54)) ||
        this.touching(Color.rgb(226, 145, 54))
      ) {
        if (
          this.keyPressed("up arrow") ||
          (this.mouse.down && 0 < this.mouse.y)
        ) {
          this.stage.vars.y = 15;
          yield* this.startSound("可愛いジャンプ");
        }
      }
      this.y += 1;
      this.stage.vars.y += -1;
      this.y += this.stage.vars.y;
      if (
        this.touching(Color.rgb(157, 227, 54)) ||
        this.touching(Color.rgb(226, 145, 54))
      ) {
        this.y += this.stage.vars.y * -1;
        this.stage.vars.y = 0;
      }
      if (200 < this.x) {
        this.goto(-206, -86);
        this.broadcast("次のステージへ");
      }
      if (this.touching(Color.rgb(113, 113, 113))) {
        yield* this.startSound("Onmtp-Negative08-1");
        this.goto(-206, -86);
      }
      yield;
    }
  }
}
