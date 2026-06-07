import { describe, expect, test, vi } from "vitest";
import type { RawGameEventData } from "@RpgTypes/fileio";
import { PLUGIN_COMMAND_MZ } from "@RpgTypes/libs/eventCommand";
import type {
  Command_PluginCommandMZ,
  Data_CommonEvent,
  Data_Troop,
} from "@RpgTypes/rmmz";
import {
  makeMapData,
  makeMapEvent,
  makeMapEventPage,
  makeTroopEventConditions,
} from "@RpgTypes/rmmz";
import type {
  AnyStringParam,
  PluginSchemaArray,
  PrimitiveParam,
} from "@sigureya/rmmz-plugin-schema";
import {
  collectPluginCommands,
  createPluginCommandKey,
  createPluginCommandKeyFromCommand,
  createPluginTextPathDictionaries,
  createPluginTextPathDictionary,
  filterPluginTextSchema,
  groupPluginCommandsByKey,
  isTextAnyParamStrict,
  isTextTargetParam,
} from "./pluginMap";

const createArrayResult = <T>(fileName: string, data: T[]) => ({
  success: true,
  fileName,
  data,
  error: "",
});

const commandA: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["PluginA", "show", "", { text: "hello" }],
};

const commandB: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 1,
  parameters: ["PluginA", "show", "", { text: "world" }],
};

const commandC: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 2,
  parameters: ["PluginB", "note", "", { message: "memo" }],
};

const createRawEvents = (): RawGameEventData => {
  const common: Data_CommonEvent = {
    id: 1,
    name: "Common",
    trigger: 0,
    switchId: 0,
    list: [commandA],
  };
  const troop: Data_Troop = {
    id: 2,
    name: "Troop",
    members: [],
    pages: [
      {
        conditions: makeTroopEventConditions({}),
        list: [commandB],
        span: 0,
      },
    ],
  };
  const map = makeMapData({
    displayName: "Map",
    events: [
      makeMapEvent({
        id: 7,
        name: "MapEvent",
        pages: [
          makeMapEventPage({
            list: [commandC],
          }),
        ],
      }),
    ],
  });
  return {
    commonEvents: createArrayResult("CommonEvents.json", [common]),
    troops: createArrayResult("Troops.json", [troop]),
    mapFiles: {
      info: { success: true },
      invalidMaps: [],
      validMaps: [
        {
          filename: "Map001",
          editingName: "Map001",
          map,
        },
      ],
    },
  };
};

describe("pluginMap", () => {
  test("createPluginCommandKey", () => {
    const result = createPluginCommandKey("MyPlugin", "myCommand");
    expect(result).toBe("MyPlugin:myCommand");
  });

  test("createPluginCommandKeyFromCommand", () => {
    const result = createPluginCommandKeyFromCommand(commandA);
    expect(result).toBe("PluginA:show");
  });

  test("collectPluginCommands: common/troop/map から順に収集する", () => {
    const result = collectPluginCommands(createRawEvents());
    expect(result).toEqual([commandA, commandB, commandC]);
  });

  test("groupPluginCommandsByKey: キーごとに配列化される", () => {
    const result = groupPluginCommandsByKey([commandA, commandB, commandC]);
    expect(Array.from(result.keys())).toEqual(["PluginA:show", "PluginB:note"]);
    expect(result.get("PluginA:show")).toEqual([commandA, commandB]);
    expect(result.get("PluginB:note")).toEqual([commandC]);
  });

  test("isTextAnyParamStrict: テキストは true / 数式は false", () => {
    const textParam: AnyStringParam = { kind: "any", default: "Hello world" };
    const formulaParam: AnyStringParam = { kind: "any", default: "1+2*3" };

    expect(isTextAnyParamStrict(textParam, "memo")).toBe(true);
    expect(isTextAnyParamStrict(formulaParam, "memo")).toBe(false);
  });

  test("isTextTargetParam: any では predicate の戻り値を使う", () => {
    const anyParam: PrimitiveParam = { kind: "any", default: "value" };
    const predicate = vi.fn(() => false);

    const result = isTextTargetParam(anyParam, "dynamic", predicate);

    expect(predicate).toHaveBeenCalledWith(anyParam, "dynamic");
    expect(result).toBe(false);
  });

  describe("schema filtering and dictionary", () => {
    const schema: PluginSchemaArray = {
      commands: [
        {
          command: "Show",
          args: [
            { name: "message", attr: { kind: "string", default: "" } },
            { name: "rawAny", attr: { kind: "any", default: "1+2*3" } },
            { name: "count", attr: { kind: "number", default: 0 } },
          ],
        },
      ],
      params: [
        { name: "title", attr: { kind: "string", default: "" } },
        { name: "memoAny", attr: { kind: "any", default: "ignored" } },
        { name: "limit", attr: { kind: "number", default: 10 } },
      ],
      structs: [],
    };

    const anyNameOnly = (_param: AnyStringParam, name: string): boolean => {
      return name === "memoAny";
    };

    test("filterPluginTextSchema: 無関係 param/arg を除外する", () => {
      const result = filterPluginTextSchema(schema, anyNameOnly);
      expect(result.params).toEqual([
        { name: "title", attr: { kind: "string", default: "" } },
        { name: "memoAny", attr: { kind: "any", default: "ignored" } },
      ]);
      expect(result.commands).toEqual([
        {
          command: "Show",
          args: [{ name: "message", attr: { kind: "string", default: "" } }],
        },
      ]);
      expect(result.structs).toEqual([]);
    });

    test("createPluginTextPathDictionary: フィルタ後 schema から辞書を作る", () => {
      const result = createPluginTextPathDictionary(
        "PluginX",
        schema,
        anyNameOnly,
      );
      expect(result).toEqual({
        pluginName: "PluginX",
        paramsPath: [["title"], ["memoAny"]],
        commands: [
          {
            commandName: "Show",
            argsPath: [["message"]],
          },
        ],
      });
    });

    test("createPluginTextPathDictionaries: 配列入力をそのまま配列出力へ変換", () => {
      const result = createPluginTextPathDictionaries(
        [
          { pluginName: "PluginX", schema },
          { pluginName: "PluginY", schema },
        ],
        anyNameOnly,
      );
      expect(result).toHaveLength(2);
      expect(result[0]?.pluginName).toBe("PluginX");
      expect(result[1]?.pluginName).toBe("PluginY");
      expect(result[0]?.paramsPath).toEqual([["title"], ["memoAny"]]);
      expect(result[1]?.commands).toEqual([
        {
          commandName: "Show",
          argsPath: [["message"]],
        },
      ]);
    });
  });
});
