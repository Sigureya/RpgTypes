import { describe, test, expect, vi } from "vitest";
import type {
  PluginSchemaArray,
  PluginReplacePathData,
  PrimitiveParam,
  PluginCommandData,
  PluginTextSchema,
  PluginParamsObject,
  PluginParamsRecord,
  PluginCommandPathMap,
  JSONValue,
  PluginManifestData,
} from "@sigureya/rmmz-plugin-schema";
import {
  createPluginParamDictionary,
  filterPluginSchemaByFn,
  filterPluginSchemaStringParams,
  replaceRuntimePluginCommand,
  stringifyDeepJSON,
  stringifyDeepRecord,
  replacePluginParams,
  buildRuntimeData,
  createManifestData,
  createPluginCommandMap,
  createPluginCommandMapFromManifestData,
} from "@sigureya/rmmz-plugin-schema";

const MOCK_OLD_TEXT = "oldTextA";
const MOCK_NEW_TEXT = "newTextA";
const MOCK_NON_REPLACE_TEXT = "nonReplaceText";
const MOCK_IGNOE_TEXT = "42";

const MOCK_OLD_NAME = "oldName";
const MOCK_NEW_NAME = "newName";

const findNewText = (value: string): string | undefined => {
  if (value === MOCK_OLD_TEXT) {
    return MOCK_NEW_TEXT;
  }
  if (value === MOCK_OLD_NAME) {
    return MOCK_NEW_NAME;
  }
  return undefined;
};

const hashFunction = (str: string): string => {
  return `hashed_${str}`;
};

describe("PluiginSchemaArray", () => {
  const schema: PluginSchemaArray = {
    params: [
      { name: "gameTitle", attr: { kind: "string", default: "" } },
      { name: "maxPlayers", attr: { kind: "number", default: 4 } },
      { name: "randomTexts", attr: { kind: "string[]", default: [] } },
      { name: "persons", attr: { kind: "struct[]", struct: "Person" } },
    ],
    structs: [
      {
        struct: "Person",
        params: [
          { name: "name", attr: { kind: "string", default: "" } },
          { name: "age", attr: { kind: "number", default: 0 } },
        ],
      },
      {
        struct: "Vector2",
        params: [
          { name: "x", attr: { kind: "number", default: 0 } },
          { name: "y", attr: { kind: "number", default: 0 } },
        ],
      },
    ],
    commands: [
      {
        command: "cmd",
        args: [
          { name: "value", attr: { kind: "number", default: 0 } },
          { name: "note", attr: { kind: "string", default: "" } },
        ],
      },
      {
        command: "move",
        args: [
          { name: "position", attr: { kind: "struct", struct: "Vector2" } },
        ],
      },
    ],
  };
  test("createPluginParamDictionary", () => {
    const d2: PluginReplacePathData = {
      pluginName: "MockPlugin",
      paramsPath: [
        ["gameTitle"],
        ["maxPlayers"],
        ["randomTexts", "[]"],
        ["persons", "[]", "name"],
        ["persons", "[]", "age"],
      ],
      commands: [
        {
          commandName: "cmd",
          argsPath: [["value"], ["note"]],
        },
        {
          commandName: "move",
          argsPath: [
            ["position", "x"],
            ["position", "y"],
          ],
        },
      ],
    };
    const dictionary2 = createPluginParamDictionary("MockPlugin", schema);
    expect(dictionary2).toEqual(d2);
  });
  describe("filter", () => {
    test("all false", () => {
      const expected: PluginSchemaArray = {
        params: [],
        structs: [],
        commands: [],
      };
      const result = filterPluginSchemaByFn(schema, () => false);
      expect(result).toEqual(expected);
    });
    test("all true", () => {
      const result = filterPluginSchemaByFn(schema, () => true);
      expect(result).toEqual(schema);
    });
    test("number", () => {
      const fn = vi.fn((param: PrimitiveParam) => param.kind === "number");
      const expected: PluginSchemaArray = {
        params: [
          { name: "maxPlayers", attr: { kind: "number", default: 4 } },
          { name: "persons", attr: { kind: "struct[]", struct: "Person" } },
        ],
        structs: [
          {
            struct: "Person",
            params: [{ name: "age", attr: { kind: "number", default: 0 } }],
          },
          {
            struct: "Vector2",
            params: [
              { name: "x", attr: { kind: "number", default: 0 } },
              { name: "y", attr: { kind: "number", default: 0 } },
            ],
          },
        ],
        commands: [
          {
            command: "cmd",
            args: [{ name: "value", attr: { kind: "number", default: 0 } }],
          },
          {
            command: "move",
            args: [
              { name: "position", attr: { kind: "struct", struct: "Vector2" } },
            ],
          },
        ],
      };
      const result = filterPluginSchemaByFn(schema, fn);
      expect(fn).toHaveBeenCalled();
      expect(result).toEqual(expected);
    });
    describe("string", () => {
      const expected: PluginSchemaArray = {
        params: [
          { name: "gameTitle", attr: { kind: "string", default: "" } },
          { name: "randomTexts", attr: { kind: "string[]", default: [] } },
          { name: "persons", attr: { kind: "struct[]", struct: "Person" } },
        ],
        structs: [
          {
            struct: "Person",
            params: [{ name: "name", attr: { kind: "string", default: "" } }],
          },
        ],
        commands: [
          {
            command: "cmd",
            args: [{ name: "note", attr: { kind: "string", default: "" } }],
          },
        ],
      };
      test("filterPluginSchemaStringParams", () => {
        const result = filterPluginSchemaStringParams(schema);
        expect(result).toEqual(expected);
      });
      test("custom fn", () => {
        const fn = vi.fn(
          (param: PrimitiveParam) =>
            param.kind === "string" || param.kind === "string[]",
        );
        const result = filterPluginSchemaByFn(schema, fn);
        expect(fn).toHaveBeenCalled();
        expect(result).toEqual(expected);
      });
    });
  });
});

