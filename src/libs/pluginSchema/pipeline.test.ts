// 意図的に単一ファイルにまとめている。

import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import type {
  PluginParamsRecord,
  MessageOfparsePluginParamRecordEx,
  ParsedPlugin,
  PluginParamEx,
  NumberParam,
  StringParam,
  PluginSchemaArray,
  ClassifiedPluginParams,
  DeepJSONParserHandlers,
  CommandExtractError,
  PluginCommandExtractErrorHandlers,
  PluginErrorStruct,
  PluginParamReadErrorHandlers,
  CommandBuildErrorHandlers,
  ErrorStruct,
  ResultOfparsePluginParamRecord,
  PluginReadResult,
  PluginTokens,
  PluginValuesExtractorBundle,
  CommandArgExtractors,
  CommandMapKey,
  PluginCommandData,
  ParamReadResult,
  CommandExtractResult,
  ParamBuildErrorHandlers,
} from "@sigureya/rmmz-plugin-schema";
import {
  readPluginInfosSafe,
  readAllPluginBodies,
  compilePluginAsArraySchema,
  classifyPluginParams,
  parseDeepRecord,
  stringifyDeepRecord,
  buildPluginValueExtractor,
  extractPluginParamFromRecord,
  extractArgsFromPluginCommand,
} from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS } from "jsonpath-js";

// これらの処理はパイプラインの最初から最後までを担う
interface Person {
  name: string;
  age: number;
}

const mockStructDefault = {
  mockText: "mock text",
  mockNum: 0,
  mockBool: false,
};

const pluginsRecord: PluginParamsRecord[] = [
  {
    name: "TestPlugin",
    status: true,
    description: "for unit test",
    parameters: {},
  },
];
const msg1: MessageOfparsePluginParamRecordEx = {
  readErrorPluginsJS: "Failed to read plugins.js",
  readErrorPluginBody: "Failed to read plugin file",
  parseError: "Failed to parse plugin",
  notArray: "Plugin format is invalid: not an array",
  partialSuccess: "Some plugins failed to read or parse",
  success: "All plugins read and parsed successfully",
};

const paresdPlugin: ParsedPlugin = {
  locale: "ja",
  meta: {},
  params: [
    { name: "textParam", attr: { kind: "string", default: "" } },
    { name: "numParam", attr: { kind: "number", default: "0" } },
    { name: "boolParam", attr: { kind: "boolean", default: "false" } },
  ],
  commands: [
    {
      command: "cmd",
      desc: "test desc",
      text: "mock text",
      args: [
        {
          name: "value",
          attr: { kind: "number", default: "0" },
        },
        {
          name: "note",
          attr: { kind: "string", default: "" },
        },
      ],
    },
  ],
  structs: [
    {
      name: "Person",
      params: [
        { name: "name", attr: { kind: "string", default: "Alice" } },
        { name: "age", attr: { kind: "number", default: "17" } },
      ],
    },
  ],
  helpLines: ["abc", "xyz"],
  dependencies: {
    base: [],
    orderAfter: [],
    orderBefore: [],
  },
};

const valueArg: PluginParamEx<NumberParam> = {
  name: "value",
  attr: {
    kind: "number",
    default: 0,
  },
};

const noteArg: PluginParamEx<StringParam> = {
  name: "note",
  attr: {
    kind: "string",
    default: "",
  },
};

const schema: PluginSchemaArray = {
  commands: [
    {
      command: "cmd",
      desc: "test desc",
      text: "mock text",
      args: [valueArg, noteArg],
    },
  ],
  params: [
    { attr: { default: "", kind: "string" }, name: "textParam" },
    { attr: { default: 0, kind: "number" }, name: "numParam" },
    { attr: { default: false, kind: "boolean" }, name: "boolParam" },
  ],
  structs: [
    {
      struct: "Person",
      params: [
        { attr: { default: "Alice", kind: "string" }, name: "name" },
        { attr: { default: 17, kind: "number" }, name: "age" },
      ],
    },
  ],
};
const classify: ClassifiedPluginParams = {
  scalars: [
    { attr: { default: "", kind: "string" }, name: "textParam" },
    { attr: { default: 0, kind: "number" }, name: "numParam" },
    { attr: { default: false, kind: "boolean" }, name: "boolParam" },
  ],
  scalarArrays: [],
  structArrays: [],
  structs: [],
};

