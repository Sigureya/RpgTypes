import { describe, test, expect } from "vitest";
import { CHANGE_WEAPONS } from "@RpgTypes/rmmz/rpg";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";
import type {
  Command_ChangeWeapons2,
  ParamArray_ChangeWeapons2,
  ParamObject_ChangeWeaponsFullset,
  ParamObject_ChangeWeapons,
  ParamObject_ChangeWeaponsV,
} from "./types/weapon";
import {
  fromArrayChangeWeapons,
  makeCommandChangeWeapons,
  makeCommandGainWeapon,
  makeCommandGainWeaponV,
  makeCommandLoseWeapon,
  makeCommandLoseWeaponV,
} from "./weapon";

describe("makeCommandChangeWeapons", () => {
  test("creates correct command object", () => {
    const param: ParamObject_ChangeWeaponsFullset = {
      operation: 0,
      weaponId: 1,
      value: 5,
      operand: 0,
      includesEquip: false,
    };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [0, 1, 5, 0, false],
      indent: 2,
    };
    const result = makeCommandChangeWeapons(param, 2);
    expect(result).toEqual(expected);
  });

  test("default indent is 0", () => {
    const param: ParamObject_ChangeWeaponsFullset = {
      operation: 1,
      weaponId: 2,
      value: 10,
      operand: 1,
      includesEquip: true,
    };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [1, 2, 10, 1, true],
      indent: 0,
    };
    const result = makeCommandChangeWeapons(param);
    expect(result).toEqual(expected);
  });
});

describe("fromArrayChangeWeapons", () => {
  test("converts array to ParamObject_ChangeWeapons2", () => {
    const arr: ParamArray_ChangeWeapons2 = [0, 1, 5, 0, false];
    const expected: ParamObject_ChangeWeaponsFullset = {
      operation: 0,
      weaponId: 1,
      value: 5,
      operand: 0,
      includesEquip: false,
    };
    const result = fromArrayChangeWeapons(arr);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandGainWeapon", () => {
  test("creates command with direct operand", () => {
    const param: ParamObject_ChangeWeapons = { weaponId: 42, value: 5 };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [OPERATION_GAIN, 42, 5, OPERAND_DIRECT, false],
      indent: 0,
    };
    const result = makeCommandGainWeapon(param);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandGainWeaponV", () => {
  test("creates command with variable operand", () => {
    const param: ParamObject_ChangeWeaponsV = { weaponId: 42, variableId: 3 };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [OPERATION_GAIN, 42, 3, OPERAND_VARIABLE, false],
      indent: 1,
    };
    const result = makeCommandGainWeaponV(param, 1);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandLoseWeapon", () => {
  test("creates command with direct operand", () => {
    const param: ParamObject_ChangeWeapons = { weaponId: 42, value: 5 };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [OPERATION_LOSE, 42, 5, OPERAND_DIRECT, false],
      indent: 0,
    };
    const result = makeCommandLoseWeapon(param);
    expect(result).toEqual(expected);
  });
});
describe("makeCommandLoseWeaponV", () => {
  test("creates command with direct operand", () => {
    const param: ParamObject_ChangeWeaponsV = { weaponId: 42, variableId: 5 };
    const expected: Command_ChangeWeapons2 = {
      code: CHANGE_WEAPONS,
      parameters: [OPERATION_LOSE, 42, 5, OPERAND_VARIABLE, false],
      indent: 0,
    };
    const result = makeCommandLoseWeaponV(param);
    expect(result).toEqual(expected);
  });
});
