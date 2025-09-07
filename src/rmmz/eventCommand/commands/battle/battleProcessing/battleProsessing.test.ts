import { describe, test, expect } from "vitest";
import {
  isCommandBattleProcessingVariable,
  makeCommandBattleProcessingDirect,
  makeCommandBattleProcessingEncount,
  makeCommandBattleProcessingVariable,
} from "./battleProcessing";
import type {
  Command_BattleProcessing,
  Command_BattleProcessing_Variable,
  ParamObject_BattleBase,
  ParamObject_BattleProcessing_Direct,
  ParamObject_BattleProcessing_Variable,
} from "./types";

describe("makeCommandBattleProcessingDirect", () => {
  const params: ParamObject_BattleProcessing_Direct = {
    troopId: 5,
    canEscape: true,
    canLose: false,
  };
  test("creates correct command", () => {
    const command = makeCommandBattleProcessingDirect(params, 2);

    const expected: Command_BattleProcessing = {
      code: 301,
      indent: 2,
      parameters: [0, 5, true, false],
    };

    expect(command).toEqual(expected);
  });
  test("isCommandBattleProcessingVariable returns false", () => {
    const command = makeCommandBattleProcessingDirect(params);
    expect(command).not.toSatisfy(isCommandBattleProcessingVariable);
  });
});

describe("makeCommandBattleProcessingVariable", () => {
  const params: ParamObject_BattleProcessing_Variable = {
    variableId: 10,
    canEscape: false,
    canLose: true,
  };
  test("creates correct command", () => {
    const command = makeCommandBattleProcessingVariable(params, 1);

    const expected: Command_BattleProcessing_Variable = {
      code: 301,
      indent: 1,
      parameters: [1, 10, false, true],
    };

    expect(command).toEqual(expected);
  });
  test("isCommandBattleProcessingVariable returns true", () => {
    const command = makeCommandBattleProcessingVariable(params);
    expect(command).toSatisfy(isCommandBattleProcessingVariable);
  });
});

describe("makeCommandBattleProcessingEncount", () => {
  const params: Partial<ParamObject_BattleBase> = {
    canEscape: true,
    canLose: true,
  };
  test("creates correct command", () => {
    const command = makeCommandBattleProcessingEncount(params, 3);
    const expected: Command_BattleProcessing = {
      code: 301,
      indent: 3,
      parameters: [2, 0, true, true],
    };
    expect(command).toEqual(expected);
  });
  test("isCommandBattleProcessingVariable returns false", () => {
    const command = makeCommandBattleProcessingEncount(params);
    expect(command).not.toSatisfy(isCommandBattleProcessingVariable);
  });
});