const createDeepJSONParseMock = (): MockedObject<DeepJSONParserHandlers> => {
  return {
    parseObject: vi.fn<DeepJSONParserHandlers["parseObject"]>(() => {
      return {
        errors: [],
        value: mockStructDefault,
      };
    }),
    parseObjectArray: vi.fn<DeepJSONParserHandlers["parseObjectArray"]>(() => {
      return {
        errors: [],
        value: [mockStructDefault],
      };
    }),
    parseStringArray: vi.fn<DeepJSONParserHandlers["parseStringArray"]>(() => {
      return {
        errors: [],
        value: ["mock string"],
      };
    }),
  };
};

const createCommandExtractMessageHandlers = (
  commandError: CommandExtractError,
): MockedObject<PluginCommandExtractErrorHandlers> => {
  return {
    commandNotFoundError: vi.fn<
      PluginCommandExtractErrorHandlers["commandNotFoundError"]
    >(() => commandError),
    commandParseError: vi.fn<
      PluginCommandExtractErrorHandlers["commandParseError"]
    >(() => commandError),
    commandArgsError: vi.fn<
      PluginCommandExtractErrorHandlers["commandArgsError"]
    >(() => commandError),
  };
};
type ParamErrorHandles = ParamBuildErrorHandlers<PluginErrorStruct>;
const mockParamCompileJSONPathSchemaError: PluginErrorStruct = {
  paramName: "",
  message: "compile error",
  pluginName: "",
  code: "compile_jsonpath_schema_error",
  source: "compileJSONPathSchema",
};

const mockParamStructPathError: PluginErrorStruct = {
  paramName: "",
  message: "struct path error",
  pluginName: "",
  source: "createPath",
  code: "struct_path_error",
};

const createParamErrorHandlers = (): MockedObject<ParamErrorHandles> => {
  return {
    paramCompileJSONPathSchemaError: vi.fn<
      ParamErrorHandles["paramCompileJSONPathSchemaError"]
    >(() => mockParamCompileJSONPathSchemaError),
    paramStructPathError: vi.fn<ParamErrorHandles["paramStructPathError"]>(
      () => mockParamStructPathError,
    ),
  };
};

interface EEEEO {}

const createParamReadErrorHandlers = (
  errorInfo: EEEEO,
): MockedObject<PluginParamReadErrorHandlers<EEEEO>> => {
  type ParseErrorHandler = PluginParamReadErrorHandlers<EEEEO>;
  return {
    pluginParamsParseError: vi.fn<ParseErrorHandler["pluginParamsParseError"]>(
      () => errorInfo,
    ),
  };
};

type JSONPathErrorHandles = CommandBuildErrorHandlers<ErrorStruct>;

const mockCompileJSONPathSchemaError: ErrorStruct = {
  argName: "",
  commandName: "",
  message: "compile error",
  pluginName: "",
  code: "compile_jsonpath_schema_error",
  source: "compileJSONPathSchema",
};

const mockStructPathError: ErrorStruct = {
  argName: "",
  commandName: "",
  message: "struct path error",
  pluginName: "",
  source: "createPath",
  code: "struct_path_error",
};

const createJSONPathErrorHandlers = (): MockedObject<JSONPathErrorHandles> => {
  return {
    commandCompileJSONPathSchemaError: vi.fn<
      JSONPathErrorHandles["commandCompileJSONPathSchemaError"]
    >(() => mockCompileJSONPathSchemaError),
    commandStructPathError: vi.fn<
      JSONPathErrorHandles["commandStructPathError"]
    >(() => mockStructPathError),
  };
};

