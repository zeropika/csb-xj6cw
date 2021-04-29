/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("背景1", "./Stage/costumes/背景1.svg", {
        x: 264,
        y: 188.1875
      }),
      new Costume(
        "4F077F8B-C50A-43A7-9388-42C504904053",
        "./Stage/costumes/4F077F8B-C50A-43A7-9388-42C504904053.svg",
        { x: 239.56885747522927, y: 178.24685549549554 }
      )
    ];

    this.sounds = [
      new Sound("ポップ", "./Stage/sounds/ポップ.wav"),
      new Sound(
        "Seijaku_Ni_Tsutsumarete-1(Slow)",
        "./Stage/sounds/Seijaku_Ni_Tsutsumarete-1(Slow).mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars._ = 0;
    this.vars.x = 9.652790721924025e-23;
    this.vars.y = 0;
    this.vars.X = 0;
    this.vars.Y = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "背景1";
    while (true) {
      yield* this.playSoundUntilDone("Seijaku_Ni_Tsutsumarete-1(Slow)");
      yield;
    }
  }
}
