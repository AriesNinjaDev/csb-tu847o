/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Play/costumes/costume1.svg", {
        x: 120,
        y: 40.04943120260015
      })
    ];

    this.sounds = [new Sound("pop", "./Play/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -90);
  }

  *whenthisspriteclicked() {
    this.broadcast("message1");
  }

  *whenKeySpacePressed() {
    this.broadcast("message1");
  }

  *whenIReceiveMessage1() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
  }
}