describe("File IO", () => {
  const mockSrc = "mock plugin list source";
  const context: ResultOfparsePluginParamRecord = {
    plugins: pluginsRecord,
    complete: true,
    invalidPlugins: 0,
    message: msg1.success,
  };
  describe("readPluginInfosSafe", () => {
    test("normal", async () => {
      const readPluginInfos = vi
        .fn<() => Promise<string>>()
        .mockResolvedValue(mockSrc);

      const parseFn = vi.fn<
        (
          source: string,
          msg: MessageOfparsePluginParamRecordEx,
        ) => ResultOfparsePluginParamRecord
      >((src: string, b): ResultOfparsePluginParamRecord => {
        expect(src).toBe(mockSrc);
        return {
          plugins: pluginsRecord,
          complete: true,
          invalidPlugins: 0,
          message: b.success,
        };
      });
      const result = await readPluginInfosSafe(msg1, readPluginInfos, parseFn);
      expect(readPluginInfos).toHaveBeenCalledWith();
      expect(readPluginInfos).toHaveBeenCalledOnce();
      expect(parseFn).toHaveBeenCalledOnce();
      expect(parseFn).toHaveBeenCalledWith(mockSrc, msg1);
      expect(result).toEqual(context);
    });
  });
  describe("readAllPluginBodies", () => {
    const mockBodySrc = "mock plugin body source";
    describe("normal", () => {
      test("result", async () => {
        const readPluginFn = () => Promise.resolve(mockBodySrc);
        const parsePluginBodyFn = () => paresdPlugin;

        const expected: PluginReadResult[] = context.plugins.map(
          (p): PluginReadResult => ({
            plugin: paresdPlugin,
            error: "",
            record: p,
          }),
        );
        const result: PluginReadResult[] = await Promise.all(
          readAllPluginBodies(context, msg1, readPluginFn, parsePluginBodyFn),
        );
        expect(result).toEqual(expected);
      });
      test("calles", async () => {
        const readPluginFn = vi
          .fn<(pluginName: string) => Promise<string>>()
          .mockResolvedValue(mockBodySrc);
        const parsePluginBodyFn = vi.fn<(src: string) => ParsedPlugin>(() => {
          return paresdPlugin;
        });
        const result = await Promise.all(
          readAllPluginBodies(context, msg1, readPluginFn, parsePluginBodyFn),
        );
        expect(result.length).toBe(context.plugins.length);
        expect(readPluginFn).toHaveBeenCalledTimes(context.plugins.length);
        expect(parsePluginBodyFn).toHaveBeenCalledTimes(context.plugins.length);
        context.plugins.forEach((plugin: PluginParamsRecord, index) => {
          expect(readPluginFn).toHaveBeenCalledWith(plugin.name);
          expect(parsePluginBodyFn).toHaveBeenNthCalledWith(
            index + 1,
            mockBodySrc,
          );
        });
      });
    });
  });
});

describe("rmmz", () => {
  describe("compilePluginAsArraySchema", () => {
    test("normal", () => {
      const deepJSONParseMock = createDeepJSONParseMock();
      const result: PluginSchemaArray = compilePluginAsArraySchema(
        paresdPlugin,
        deepJSONParseMock,
      );

      expect(result).toEqual(schema);
      expect(deepJSONParseMock.parseObject).not.toHaveBeenCalled();
      expect(deepJSONParseMock.parseObjectArray).not.toHaveBeenCalled();
      expect(deepJSONParseMock.parseStringArray).not.toHaveBeenCalled();
    });
    describe("struct", () => {
      const tokens: PluginTokens = {
        commands: [
          {
            command: "add",
            args: [
              { name: "personArg", attr: { kind: "struct", struct: "Person" } },
            ],
          },
        ],
        params: [
          { name: "personParam", attr: { kind: "struct", struct: "Person" } },
        ],
        structs: [
          {
            name: "Person",
            params: [
              { name: "name", attr: { kind: "string", default: "Alice" } },
              { name: "age", attr: { kind: "number", default: "19" } },
            ],
          },
        ],
      };
      test("result", () => {
        const deepJSONParseMock = createDeepJSONParseMock();
        const expected: PluginSchemaArray = {
          commands: [
            {
              command: "add",
              args: [
                {
                  name: "personArg",
                  attr: {
                    kind: "struct",
                    struct: "Person",
                    default: mockStructDefault,
                  },
                },
              ],
            },
          ],
          params: [
            {
              name: "personParam",
              attr: {
                default: mockStructDefault,
                kind: "struct",
                struct: "Person",
              },
            },
          ],
          structs: [
            {
              struct: "Person",
              params: [
                { attr: { default: "Alice", kind: "string" }, name: "name" },
                { attr: { default: 19, kind: "number" }, name: "age" },
              ],
            },
          ],
        };
        const result = compilePluginAsArraySchema(tokens, deepJSONParseMock);
        expect(result).toEqual(expected);
      });
    });
  });
  describe("classifyPluginParams", () => {
    test("normal", () => {
      const result: ClassifiedPluginParams = classifyPluginParams(
        schema.params,
      );
      expect(result).toEqual(classify);
    });
  });
  describe("deepJSON", () => {
    describe("simple type", () => {
      const deepJSON: Record<keyof Person, string> = {
        name: "bob",
        age: "30",
      };
      const normalJSON: Person = {
        name: "bob",
        age: 30,
      };

      test("parse", () => {
        const result = parseDeepRecord(deepJSON);
        expect(result).toEqual(normalJSON);
      });
      test("stringify", () => {
        const result = stringifyDeepRecord(normalJSON);
        expect(result).toEqual(deepJSON);
      });
    });
  });
});

