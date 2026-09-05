import { describe, expect, test } from "vitest";
import {
  initialRotation,
  setRotationSpeed,
  updateRotation,
} from "./rotate";
import type { Picture_Rotation } from "./types";

describe("rotation", () => {
  test("初期状態は止まっている", () => {
    const expected: Picture_Rotation = { angle: 0, speed: 0 };
    const result: Picture_Rotation = initialRotation();
    expect(result).toEqual(expected);
  });

  test("速度だけを差し替える", () => {
    const before: Picture_Rotation = { angle: 30, speed: 0 };
    const expected: Picture_Rotation = { angle: 30, speed: 6 };
    const result: Picture_Rotation = setRotationSpeed(before, 6);
    expect(result).toEqual(expected);
  });

  test("速度が 0 なら角度は動かない", () => {
    const stopped: Picture_Rotation = { angle: 30, speed: 0 };
    expect(updateRotation(stopped)).toBe(stopped);
  });

  test("1 フレームで速度の半分だけ回る", () => {
    const expected: Picture_Rotation = { angle: 3, speed: 6 };
    const result: Picture_Rotation = updateRotation({ angle: 0, speed: 6 });
    expect(result).toEqual(expected);
  });

  test("負の速度なら逆に回る", () => {
    const expected: Picture_Rotation = { angle: -3, speed: -6 };
    const result: Picture_Rotation = updateRotation({ angle: 0, speed: -6 });
    expect(result).toEqual(expected);
  });
});
