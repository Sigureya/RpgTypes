import { describe, expect, test } from "vitest";
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
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import {
  buildPluginCommandPathDictionaries,
  buildPluginParamPathDictionaries,
  buildPluginPathDictionaries,
} from "./createPluginPath";

const commandA: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["PluginA", "Show", "", { message: "hello" }],
};

const commandB: Command_PluginCommandMZ = {
  code: PLUGIN_COMMAND_MZ,
  indent: 0,
  parameters: ["PluginB", "Hidden", "", { value: "skip" }],
};

const createArrayResult = <T>(fileName: string, data: T[]) => ({
  success: true,
  fileName,
  data,
  error: "",
});

const createEvents = (): RawGameEventData => {
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
        list: [],
        span: 0,
      },
    ],
  };
  const map = makeMapData({
    displayName: "Map",
    events: [
      makeMapEvent({
        id: 5,
        name: "MapEvent",
        pages: [
          makeMapEventPage({
            list: [commandB],
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
      validMaps: [
        {
          filename: "Map001",
          editingName: "Map001",
          map,
        },
      ],
      invalidMaps: [],
    },
  };
};

type PluginTextSource = Pick<PluginSchema, "pluginName" | "schema">;

const createPlugins = (): PluginTextSource[] => {
  return [
    {
      pluginName: "PluginA",
      schema: {
        structs: [],
        params: [{ name: "title", attr: { kind: "string", default: "" } }],
        commands: [
          {
            command: "Show",
            args: [{ name: "message", attr: { kind: "string", default: "" } }],
          },
        ],
      },
    },
    {
      pluginName: "PluginB",
      schema: {
        structs: [],
        params: [{ name: "value", attr: { kind: "number", default: 0 } }],
        commands: [
          {
            command: "Hidden",
            args: [{ name: "value", attr: { kind: "number", default: 0 } }],
          },
        ],
      },
    },
  ];
};

describe("createPluginPath", () => {
  test("buildPluginParamPathDictionaries", () => {
    const result = buildPluginParamPathDictionaries(createPlugins());
    expect(result).toEqual([
      {
        pluginName: "PluginA",
        paramsPath: [["title"]],
        commands: [
          {
            commandName: "Show",
            argsPath: [["message"]],
          },
        ],
      },
      {
        pluginName: "PluginB",
        paramsPath: [],
        commands: [],
      },
    ]);
  });

  test("buildPluginCommandPathDictionaries", () => {
    const result = buildPluginCommandPathDictionaries(
      createEvents(),
      createPlugins(),
    );
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      key: "PluginA:Show",
      pluginName: "PluginA",
      commandName: "Show",
      argsPath: [["message"]],
      commands: [commandA],
    });
  });

  test("buildPluginPathDictionaries", () => {
    const result = buildPluginPathDictionaries(createEvents(), createPlugins());

    expect(result.params).toHaveLength(2);
    expect(result.commandPaths).toEqual([
      {
        key: "PluginA:Show",
        pluginName: "PluginA",
        commandName: "Show",
        argsPath: [["message"]],
        commands: [commandA],
      },
    ]);
    expect(result.groupedCommands.get("PluginA:Show")).toEqual([commandA]);
    expect(result.groupedCommands.get("PluginB:Hidden")).toEqual([commandB]);
  });
});
