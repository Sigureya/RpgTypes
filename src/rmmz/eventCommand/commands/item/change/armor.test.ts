import { describe, test, expect } from "vitest";
import { CHANGE_ARMORS } from "@RpgTypes/rmmz/rpg";
import {
  makeCommandGainArmor,
  makeCommandGainArmorV,
  makeCommandLoseArmor,
  makeCommandLoseArmorV,
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
  test("creates command with direct operand", () => {
    const param: ParamObject_ChangeArmors = { armorId: 42, value: 5 };
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
    const param: ParamObject_ChangeArmorsV = { armorId: 42, variableId: 7 };
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
    const param: ParamObject_ChangeArmors = { armorId: 88, value: 1 };
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
    const param: ParamObject_ChangeArmorsV = { armorId: 55, variableId: 3 };
    const expected: Command_ChangeArmors = {
      code: CHANGE_ARMORS,
      parameters: [OPERATION_LOSE, 55, 3, OPERAND_VARIABLE, false],
      indent: 5,
    };
    const result = makeCommandLoseArmorV(param, 5);
    expect(result).toEqual(expected);
  });
});