describe("replace command", () => {
  const command: PluginCommandData = {
    code: 357,
    indent: 0,
    parameters: [
      "MockPlugin",
      "NoPath",
      "",
      { note: MOCK_OLD_TEXT, value: MOCK_IGNOE_TEXT },
    ],
  };
  test("command not found", () => {
    const fn = vi.fn(findNewText);
    const result = replaceRuntimePluginCommand(command, new Map(), fn);
    expect(result).toEqual(command);
    expect(fn).not.toHaveBeenCalled();
  });
  test("command found but no paths", () => {
    const fn = vi.fn(findNewText);
    const result = replaceRuntimePluginCommand(
      command,
      new Map([["MockPlugin:NoPath", { argsPath: [] }]]),
      fn,
    );
    expect(result).toEqual(command);
    expect(fn).not.toHaveBeenCalled();
  });
  test("command found with paths", () => {
    const expectedCommand: PluginCommandData = {
      code: 357,
      indent: 0,
      parameters: [
        "MockPlugin",
        "NoPath",
        "",
        { note: MOCK_NEW_TEXT, value: MOCK_IGNOE_TEXT },
      ],
    };
    const fn = vi.fn(findNewText);
    const result = replaceRuntimePluginCommand(
      command,
      new Map([["MockPlugin:NoPath", { argsPath: [["note"]] }]]),
      fn,
    );
    expect(result).toEqual(expectedCommand);
    expect(fn).toHaveBeenCalledWith(MOCK_OLD_TEXT);
    expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  test("text not found", () => {
    const notFoundCommand: PluginCommandData = {
      code: 357,
      indent: 0,
      parameters: [
        "MockPlugin",
        "PathOk",
        "",
        { note: MOCK_NON_REPLACE_TEXT, value: MOCK_IGNOE_TEXT },
      ],
    };
    const fn = vi.fn(findNewText);
    const result = replaceRuntimePluginCommand(
      notFoundCommand,
      new Map([["MockPlugin:PathOk", { argsPath: [["note"]] }]]),
      fn,
    );
    expect(result).toEqual(notFoundCommand);
    expect(fn).toHaveBeenCalledWith(MOCK_NON_REPLACE_TEXT);
    expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("replace pipeline", () => {
  const replacePathList: PluginReplacePathData = {
    pluginName: "MockPlugin",
    paramsPath: [
      ["gameTitle"],
      ["randomTexts", "[]"],
      ["personParam", "name"],
      ["personList", "[]", "name"],
    ],
    commands: [
      { commandName: "cmd", argsPath: [["note"]] },
      { commandName: "RandomMessage", argsPath: [["message", "[]"]] },
      {
        commandName: "AddPerson",
        argsPath: [["person", "name"]],
      },
    ],
  };
  const schema: PluginTextSchema = {
    params: [
      {
        name: "gameTitle",
        attr: { kind: "string", default: "" },
      },
      {
        name: "randomTexts",
        attr: { kind: "string[]", default: [] },
      },
      {
        name: "personParam",
        attr: { kind: "struct", struct: "Person" },
      },
      {
        name: "personList",
        attr: { kind: "struct[]", struct: "Person" },
      },
    ],
    structs: [
      {
        struct: "Person",
        params: [{ name: "name", attr: { kind: "string", default: "" } }],
      },
    ],
    commands: [
      {
        command: "cmd",
        args: [{ name: "note", attr: { kind: "string", default: "" } }],
      },
      {
        command: "RandomMessage",
        args: [{ name: "message", attr: { kind: "string[]", default: [] } }],
      },
      {
        command: "AddPerson",
        args: [
          {
            name: "person",
            attr: { kind: "struct", struct: "Person" },
          },
        ],
      },
    ],
  };
  test("createPluginParamDictionary", () => {
    const result: PluginReplacePathData = createPluginParamDictionary(
      replacePathList.pluginName,
      schema,
    );
    expect(result).toEqual(replacePathList);
  });
  const plugin: PluginParamsObject = {
    name: "MockPlugin",
    status: true,
    description: "A test plugin",
    parameters: {
      gameTitle: MOCK_OLD_TEXT,
      personParam: {
        name: MOCK_OLD_NAME,
      },
      randomTexts: [MOCK_OLD_TEXT, MOCK_NON_REPLACE_TEXT],
      dummy: MOCK_IGNOE_TEXT,
      personList: [
        {
          name: MOCK_OLD_NAME,
        },
        {
          name: MOCK_NON_REPLACE_TEXT,
        },
      ],
    },
  };
  describe("manifest", () => {
    const manifestParams: Record<string, JSONValue> = {
      gameTitle: hashFunction(MOCK_OLD_TEXT),
      randomTexts: [
        hashFunction(MOCK_OLD_TEXT),
        hashFunction(MOCK_NON_REPLACE_TEXT),
      ],
      dummy: MOCK_IGNOE_TEXT,
      personParam: {
        name: hashFunction(MOCK_OLD_NAME),
      },
      personList: [
        { name: hashFunction(MOCK_OLD_NAME) },
        { name: hashFunction(MOCK_NON_REPLACE_TEXT) },
      ],
    };
    describe("createManifestData", () => {
      test("meta", () => {
        const manifest: PluginManifestData = createManifestData(
          plugin,
          schema,
          hashFunction,
        );
        expect(manifest.pluginName).toEqual(plugin.name);
        expect(manifest.desc).toEqual(plugin.description);
      });
      test("paths", () => {
        const manifest: PluginManifestData = createManifestData(
          plugin,
          schema,
          hashFunction,
        );
        expect(manifest.commands).toEqual(replacePathList.commands);
        expect(manifest.paramsPath).toEqual(replacePathList.paramsPath);
      });
      test("params", () => {
        const fn = vi.fn(hashFunction);
        const manifest: PluginManifestData = createManifestData(
          plugin,
          schema,
          fn,
        );
        expect(manifest.params).toEqual(manifestParams);
        expect(fn).toHaveBeenCalledWith(MOCK_OLD_TEXT);
        expect(fn).toHaveBeenCalledWith(MOCK_NON_REPLACE_TEXT);
        expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
      });
    });
    describe("buildRuntimeData", () => {
      test("basic", () => {
        const result: PluginParamsRecord = buildRuntimeData(
          {
            pluginName: plugin.name,
            desc: plugin.description,
            params: manifestParams,
            paramsPath: replacePathList.paramsPath,
            commands: replacePathList.commands,
          },
          () => "",
        );
        expect(result.name).toEqual(plugin.name);
        expect(result.description).toEqual(plugin.description);
        expect(result.status).toBe(true);
      });
      test("call", () => {
        const fn = vi.fn(() => "");
        buildRuntimeData(
          {
            pluginName: plugin.name,
            desc: plugin.description,
            params: manifestParams,
            paramsPath: replacePathList.paramsPath,
            commands: replacePathList.commands,
          },
          fn,
        );
        expect(fn).toHaveBeenCalledWith(hashFunction(MOCK_OLD_TEXT));
        expect(fn).toHaveBeenCalledWith(hashFunction(MOCK_NON_REPLACE_TEXT));
        expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
      });
      test("params", () => {
        const mockRuntimeText = "runtimeTextA";
        const result: PluginParamsRecord = buildRuntimeData(
          {
            pluginName: plugin.name,
            desc: plugin.description,
            params: manifestParams,
            paramsPath: replacePathList.paramsPath,
            commands: replacePathList.commands,
          },
          () => mockRuntimeText,
        );
        const expectedParams: Record<string, string> = {
          gameTitle: mockRuntimeText,
          randomTexts: JSON.stringify([mockRuntimeText, mockRuntimeText]),
          dummy: MOCK_IGNOE_TEXT,
          personParam: JSON.stringify({
            name: mockRuntimeText,
          }),
          personList: stringifyDeepJSON([
            { name: mockRuntimeText },
            { name: mockRuntimeText },
          ]),
        };
        expect(result.parameters).toEqual(stringifyDeepRecord(expectedParams));
      });
    });
  });
  describe("params", () => {
    test("replacePluginParams", () => {
      const params: PluginParamsRecord["parameters"] = {
        gameTitle: MOCK_NEW_TEXT,
        randomTexts: JSON.stringify([MOCK_NEW_TEXT, MOCK_NON_REPLACE_TEXT]),
        dummy: MOCK_IGNOE_TEXT,
        personParam: JSON.stringify({
          name: MOCK_NEW_NAME,
        }),
        personList: stringifyDeepJSON([
          { name: MOCK_NEW_NAME },
          { name: MOCK_NON_REPLACE_TEXT },
        ]),
      };
      const expectedPlugin: PluginParamsRecord = {
        name: "MockPlugin",
        status: true,
        description: "A test plugin",
        parameters: params,
      };
      const fn = vi.fn(findNewText);
      const result = replacePluginParams(plugin, replacePathList, fn);
      expect(result).toEqual(expectedPlugin);
      expect(fn).toHaveBeenCalledWith(MOCK_OLD_TEXT);
      expect(fn).toHaveBeenCalledWith(MOCK_NON_REPLACE_TEXT);
      expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
    });
  });
  describe("command", () => {
    const pluginCommandMap: PluginCommandPathMap = new Map([
      [
        "MockPlugin:RandomMessage",
        {
          argsPath: [["message", "[]"]],
        },
      ],
      ["MockPlugin:cmd", { argsPath: [["note"]] }],
      ["MockPlugin:AddPerson", { argsPath: [["person", "name"]] }],
    ]);
    test("1:createPluginCommandMap", () => {
      const map: PluginCommandPathMap = createPluginCommandMap([
        replacePathList,
      ]);
      expect(map).toEqual(pluginCommandMap);
    });
    test("1-ex:createPluginCommandMap", () => {
      const map: PluginCommandPathMap = createPluginCommandMapFromManifestData([
        {
          pluginName: plugin.name,
          desc: plugin.description,
          paramsPath: replacePathList.paramsPath,
          commands: replacePathList.commands,
          params: {},
        },
      ]);
      expect(map).toEqual(pluginCommandMap);
    });

    describe("2:replaceRuntimePluginCommand", () => {
      test("string", () => {
        const command: PluginCommandData = {
          code: 357,
          indent: 0,
          parameters: [
            "MockPlugin",
            "cmd",
            "",
            { note: MOCK_OLD_TEXT, value: MOCK_IGNOE_TEXT },
          ],
        };
        const expectedCommand: PluginCommandData = {
          code: 357,
          indent: 0,
          parameters: [
            "MockPlugin",
            "cmd",
            "",
            { note: MOCK_NEW_TEXT, value: MOCK_IGNOE_TEXT },
          ],
        };
        const fn = vi.fn(findNewText);
        const result = replaceRuntimePluginCommand(
          command,
          pluginCommandMap,
          fn,
        );
        expect(result).toEqual(expectedCommand);
        expect(fn).toHaveBeenCalledWith(MOCK_OLD_TEXT);
        expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
      });
      test("string[]", () => {
        const command: PluginCommandData = {
          code: 357,
          indent: 0,
          parameters: [
            "MockPlugin",
            "RandomMessage",
            "",
            {
              message: JSON.stringify([
                MOCK_OLD_TEXT,
                MOCK_IGNOE_TEXT,
                MOCK_NON_REPLACE_TEXT,
              ]),
            },
          ],
        };
        const expectedCommand: PluginCommandData = {
          code: 357,
          indent: 0,
          parameters: [
            "MockPlugin",
            "RandomMessage",
            "",
            {
              message: JSON.stringify([
                MOCK_NEW_TEXT,
                MOCK_IGNOE_TEXT,
                MOCK_NON_REPLACE_TEXT,
              ]),
            },
          ],
        };
        const fn = vi.fn(findNewText);
        const result = replaceRuntimePluginCommand(
          command,
          pluginCommandMap,
          fn,
        );
        expect(result).toEqual(expectedCommand);
        expect(fn).toHaveBeenCalledWith(MOCK_OLD_TEXT);
        expect(fn).not.toHaveBeenCalledWith(MOCK_IGNOE_TEXT);
      });
    });
  });
});
