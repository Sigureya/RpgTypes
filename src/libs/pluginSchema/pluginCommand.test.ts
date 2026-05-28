import { describe, test, expect, vi } from "vitest";
import type {
  PluginCommandExtractErrorHandlers,
  CommandArgExtractors,
  PluginCommandExtractorSource,
  PluginCommandData,
} from "@sigureya/rmmz-plugin-schema";
import {
  createCommandExtractorMapFromPipeline,
  extractPluginCommandWithExtractor,
} from "@sigureya/rmmz-plugin-schema";
import { JSONPathJS } from "jsonpath-js";

const createCommandHandlers = (): PluginCommandExtractErrorHandlers => {
  return {
    commandNotFoundError: () => ({
      message: "not found",
      source: "commandNotFoundError",
    }),
    commandParseError: () => ({
      message: "parse error",
      source: "commandParseError",
    }),
    commandArgsError: () => ({
      message: "args error",
      source: "commandArgsError",
    }),
  };
};

const createExtractor = (): CommandArgExtractors => {
  return {
    pluginName: "MockPlugin",
    commandName: "cmd",
    desc: "",
    text: "",
    extractors: [
      {
        rootCategory: "args",
        rootName: "cmd",
        structs: [],
        structArrays: [],
        top: {
          bundleName: "number",
          arrays: [],
          scalar: {
            jsonPathJS: new JSONPathJS('$["value"]'),
            record: {
              value: {
                kind: "number",
                default: 0,
              },
            },
          },
        },
      },
      {
        rootCategory: "args",
        rootName: "cmd",
        structs: [],
        structArrays: [],
        top: {
          bundleName: "string",
          arrays: [],
          scalar: {
            jsonPathJS: new JSONPathJS('$["note"]'),
            record: {
              note: {
                kind: "string",
                default: "",
              },
            },
          },
        },
      },
    ],
  };
};

const createPipelineResult = (): PluginCommandExtractorSource => {
  return {
    plugins: [
      {
        commandExtractors: [createExtractor()],
      },
    ],
  };
};

describe("pluginCommand", () => {
  test("createCommandExtractorMapFromPipeline", () => {
    const map = createCommandExtractorMapFromPipeline(createPipelineResult());
    expect(map.has("MockPlugin:cmd")).toBe(true);
    expect(map.get("MockPlugin:cmd")?.commandName).toBe("cmd");
  });

  test("extractPluginCommandWithExtractor", () => {
    const map = createCommandExtractorMapFromPipeline(createPipelineResult());
    const handlers = createCommandHandlers();
    const command: PluginCommandData = {
      code: 357,
      parameters: ["MockPlugin", "cmd", "", { value: "42", note: "ok" }],
    };

    const result = extractPluginCommandWithExtractor(command, map, handlers);

    expect(result.pluginName).toBe("MockPlugin");
    expect(result.commandName).toBe("cmd");
    expect(result.error).toBeUndefined();
    expect(result.args).toHaveLength(2);
    expect(result.args[0]?.value).toBe(42);
    expect(result.args[1]?.value).toBe("ok");
  });

  test("extractPluginCommandWithExtractor: not found", () => {
    const map = new Map();
    const handlers = createCommandHandlers();
    const command: PluginCommandData = {
      code: 357,
      parameters: ["MissingPlugin", "missing", "", { value: "1" }],
    };

    const result = extractPluginCommandWithExtractor(command, map, handlers);

    expect(result.args).toEqual([]);
    expect(result.error).toEqual({
      message: "not found",
      source: "commandNotFoundError",
    });
  });

  test("extractPluginCommandWithExtractor: parseFn", () => {
    const map = createCommandExtractorMapFromPipeline(createPipelineResult());
    const handlers = createCommandHandlers();
    const parseFn = vi.fn(() => ({ value: 100, note: "memo" }));
    const command: PluginCommandData = {
      code: 357,
      parameters: ["MockPlugin", "cmd", "", { value: "42", note: "ok" }],
    };

    const result = extractPluginCommandWithExtractor(
      command,
      map,
      handlers,
      parseFn,
    );

    expect(parseFn).toHaveBeenCalledWith(command.parameters[3]);
    expect(result.args[0]?.value).toBe(100);
    expect(result.args[1]?.value).toBe("memo");
  });
});
