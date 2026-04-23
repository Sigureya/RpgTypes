import { test, expect, describe, vi } from "vitest";
import type { Command_PluginCommandMZ, Data_CommonEvent } from "@RpgTypes/rmmz";
import {
  makeCommandSetupChoice,
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandChangeActorProfile,
} from "@RpgTypes/rmmz";
import type {
  ExtractedCommonEventText,
  TextPluginCommandParameter,
} from "./extract/text/eventCommand";
import { extractCommonEventTexts } from "./extractEventText";

const mockPluginCommand1: Command_PluginCommandMZ = {
  code: 357,
  indent: 0,
  parameters: ["PluginCommand", "arg1", "arg2", { key: "value" }],
};

const mockPluginCommand2: Command_PluginCommandMZ = {
  code: 357,
  indent: 0,
  parameters: ["PluginCommand", "argA", "argB", { key: "attr" }],
};

const duumyPluginResult: TextPluginCommandParameter = {
  argName: "arg1",
  argTitle: "Argument 1",
  code: 357,
  paramIndex: 3,
  pluginName: "PluginCommand",
  commandName: "arg1",
  value: "dummy",
};

const fn2 = (): TextPluginCommandParameter[] => {
  return [duumyPluginResult];
};
interface ParameterAdditional extends TextPluginCommandParameter {
  additionalInfo: string;
}

const fn3 = (): ParameterAdditional[] => {
  return [
    {
      ...duumyPluginResult,
      additionalInfo: "additional",
    },
  ];
};

describe("extractCommonEventTexts", () => {
  test("emptyCommonEvents", () => {
    const mock: Data_CommonEvent = {
      id: 1,
      name: "Common Event 1",
      trigger: 0,
      switchId: 0,
      list: [],
    };
    const mockFn = vi.fn(() => []);
    const result: ExtractedCommonEventText = extractCommonEventTexts(
      mock,
      mockFn,
    );
    expect(mockFn).not.toHaveBeenCalled();
    const expected: ExtractedCommonEventText = {
      eventId: 1,
      name: "Common Event 1",
      commands: [],
    };
    expect(result).toEqual(expected);
  });
  describe("commonEventWithPluginCommands", () => {
    const mock: Data_CommonEvent = {
      id: 2,
      name: "Common Event 2",
      trigger: 0,
      switchId: 0,
      list: [mockPluginCommand1, mockPluginCommand2],
    };
    test("commonEventWithPluginCommands", () => {
      const fn = vi.fn(fn2);
      extractCommonEventTexts(mock, fn);
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenNthCalledWith(1, mockPluginCommand1);
      expect(fn).toHaveBeenNthCalledWith(2, mockPluginCommand2);
    });
    test("result of pluginCommandEvaltor is included in commands", () => {
      const result = extractCommonEventTexts(mock, fn2);
      const expected: ExtractedCommonEventText = {
        eventId: 2,
        name: "Common Event 2",
        commands: [duumyPluginResult, duumyPluginResult],
      };
      expect(result).toEqual(expected);
    });
    test("addtianl params", () => {
      type Result = ExtractedCommonEventText<ParameterAdditional>;
      const result: Result = extractCommonEventTexts(mock, fn3);
      const expected: Result = {
        eventId: 2,
        name: "Common Event 2",
        commands: [
          {
            ...duumyPluginResult,
            additionalInfo: "additional",
          },
          {
            ...duumyPluginResult,
            additionalInfo: "additional",
          },
        ],
      };
      expect(result).toEqual(expected);
    });
  });

  describe("commonEventWithTextCommands", () => {
    test("ShowChoice", () => {
      const showChoices = makeCommandSetupChoice({
        choices: ["yes", "no", "cancel"],
      });
      const mock: Data_CommonEvent = {
        id: 3,
        name: "Common Event 3",
        trigger: 0,
        switchId: 0,
        list: [showChoices],
      };
      const mockFn = vi.fn(() => []);
      const result = extractCommonEventTexts(mock, mockFn);
      const expected: ExtractedCommonEventText = {
        eventId: 3,
        name: "Common Event 3",
        commands: [
          { code: showChoices.code, value: "yes", paramIndex: 0 },
          { code: showChoices.code, value: "no", paramIndex: 1 },
          { code: showChoices.code, value: "cancel", paramIndex: 2 },
        ],
      };
      expect(result).toEqual(expected);
      expect(mockFn).not.toHaveBeenCalled();
    });

    test("actor text commands", () => {
      const changeName = makeCommandChangeActorName({
        actorId: 1,
        name: "Hero",
      });
      const changeNickname = makeCommandChangeActorNickName({
        actorId: 1,
        nickname: "Brave",
      });
      const changeProfile = makeCommandChangeActorProfile({
        actorId: 1,
        profile: "A hero from the village.",
      });
      const mock: Data_CommonEvent = {
        id: 4,
        name: "Common Event 4",
        trigger: 0,
        switchId: 0,
        list: [changeName, changeNickname, changeProfile],
      };
      const mockFn = vi.fn(() => []);
      const result = extractCommonEventTexts(mock, mockFn);
      const expected: ExtractedCommonEventText = {
        eventId: 4,
        name: "Common Event 4",
        commands: [
          { code: changeName.code, value: "Hero", paramIndex: 1 },
          { code: changeNickname.code, value: "Brave", paramIndex: 1 },
          {
            code: changeProfile.code,
            value: "A hero from the village.",
            paramIndex: 1,
          },
        ],
      };
      expect(result).toEqual(expected);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });
});
