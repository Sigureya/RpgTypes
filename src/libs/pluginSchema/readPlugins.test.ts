import { vi, describe, test, expect } from "vitest";
import type {
  PluginFileReader,
  ParsedPlugin,
  PluginExtractionHandlers,
  ErrorStruct,
  PluginErrorStruct,
} from "@sigureya/rmmz-plugin-schema";
import { runPluginExtractionPipeline } from "@sigureya/rmmz-plugin-schema";

type ErrorInfo = string;

const makeRecord = (name: string) => ({
  name,
  status: true,
  description: "",
  parameters: {},
});

const makeFs = (): PluginFileReader => ({
  readPluginList: vi.fn(async () => "dummy plugin list"),
  readPluginBody: vi.fn(async (pluginName: string) => pluginName),
});

const makeParsedPlugin = (
  params: ParsedPlugin["params"] = [],
  commands: ParsedPlugin["commands"] = [],
): ParsedPlugin => ({
  locale: "ja",
  meta: {},
  helpLines: [],
  dependencies: {
    base: [],
    orderAfter: [],
    orderBefore: [],
  },
  params,
  commands,
  structs: [],
});

const makeHandlers = (): PluginExtractionHandlers<ErrorInfo> => {
  const commandBuildErrorHandler = {
    commandStructPathError: vi.fn((context, error): ErrorStruct => {
      return {
        code: "struct_path_error",
        source: "createPath",
        pluginName: context.pluginName,
        commandName: context.commandName,
        argName: context.argName,
        path: error.path,
        message: `struct path error: ${error.path}`,
      };
    }),
    commandCompileJSONPathSchemaError: vi.fn((context, error): ErrorStruct => {
      return {
        code: "compile_jsonpath_schema_error",
        source: "compileJSONPathSchema",
        pluginName: context.pluginName,
        commandName: context.commandName,
        argName: context.argName,
        message: String(error),
        info: {
          from: "commandHandler",
          commandName: context.commandName,
        },
      };
    }),
  };

  const paramBuildErrorHandler = {
    paramStructPathError: vi.fn((context, error): PluginErrorStruct => {
      return {
        code: "struct_path_error",
        source: "createPath",
        pluginName: context.pluginName,
        paramName: context.paramName,
        path: error.path,
        message: `struct path error: ${error.path}`,
      };
    }),
    paramCompileJSONPathSchemaError: vi.fn(
      (context, error): PluginErrorStruct => {
        return {
          code: "compile_jsonpath_schema_error",
          source: "compileJSONPathSchema",
          pluginName: context.pluginName,
          paramName: context.paramName,
          message: String(error),
          info: {
            from: "paramHandler",
            paramName: context.paramName,
          },
        };
      },
    ),
  };

  return {
    parser: {
      parsePluginList: vi.fn(),
      parsePluginBody: vi.fn(),
      parseDeepRecord: vi.fn(() => ({})),
    },
    jsonPath: vi.fn((path: string) => ({ query: path }) as never),
    deepJSON: {} as never,
    paramBuild: paramBuildErrorHandler,
    commandBuild: commandBuildErrorHandler,
    paramRead: {
      pluginParamsParseError: vi.fn(() => "param-parse-error"),
    },
    commandExtract: {
      commandNotFoundError: vi.fn(),
      commandParseError: vi.fn(),
      commandArgsError: vi.fn(),
    },
  };
};

