import { describe, test, expect } from "vitest";
import {
  CHANGE_ARMORS,
  CHANGE_WEAPONS,
  CHANGE_ITEMS,
  Operation_PlusMinus,
} from "@RpgTypes/rmmz/rpg";
import type {
  Command_ChangeItems2,
  Command_ChangeWeapons2,
  Command_ChangeArmors2,
  ParamObject_ChangeItems2,
  ParamObject_ChangeWeapons2,
  ParamObject_ChangeArmors2,
  ParamArray_ChangeItems2,
  ParamArray_ChangeWeapons2,
  ParamArray_ChangeArmors2,
} from "./types";
import {
  fromArrayChangeArmors,
  fromArrayChangeItems,
  fromArrayChangeWeapons,
  makeCommandChangeArmors,
  makeCommandChangeItems,
  makeCommandChangeWeapons,
} from "./make";

describe("makeCommandChangeItems", () => {
  test("creates correct command object", () => {
    const param: ParamObject_ChangeItems2 = {
      operation: 0,
      itemId: 1,
      value: 5,
    };
    const result = makeCommandChangeItems(param, 2);
    expect(result).toEqual({
      code: CHANGE_ITEMS,
      parameters: [0, 1, 5],
      indent: 2,
    });
  });

  test("default indent is 0", () => {
    const param: ParamObject_ChangeItems2 = {
      operation: 1,
      itemId: 2,
      value: 10,
    };
    const result = makeCommandChangeItems(param);
    expect(result.indent).toBe(0);
  });
});

describe("makeCommandChangeWeapons", () => {
  test("creates correct command object", () => {
    const param: ParamObject_ChangeWeapons2 = {
      operation: 1,
      weaponId: 3,
      value: 7,
    };
    const result = makeCommandChangeWeapons(param, 1);
    expect(result).toEqual({
      code: CHANGE_WEAPONS,
      parameters: [1, 3, 7],
      indent: 1,
    });
  });
});

describe("makeCommandChangeArmors", () => {
  test("creates correct command object", () => {
    const param: ParamObject_ChangeArmors2 = {
      operation: 0,
      armorId: 4,
      value: 2,
    };
    const result = makeCommandChangeArmors(param, 3);
    expect(result).toEqual({
      code: CHANGE_ARMORS,
      parameters: [0, 4, 2],
      indent: 3,
    });
  });
});

describe("fromArrayChangeItems", () => {
  test("converts array to object", () => {
    const arr: ParamArray_ChangeItems2 = [0, 5, 20];
    const result = fromArrayChangeItems(arr);
    expect(result).toEqual({
      operation: 0,
      itemId: 5,
      value: 20,
    });
  });
});

describe("fromArrayChangeWeapons", () => {
  test("converts array to object", () => {
    const arr: ParamArray_ChangeWeapons2 = [0, 6, 15];
    const result = fromArrayChangeWeapons(arr);
    expect(result).toEqual({
      operation: 0,
      weaponId: 6,
      value: 15,
    });
  });
});

describe("fromArrayChangeArmors", () => {
  test("converts array to object", () => {
    const arr: ParamArray_ChangeArmors2 = [1, 7, 8];
    const result = fromArrayChangeArmors(arr);
    expect(result).toEqual({
      operation: 1,
      armorId: 7,
      value: 8,
    });
  });
});
