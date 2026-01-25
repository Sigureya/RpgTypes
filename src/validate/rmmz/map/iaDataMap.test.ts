import { describe, test, expect } from "vitest";
import type { Data_Map } from "@RpgTypes/rmmz/rpg";
const validate = require("./mapValidate.cjs");
const isDataMap = (data: unknown): data is Data_Map => {
  return validate(data);
};

describe("isDataMap", () => {
  test("valid Data_Map", () => {
    const mockMap: Data_Map = {
      autoplayBgm: false,
      bgm: { name: "", volume: 90, pitch: 100, pan: 0 },
      battleback1Name: "",
      battleback2Name: "",
      encounterList: [
        {
          weight: 5,
          regionSet: [1, 2, 3],
          troopId: 1,
        },
      ],
      events: [null],
      height: 10,
      note: "",
      parallaxLoopX: false,
      parallaxLoopY: false,
      parallaxName: "",
      parallaxSx: 0,
      parallaxSy: 0,
      specifyBattleback: false,
      scrollType: 0,
      tilesetId: 1,
      width: 10,
      x: 0,
      y: 0,
      autoplayBgs: false,
      bgs: { name: "", volume: 90, pitch: 100, pan: 0 },
      data: new Array(100).fill(0),
      displayName: "",
      disableDashing: false,
      encounterStep: 30,
      parallaxShow: false,
    };
    expect(mockMap).toSatisfy(isDataMap);
  });
});