const paramExtractor: PluginValuesExtractorBundle[] = [
  {
    rootCategory: "param",
    rootName: "plugin",
    structArrays: [],
    structs: [],
    top: {
      arrays: [],
      bundleName: "string",
      scalar: {
        jsonPathJS: new JSONPathJS(`$["textParam"]`),
        record: {
          textParam: {
            default: "",
            kind: "string",
          },
        },
      },
    },
  },
  {
    rootCategory: "param",
    rootName: "plugin",
    structArrays: [],
    structs: [],
    top: {
      arrays: [],
      bundleName: "number",
      scalar: {
        jsonPathJS: new JSONPathJS(`$["numParam"]`),
        record: {
          numParam: {
            default: 0,
            kind: "number",
          },
        },
      },
    },
  },
  {
    rootCategory: "param",
    rootName: "plugin",
    structArrays: [],
    structs: [],
    top: {
      arrays: [],
      bundleName: "boolean",
      scalar: {
        jsonPathJS: new JSONPathJS(`$["boolParam"]`),
        record: {
          boolParam: {
            default: false,
            kind: "boolean",
          },
        },
      },
    },
  },
];

const cmdExtractor: CommandArgExtractors = {
  commandName: "cmd",
  desc: "test desc",
  pluginName: "MockPlugin",
  text: "mock text",
  extractors: [
    {
      rootCategory: "args",
      rootName: "cmd",
      structArrays: [],
      structs: [],
      top: {
        bundleName: "number",
        arrays: [],
        scalar: {
          jsonPathJS: new JSONPathJS(`$["value"]`),
          record: {
            value: valueArg.attr,
          },
        },
      },
    },
    {
      rootName: "cmd",
      rootCategory: "args",
      structArrays: [],
      structs: [],
      top: {
        arrays: [],
        bundleName: "string",
        scalar: {
          jsonPathJS: new JSONPathJS(`$["note"]`),
          record: {
            note: noteArg.attr,
          },
        },
      },
    },
  ],
};

const createCommandMap = (): ReadonlyMap<CommandMapKey, CommandArgExtractors> =>
  new Map<CommandMapKey, CommandArgExtractors>([
    ["MockPlugin:cmd", cmdExtractor],
  ]);

const pluginCommand: PluginCommandData = {
  code: 357,
  parameters: ["MockPlugin", "cmd", "test desc", { value: "42", note: "ok" }],
};

