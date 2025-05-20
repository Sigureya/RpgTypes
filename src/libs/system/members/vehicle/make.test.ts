import { describe, test, expect } from "vitest";
import { makeVehicleData } from "./make";

describe("makeVehicleData", () => {
  test("", () => {
    const result = makeVehicleData(undefined);
    expect(result).toMatchObject({
      characterIndex: 0,
      characterName: "",
      startMapId: 0,
      startX: 0,
      startY: 0,
    });
  });
  test("empty", () => {
    const result = makeVehicleData();
    expect(result.characterIndex).toBe(0);
    expect(result.characterName).toBe("");
    expect(result.startMapId).toBe(0);
    expect(result.startX).toBe(0);
    expect(result.startY).toBe(0);
  });

  test("partial data", () => {
    const result = makeVehicleData({
      characterIndex: 1,
      characterName: "Test",
      startMapId: 2,
      startX: 3,
      startY: 4,
      bgm: {
        name: "bgmbgm",
        pan: 0,
        pitch: 100,
        volume: 90,
      },
    });
    expect(result.characterIndex).toBe(1);
    expect(result.characterName).toBe("Test");
    expect(result.startMapId).toBe(2);
    expect(result.startX).toBe(3);
    expect(result.startY).toBe(4);
    expect(result.bgm).toEqual({
      name: "bgmbgm",
      pan: 0,
      pitch: 100,
      volume: 90,
    });
  });
});