describe("runPluginExtractionPipeline", () => {
  test("成功時は status=success でエラーが空", async () => {
    const fs = makeFs();
    const handlers = makeHandlers();
    vi.mocked(handlers.parser.parsePluginList).mockReturnValue({
      plugins: [makeRecord("PluginA")],
      message: "ok",
      invalidPlugins: 0,
      complete: true,
    });
    vi.mocked(handlers.parser.parsePluginBody).mockReturnValue(
      makeParsedPlugin(),
    );

    const result = await runPluginExtractionPipeline(fs, handlers);

    expect(result.status).toBe("success");
    expect(result.plugins).toHaveLength(1);
    expect(result.plugins[0]?.pluginName).toBe("PluginA");
    expect(result.plugins[0]?.errors).toEqual([]);
    expect(result.allErrors).toEqual([]);
    expect(handlers.parser.parseDeepRecord).toHaveBeenCalledTimes(1);
  });

  test("plugin list が不完全でも成功プラグインがあれば status=partial", async () => {
    const fs = makeFs();
    const handlers = makeHandlers();
    vi.mocked(handlers.parser.parsePluginList).mockReturnValue({
      plugins: [makeRecord("PluginA")],
      message: "plugin list partial",
      invalidPlugins: 1,
      complete: false,
    });
    vi.mocked(handlers.parser.parsePluginBody).mockReturnValue(
      makeParsedPlugin(),
    );

    const result = await runPluginExtractionPipeline(fs, handlers);

    expect(result.status).toBe("partial");
    expect(result.plugins).toHaveLength(1);
    expect(result.plugins[0]?.errors).toEqual([]);
    expect(result.allErrors).toHaveLength(1);
    expect(result.allErrors[0]?.phase).toBe("readPluginList");
    expect(result.allErrors[0]?.message).toBe("plugin list partial");
  });

  test("jsonPath 例外時は build エラーになり handler 戻り値が detail.info に入る", async () => {
    const fs = makeFs();
    const handlers = makeHandlers();
    vi.mocked(handlers.parser.parsePluginList).mockReturnValue({
      plugins: [makeRecord("PluginA")],
      message: "ok",
      invalidPlugins: 0,
      complete: true,
    });
    vi.mocked(handlers.parser.parsePluginBody).mockReturnValue(
      makeParsedPlugin(
        [
          {
            name: "textParam",
            attr: {
              kind: "string",
              default: "abc",
            },
          },
        ],
        [
          {
            command: "cmd",
            args: [
              {
                name: "arg1",
                attr: {
                  kind: "string",
                  default: "x",
                },
              },
            ],
          },
        ],
      ),
    );
    const jsonPathError = new Error("jsonPath factory failed");
    vi.mocked(handlers.jsonPath).mockImplementation(() => {
      throw jsonPathError;
    });

    const result = await runPluginExtractionPipeline(fs, handlers);

    expect(result.status).toBe("failure");
    expect(result.plugins).toHaveLength(1);
    expect(result.allErrors.map((e) => e.phase).sort()).toEqual([
      "buildCommand",
      "buildParam",
    ]);
    expect(
      result.allErrors.find((e) => e.phase === "buildParam")?.detail,
    ).toMatchObject({
      info: {
        from: "paramHandler",
        paramName: "textParam",
      },
      message: "Error: jsonPath factory failed",
    });
    expect(
      result.allErrors.find((e) => e.phase === "buildCommand")?.detail,
    ).toMatchObject({
      info: {
        from: "commandHandler",
        commandName: "cmd",
      },
      message: "Error: jsonPath factory failed",
    });
  });

  test("parseDeepRecord 例外時は parseParam で errorInfo に handler 戻り値が入る", async () => {
    const fs = makeFs();
    const handlers = makeHandlers();
    vi.mocked(handlers.parser.parsePluginList).mockReturnValue({
      plugins: [makeRecord("PluginA")],
      message: "ok",
      invalidPlugins: 0,
      complete: true,
    });
    vi.mocked(handlers.parser.parsePluginBody).mockReturnValue(
      makeParsedPlugin([
        {
          name: "textParam",
          attr: {
            kind: "string",
            default: "abc",
          },
        },
      ]),
    );
    vi.mocked(handlers.paramRead.pluginParamsParseError).mockReturnValue(
      "handled-parse-error",
    );
    vi.mocked(handlers.parser.parseDeepRecord).mockImplementation(() => {
      throw new Error("parseDeepRecord failed");
    });

    const result = await runPluginExtractionPipeline(fs, handlers);

    expect(result.status).toBe("failure");
    expect(result.plugins).toHaveLength(1);
    expect(result.plugins[0]?.errors[0]?.phase).toBe("parseParam");
    expect(result.plugins[0]?.errors[0]?.errorInfo).toBe("handled-parse-error");
    expect(result.allErrors[0]?.phase).toBe("parseParam");
    expect(result.allErrors[0]?.errorInfo).toBe("handled-parse-error");
  });
});