describe("JSON Path", () => {
  describe("buildPluginValueExtractorV8", () => {
    test("normal - param", () => {
      const commandHandlers = createJSONPathErrorHandlers();
      const paramHandlers = createParamErrorHandlers();
      const result = buildPluginValueExtractor(
        "MockPlugin",
        schema,
        (path) => new JSONPathJS(path),
        paramHandlers,
        commandHandlers,
      );
      expect(
        paramHandlers.paramCompileJSONPathSchemaError,
      ).not.toHaveBeenCalled();
      expect(paramHandlers.paramStructPathError).not.toHaveBeenCalled();
      expect(result.pluginName).toBe("MockPlugin");
      expect(result.params.extractors).toEqual(paramExtractor);
    });
    test("normal - command", () => {
      const commandHandlers = createJSONPathErrorHandlers();
      const paramHandlers = createParamErrorHandlers();
      const result = buildPluginValueExtractor(
        "MockPlugin",
        schema,
        (path) => new JSONPathJS(path),
        paramHandlers,
        commandHandlers,
      );
      expect(
        commandHandlers.commandCompileJSONPathSchemaError,
      ).not.toHaveBeenCalled();
      expect(commandHandlers.commandStructPathError).not.toHaveBeenCalled();
      expect(result.pluginName).toBe("MockPlugin");
      expect(result.commands.extractors[0]).toEqual(cmdExtractor);
    });
  });

  describe("createCommandMap", () => {
    test("parse error", () => {
      const errors = new Error("parse error");
      const parseFn = vi.fn(() => {
        throw errors;
      });
      const errorInfo = { code: "E_PARSE", message: "invalid json" };
      const handlers = createParamReadErrorHandlers(errorInfo);
      const plugin: PluginParamsRecord = {
        name: "MockPlugin",
        parameters: {
          textParam: "mock text",
          numParam: "42",
          boolParam: "true",
        },
        description: "",
        status: true,
      };

      const expected: ParamReadResult<EEEEO> = {
        errorKind: "parseError",
        errorInfo: errorInfo,
        pluginName: "MockPlugin",
        params: [],
      };

      const result = extractPluginParamFromRecord(
        plugin,
        paramExtractor,
        parseFn,
        handlers,
      );
      expect(parseFn).toHaveBeenCalledOnce();
      expect(parseFn).toHaveBeenCalledWith(plugin.parameters);
      expect(handlers.pluginParamsParseError).toHaveBeenCalledOnce();
      expect(handlers.pluginParamsParseError).toHaveBeenCalledWith(
        {
          pluginName: "MockPlugin",
          record: plugin,
        },
        errors,
      );
      expect(result).toEqual(expected);
    });
  });

  describe("extractPluginParamFromRecord", () => {
    describe("normal", () => {
      const plugin: PluginParamsRecord = {
        name: "MockPlugin",
        parameters: {
          textParam: "mock text",
          numParam: "42",
          boolParam: "true",
        },
        description: "",
        status: true,
      };
      const paramValue = {
        textParam: "mock text",
        numParam: 42,
        boolParam: true,
      };
      describe("deepJSON", () => {
        test("pares", () => {
          const result = parseDeepRecord(plugin.parameters);
          expect(result).toEqual(paramValue);
        });
        test("stringify", () => {
          const result = stringifyDeepRecord(paramValue);
          expect(result).toEqual(plugin.parameters);
        });
      });
      test("normal", () => {
        const handlers = createParamReadErrorHandlers({});
        const parseFn = vi.fn(() => paramValue);

        const expected: ParamReadResult<EEEEO> = {
          pluginName: "MockPlugin",
          errorKind: "",
          errorInfo: null,
          params: [
            {
              param: {
                name: "textParam",
                attr: { default: "", kind: "string" },
              },
              value: "mock text",
              structName: "",
              rootName: "plugin",
              rootType: "param",
            },
            {
              param: { name: "numParam", attr: { default: 0, kind: "number" } },
              value: 42,
              structName: "",
              rootName: "plugin",
              rootType: "param",
            },
            {
              param: {
                name: "boolParam",
                attr: { default: false, kind: "boolean" },
              },
              value: true,
              structName: "",
              rootName: "plugin",
              rootType: "param",
            },
          ],
        };
        const result = extractPluginParamFromRecord(
          plugin,
          paramExtractor,
          parseFn,
          handlers,
        );
        expect(parseFn).toHaveBeenCalledOnce();
        expect(parseFn).toHaveBeenCalledWith(plugin.parameters);
        expect(handlers.pluginParamsParseError).not.toHaveBeenCalled();
        expect(result).toEqual(expected);
      });
    });
    test("parse error", () => {
      const record: PluginParamsRecord = {
        name: "BrokenPlugin",
        status: false,
        description: "parse fail case",
        parameters: {
          broken: "{",
        },
      };

      const errorINfo = { code: "E_PARSE", message: "invalid json" };

      const handlers = createParamReadErrorHandlers(errorINfo);
      const error = new Error("parse error");
      const parseFn = vi.fn(() => {
        throw error;
      });

      const expected: ParamReadResult<EEEEO> = {
        pluginName: "BrokenPlugin",
        errorKind: "parseError",
        errorInfo: errorINfo,
        params: [],
      };

      const result = extractPluginParamFromRecord(
        record,
        paramExtractor,
        parseFn,
        handlers,
      );
      expect(parseFn).toHaveBeenCalledOnce();
      expect(parseFn).toHaveBeenCalledWith(record.parameters);
      expect(handlers.pluginParamsParseError).toHaveBeenCalledOnce();
      expect(handlers.pluginParamsParseError).toHaveBeenCalledWith(
        {
          pluginName: "BrokenPlugin",
          record,
        },
        error,
      );
      expect(result).toEqual(expected);
    });
  });
  describe("extractArgsFromPluginCommandHandled", () => {
    test("Mapに登録されてない場合", () => {
      const expected: Required<CommandExtractResult> = {
        args: [],
        commandName: "cmd",
        pluginName: "MockPlugin",
        error: {
          message: "error msg",
          source: "source eee",
        },
      };
      const parseFn = vi.fn();
      const handlers = createCommandExtractMessageHandlers(expected.error);

      const result: CommandExtractResult = extractArgsFromPluginCommand(
        pluginCommand,
        new Map(),
        handlers,
        parseFn,
      );
      expect(handlers.commandNotFoundError).toHaveBeenCalledWith({
        command: pluginCommand,
        pluginName: "MockPlugin",
        commandName: "cmd",
      });
      expect(handlers.commandParseError).not.toHaveBeenCalled();
      expect(handlers.commandArgsError).not.toHaveBeenCalled();
      expect(parseFn).not.toHaveBeenCalled();
      expect(result).toEqual(expected);
    });
    test("Mapに登録されてる場合", () => {
      const value = { value: 42, note: "ok" };
      const handlers = createCommandExtractMessageHandlers({
        message: "normal",
        source: "normal",
      });
      const parseFn = vi.fn(() => value);

      const expected: CommandExtractResult = {
        pluginName: "MockPlugin",
        commandName: "cmd",
        args: [
          {
            rootType: "args",
            rootName: "cmd",
            structName: "",
            param: valueArg,
            value: 42,
          },
          {
            rootType: "args",
            rootName: "cmd",
            structName: "",
            param: noteArg,
            value: "ok",
          },
        ],
      };
      const result: CommandExtractResult = extractArgsFromPluginCommand(
        pluginCommand,
        createCommandMap(),
        handlers,
        parseFn,
      );
      expect(parseFn).toHaveBeenCalledWith(pluginCommand.parameters[3]);
      expect(handlers.commandNotFoundError).not.toHaveBeenCalled();
      expect(handlers.commandParseError).not.toHaveBeenCalled();
      expect(handlers.commandArgsError).not.toHaveBeenCalled();
      expect(result).toEqual(expected);
    });
    test("JSONのパースに失敗する場合", () => {
      const parseError = new Error("parse error");
      const errorMessage: CommandExtractError = {
        message: "xxx",
        source: "commandParseError",
      };
      const handlers = createCommandExtractMessageHandlers(errorMessage);
      const parseFn = vi.fn(() => {
        throw parseError;
      });
      const expected: CommandExtractResult = {
        pluginName: "MockPlugin",
        commandName: "cmd",
        args: [],
        error: errorMessage,
      };
      const result: CommandExtractResult = extractArgsFromPluginCommand(
        pluginCommand,
        createCommandMap(),
        handlers,
        parseFn,
      );
      expect(parseFn).toHaveBeenCalledWith(pluginCommand.parameters[3]);
      expect(handlers.commandNotFoundError).not.toHaveBeenCalled();
      expect(handlers.commandArgsError).not.toHaveBeenCalled();
      expect(handlers.commandParseError).toHaveBeenCalledOnce();
      expect(handlers.commandParseError).toHaveBeenCalledWith(
        {
          command: pluginCommand,
          pluginName: "MockPlugin",
          commandName: "cmd",
        },
        parseError,
      );
      expect(result).toEqual(expected);
    });
  });
});
