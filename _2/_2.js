/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_2/costumes/コスチューム1.svg", {
        x: 245.9999999999999,
        y: -110.125
      }),
      new Costume("コスチューム2", "./_2/costumes/コスチューム2.svg", {
        x: 246,
        y: -51.32517474067376
      }),
      new Costume("コスチューム3", "./_2/costumes/コスチューム3.svg", {
        x: 246,
        y: -51.3251747406737
      }),
      new Costume("コスチューム4", "./_2/costumes/コスチューム4.svg", {
        x: 246,
        y: -51.325184999999976
      }),
      new Costume("コスチューム5", "./_2/costumes/コスチューム5.svg", {
        x: 246,
        y: -51.325184999999976
      }),
      new Costume("コスチューム6", "./_2/costumes/コスチューム6.svg", {
        x: 246,
        y: -51.325175
      }),
      new Costume("コスチューム7", "./_2/costumes/コスチューム7.svg", {
        x: 245.9999999999999,
        y: 88.1875
      }),
      new Costume("コスチューム8", "./_2/costumes/コスチューム8.svg", {
        x: 245.9999999999999,
        y: 88.1875
      }),
      new Costume("コスチューム9", "./_2/costumes/コスチューム9.svg", {
        x: 297.87014,
        y: 59.393405
      }),
      new Costume("コスチューム10", "./_2/costumes/コスチューム10.svg", {
        x: 297.87014,
        y: 59.393395
      }),
      new Costume("コスチューム11", "./_2/costumes/コスチューム11.svg", {
        x: 245.9999999999999,
        y: 130.4375
      })
    ];

    this.sounds = [
      new Sound("ポップ", "./_2/sounds/ポップ.wav"),
      new Sound(
        "Seijaku_Ni_Tsutsumarete-1(Slow)",
        "./_2/sounds/Seijaku_Ni_Tsutsumarete-1(Slow).mp3"
      ),
      new Sound("Onmtp-Negative08-1", "./_2/sounds/Onmtp-Negative08-1.mp3")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "次のステージへ" },
        this.whenIReceive
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceive() {
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked() {
    this.goto(-4, 8);
    this.visible = true;
    this.costume = "コスチューム1";
  }
}
