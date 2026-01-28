import { describe, test, expect } from "vitest";
import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import {
  makeCommandGainArmor,
  makeCommandGainArmorByVariable,
  makeCommandLoseArmor,
  makeCommandLoseArmorByVariable,
  isUsingVaribleCommandChangingItems,
} from "./armor";
import type {
  Command_ChangeArmors,
  ParamObject_ChangeArmors,
  ParamObject_ChangeArmorsV,
} from "./types/armor";
import {
  OPERATION_LOSE,
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
} from "./types/constants";

describe("makeCommandGainArmor", () => {
  const param: ParamObject_ChangeArmors = { armorId: 42, value: 5 };
  const expected: Command_ChangeArmors = {
    code: CHANGE_ARMORS,
    indent: 0,
    parameters: [42, OPERATION_GAIN, OPERAND_DIRECT, 5, false],
  };
  test("creates command with direct operand", () => {
    const result = makeCommandGainArmor(param);
    expect(result).toEqual(expected);
  });
  test("returns false for isUsingVariableCommandChangingItems", () => {
    const result = makeCommandGainArmor(param);
    expect(result).not.toSatisfy(isUsingVaribleCommandChangingItems);
  });
});

describe("makeCommandGainArmorByVariable", () => {
  const param: ParamObject_ChangeArmorsV = { armorId: 42, variableId: 7 };
  const expected: Command_ChangeArmors = {
    code: CHANGE_ARMORS,
    indent: 0,
    parameters: [42, OPERATION_GAIN, OPERAND_VARIABLE, 7, false],
  };
  test("creates command with variable operand", () => {
    const result = makeCommandGainArmorByVariable(param);
    expect(result).toEqual(expected);
  });
  test("returns true for isUsingVariableCommandChangingItems", () => {
    const result = makeCommandGainArmorByVariable(param);
    expect(result).toSatisfy(isUsingVaribleCommandChangingItems);
  });
});

describe("makeCommandLoseArmor", () => {
  const param: ParamObject_ChangeArmors = { armorId: 88, value: 1 };
  const expected: Command_ChangeArmors = {
    code: CHANGE_ARMORS,
    indent: 0,
    parameters: [88, OPERATION_LOSE, OPERAND_DIRECT, 1, false],
  };
  test("creates command with direct operand", () => {
    const result = makeCommandLoseArmor(param);
    expect(result).toEqual(expected);
  });
  test("returns false for isUsingVariableCommandChangingItems", () => {
    const result = makeCommandLoseArmor(param);
    expect(result).not.toSatisfy(isUsingVaribleCommandChangingItems);
  });
});

describe("makeCommandLoseArmorV", () => {
  const param: ParamObject_ChangeArmorsV = { armorId: 55, variableId: 3 };
  const expected: Command_ChangeArmors = {
    code: CHANGE_ARMORS,
    indent: 5,
    parameters: [55, OPERATION_LOSE, OPERAND_VARIABLE, 3, false],
  };
  test("creates command with variable operand", () => {
    const result = makeCommandLoseArmorByVariable(param, 5);
    expect(result).toEqual(expected);
  });
  test("returns true for isUsingVariableCommandChangingItems", () => {
    const result = makeCommandLoseArmorByVariable(param, 5);
    expect(result).toSatisfy(isUsingVaribleCommandChangingItems);
  });
});
