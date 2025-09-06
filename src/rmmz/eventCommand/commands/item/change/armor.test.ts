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
    parameters: [OPERATION_GAIN, 42, 5, OPERAND_DIRECT, false],
    indent: 0,
  };
  test("creates command with direct operand", () => {
    const result = makeCommandGainArmor(param);
    expect(result).toEqual(expected);
  });
  test("returns false for isUsingVariableCommandChangingItems", () => {
    const result = makeCommandGainArmor(param);
    expect(result).toSatisfy(isUsingVaribleCommandChangingItems);
  });
});

describe("makeCommandGainArmorByVariable", () => {
  const param: ParamObject_ChangeArmorsV = { armorId: 42, variableId: 7 };
  const expected: Command_ChangeArmors = {
    code: CHANGE_ARMORS,
    parameters: [OPERATION_GAIN, 42, 7, OPERAND_VARIABLE, false],
    indent: 0,
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
    parameters: [OPERATION_LOSE, 88, 1, OPERAND_DIRECT, false],
    indent: 0,
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
    parameters: [OPERATION_LOSE, 55, 3, OPERAND_VARIABLE, false],
    indent: 5,
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
