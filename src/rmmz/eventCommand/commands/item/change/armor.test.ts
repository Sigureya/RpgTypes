import { describe, test, expect } from "vitest";
import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import {
  fromArrayChangeArmors,
  makeCommandChangeArmors,
  makeCommandGainArmor,
  makeCommandGainArmorV,
  makeCommandLoseArmor,
  makeCommandLoseArmorV,
} from "./armor";
import type {
  Command_ChangeArmors,
  ParamArray_ChangeArmors,
  ParamObject_ChangeArmors,
  ParamObject_GainArmor,
  ParamObject_GainArmorV,
} from "./types/armor";
import {
  OPERATION_LOSE,
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
} from "./types/constants";

describe("makeCommandChangeArmors", () => {
  test("creates correct command object", () => {
    const param: ParamObject_ChangeArmors = {
      operation: 0,
      armorId: 1,
      value: 5,
      operand: 0,
      includesEquip: false,
    };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [0, 1, 5, 0, false],
      indent: 2,
    };
    const result = makeCommandChangeArmors(param, 2);
    expect(result).toEqual(expected);
  });

  test("default indent is 0", () => {
    const param: ParamObject_ChangeArmors = {
      operation: 1,
      armorId: 2,
      value: 10,
      operand: 1,
      includesEquip: true,
    };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [1, 2, 10, 1, true],
      indent: 3,
    };
    const result = makeCommandChangeArmors(param, 3);
    expect(result).toEqual(expected);
  });
});

describe("fromArrayChangeArmors", () => {
  test("converts array to ParamObject_ChangeArmors2", () => {
    const arr: ParamArray_ChangeArmors = [1, 2, 3, 0, true];
    const expected: ParamObject_ChangeArmors = {
      operation: 1,
      armorId: 2,
      value: 3,
      operand: 0,
      includesEquip: true,
    };
    const result = fromArrayChangeArmors(arr);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandGainArmor", () => {
  test("creates command with direct operand", () => {
    const param: ParamObject_GainArmor = { armorId: 42, value: 5 };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [OPERATION_GAIN, 42, 5, OPERAND_DIRECT, false],
      indent: 0,
    };
    const result = makeCommandGainArmor(param);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandGainArmorV", () => {
  test("creates command with variable operand", () => {
    const param: ParamObject_GainArmorV = { armorId: 42, variableId: 7 };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [OPERATION_GAIN, 42, 7, OPERAND_VARIABLE, false],
      indent: 0,
    };
    const result = makeCommandGainArmorV(param);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandLoseArmor", () => {
  test("creates command with direct operand", () => {
    const param: ParamObject_GainArmor = { armorId: 88, value: 1 };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [OPERATION_LOSE, 88, 1, OPERAND_DIRECT, false],
      indent: 0,
    };
    const result = makeCommandLoseArmor(param);
    expect(result).toEqual(expected);
  });
});

describe("makeCommandLoseArmorV", () => {
  test("creates command with variable operand", () => {
    const param: ParamObject_GainArmorV = { armorId: 55, variableId: 3 };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [OPERATION_LOSE, 55, 3, OPERAND_VARIABLE, false],
      indent: 5,
    };
    const result = makeCommandLoseArmorV(param, 5);
    expect(result).toEqual(expected);
  });
});
