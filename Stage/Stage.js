/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "E512CD96-AAD4-498A-9D56-71CAF7FFE5E0",
        "./Stage/costumes/E512CD96-AAD4-498A-9D56-71CAF7FFE5E0.svg",
        { x: 373.13213213213214, y: 232.5135135135135 }
      ),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 272.5225225225225,
        y: 199.6996996996997
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "E512CD96-AAD4-498A-9D56-71CAF7FFE5E0";
  }

  *whenIReceiveMessage1() {
    this.costume = "backdrop2";
  }
}
