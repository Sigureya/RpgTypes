import { test, expect, describe, vi } from "vitest";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs/eventCommand";
import type { Command_PluginCommandMZ, Data_Troop } from "@RpgTypes/rmmz";
import { makeTroopEventConditions } from "@RpgTypes/rmmz";
import type {
  ExtractedBattleEventText,
  PluginCommandMzParameter,
} from "./extract/text/eventCommand";
import { extractBattleEventTexts } from "./extractEventText";

const mockPluginCommand1: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["PluginCommand", "arg1", "arg2", { key: "value1" }],
};

const mockPluginCommand2: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["PluginCommand", "argA", "argB", { key: "value2" }],
};

const dummyPluginResult: PluginCommandMzParameter = {
  argName: "arg1",
  argTitle: "Argument 1",
  code: PLUGIN_COMMAND_MZ,
  paramIndex: 3,
  pluginName: "PluginCommand",
  commandName: "arg1",
  value: "dummy",
};

const pluginEvaluator = (): PluginCommandMzParameter[] => {
  return [dummyPluginResult];
};

interface ParameterAdditional extends PluginCommandMzParameter {
  additionalInfo: string;
}

const pluginEvaluatorWithAdditional = (): ParameterAdditional[] => {
  return [
    {
      ...dummyPluginResult,
      additionalInfo: "additional",
    },
  ];
};

describe("extractBattleEventTexts", () => {
  test("emptyTroops", () => {
    const mockTroops: Data_Troop = {
      id: 1,
      name: "Troop 1",
      members: [],
      pages: [],
    };

    const mockFn = vi.fn(() => []);
    const result = extractBattleEventTexts(mockTroops, mockFn);
    expect(mockFn).not.toHaveBeenCalled();
    const expected: ExtractedBattleEventText[] = [];
    expect(result).toEqual(expected);
  });

  describe("troopWithPluginCommands", () => {
    const conditons = makeTroopEventConditions({});
    const mockTroops: Data_Troop = {
      id: 2,
      name: "Troop 2",
      members: [],
      pages: [
        { conditions: conditons, list: [mockPluginCommand1], span: 0 },
        { conditions: conditons, list: [mockPluginCommand2], span: 1 },
      ],
    };

    test("calls evaluator for each page command", () => {
      const mockFn = vi.fn(pluginEvaluator);
      extractBattleEventTexts(mockTroops, mockFn);
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenNthCalledWith(1, mockPluginCommand1);
      expect(mockFn).toHaveBeenNthCalledWith(2, mockPluginCommand2);
    });

    test("includes evaluator results with eventId and pageIndex", () => {
      const result = extractBattleEventTexts(mockTroops, pluginEvaluator);
      const expected: ExtractedBattleEventText[] = [
        {
          eventId: 2,
          pageIndex: 0,
          commands: [dummyPluginResult],
        },
        {
          eventId: 2,
          pageIndex: 1,
          commands: [dummyPluginResult],
        },
      ];
      expect(result).toEqual(expected);
    });

    test("preserves additional plugin parameter fields", () => {
      type Result = ExtractedBattleEventText<ParameterAdditional>[];
      const result: Result = extractBattleEventTexts(
        mockTroops,
        pluginEvaluatorWithAdditional,
      );
      const expected: Result = [
        {
          eventId: 2,
          pageIndex: 0,
          commands: [
            {
              ...dummyPluginResult,
              additionalInfo: "additional",
            },
          ],
        },
        {
          eventId: 2,
          pageIndex: 1,
          commands: [
            {
              ...dummyPluginResult,
              additionalInfo: "additional",
            },
          ],
        },
      ];
      expect(result).toEqual(expected);
    });
  });
});
