/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Normal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Normal/costumes/costume1.svg", {
        x: 113,
        y: 39.49999620260016
      })
    ];

    this.sounds = [new Sound("pop", "./Normal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
    this.size = 70;
    this.goto(-110, 100);
    /* TODO: Implement looks_gotofrontback */ null;
  }

  *whenthisspriteclicked() {}

  *whenIReceiveMessage1() {
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += -10;
      yield;
    }
  }
}
