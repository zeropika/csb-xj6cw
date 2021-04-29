import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _1 from "./_1/_1.js";
import _2 from "./_2/_2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _1: new _1({
    x: -197.90909090909076,
    y: -78,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: true,
    layerOrder: 2
  }),
  _2: new _2({
    x: -4,
    y: 8,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
