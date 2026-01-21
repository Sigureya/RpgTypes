import { describe, test, expect } from "vitest";
import type { Data_Animation } from "@RpgTypes/rmmz/rpg";
const validate = require("./animationValidate.cjs");

const isDataAnimation = (data: unknown): data is Data_Animation => {
  return validate(data);
};
describe("isDataAnimation", () => {
  test("Valid animation", () => {
    const animation: Data_Animation = {
      id: 1,
      name: "Fireball",
      effectName: "FireEffect",
      displayType: 0,
      offsetX: 0,
      offsetY: 0,
      scale: 100,
      speed: 100,
      rotation: { x: 0, y: 0, z: 0 },
      soundTimings: [
        {
          frame: 10,
          se: { name: "FireSE", volume: 90, pitch: 100, pan: 0 },
        },
      ],
      flashTimings: [
        {
          frame: 5,
          duration: 10,
          color: [255, 0, 0, 128],
        },
      ],
    };
    expect(animation).toSatisfy(isDataAnimation);
  });
});
