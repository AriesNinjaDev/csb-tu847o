import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Play from "./Play/Play.js";
import Normal from "./Normal/Normal.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Play: new Play({
    x: 0,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Normal: new Normal({
    x: -110,
    y: 100,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
