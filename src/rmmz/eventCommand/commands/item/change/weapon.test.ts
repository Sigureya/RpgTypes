import { describe, test, expect } from "vitest";
import { CHANGE_WEAPONS } from "@RpgTypes/rmmz/rpg";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";
import type {
  Command_ChangeWeapons,
  ParamArray_ChangeWeapons,
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
  isCommandChangeWeaponsUsingVariable,
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
    const expected: Command_ChangeWeapons = {
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
    const expected: Command_ChangeWeapons = {
      code: CHANGE_WEAPONS,
      parameters: [1, 2, 10, 1, true],
      indent: 0,
    };
    const result = makeCommandChangeWeapons(param);
    expect(result).toEqual(expected);
  });
});

describe("fromArrayChangeWeapons", () => {
  const arr: ParamArray_ChangeWeapons = [0, 1, 5, 0, false];
  const expected: ParamObject_ChangeWeaponsFullset = {
    operation: 0,
    weaponId: 1,
    value: 5,
    operand: 0,
    includesEquip: false,
  };
  test("converts array to ParamObject_ChangeWeapons2", () => {
    const result = fromArrayChangeWeapons(arr);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandGainWeapon", () => {
  const param: ParamObject_ChangeWeapons = { weaponId: 42, value: 5 };
  const expected: Command_ChangeWeapons = {
    code: CHANGE_WEAPONS,
    parameters: [OPERATION_GAIN, 42, 5, OPERAND_DIRECT, false],
    indent: 0,
  };
  test("creates command with direct operand", () => {
    const result = makeCommandGainWeapon(param);
    expect(result).toEqual(expected);
  });
  test("", () => {
    const result = makeCommandGainWeapon(param);
    expect(result).not.toSatisfy(isCommandChangeWeaponsUsingVariable);
  });
});

describe("makeCommandGainWeaponV", () => {
  const param: ParamObject_ChangeWeaponsV = { weaponId: 42, variableId: 3 };
  const expected: Command_ChangeWeapons = {
    code: CHANGE_WEAPONS,
    parameters: [OPERATION_GAIN, 42, 3, OPERAND_VARIABLE, false],
    indent: 1,
  };
  test("creates command with variable operand", () => {
    const result = makeCommandGainWeaponV(param, 1);
    expect(result).toEqual(expected);
  });
  test("", () => {
    const result = makeCommandGainWeaponV(param, 1);
    expect(result).toSatisfy(isCommandChangeWeaponsUsingVariable);
  });
});

describe("makeCommandLoseWeapon", () => {
  const param: ParamObject_ChangeWeapons = { weaponId: 42, value: 5 };
  const expected: Command_ChangeWeapons = {
    code: CHANGE_WEAPONS,
    parameters: [OPERATION_LOSE, 42, 5, OPERAND_DIRECT, false],
    indent: 0,
  };

  test("creates command with direct operand", () => {
    const result = makeCommandLoseWeapon(param);
    expect(result).toEqual(expected);
  });
  test("", () => {
    const result = makeCommandLoseWeapon(param);
    expect(result).not.toSatisfy(isCommandChangeWeaponsUsingVariable);
  });
});
describe("makeCommandLoseWeaponV", () => {
  const param: ParamObject_ChangeWeaponsV = { weaponId: 42, variableId: 5 };
  const expected: Command_ChangeWeapons = {
    code: CHANGE_WEAPONS,
    parameters: [OPERATION_LOSE, 42, 5, OPERAND_VARIABLE, false],
    indent: 0,
  };
  test("creates command with direct operand", () => {
    const result = makeCommandLoseWeaponV(param);
    expect(result).toEqual(expected);
  });
  test("", () => {
    const result = makeCommandLoseWeaponV(param);
    expect(result).toSatisfy(isCommandChangeWeaponsUsingVariable);
  });
});
