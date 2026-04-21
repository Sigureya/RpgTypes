import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import {
  generatePluginAnnotationLines,
  pluginSourceToArraySchema,
  parsePluginByLocale,
  compilePluginAsArraySchema,
} from "@sigureya/rmmz-plugin-schema";
import type {
  DeepJSONParserHandlers,
  ParsedPlugin,
  PluginAnnotationLines,
  PluginSchema,
  PluginSchemaArray,
  SchemaStringifyHandlers,
} from "@sigureya/rmmz-plugin-schema";
const MOCK_NUMBER_ARRAY_RESULT = "numberArrayResult";
const MOCK_STRING_ARRAY_RESULT = "stringArrayResult";
const MOCK_STRUCT_RESULT = "structResult";
const MOCK_STRUCT_ARRAY_RESULT = "structArrayResult";

const createMockedHandlers = (): MockedObject<SchemaStringifyHandlers> => ({
  numberArray: vi.fn().mockReturnValue(MOCK_NUMBER_ARRAY_RESULT),
  stringArray: vi.fn().mockReturnValue(MOCK_STRING_ARRAY_RESULT),
  struct: vi.fn().mockReturnValue(MOCK_STRUCT_RESULT),
  structArray: vi.fn().mockReturnValue(MOCK_STRUCT_ARRAY_RESULT),
});

const createParseHandlers = (): MockedObject<DeepJSONParserHandlers> => ({
  parseObject: vi.fn(),
  parseObjectArray: vi.fn(),
  parseStringArray: vi.fn(),
});
const schema: PluginSchema = {
  pluginName: "TestPlugin",
  target: "MZ",
  locale: "en",
  meta: {
    author: "Test Author",
    plugindesc: "Test Plugin Description",
    url: "test-url",
  },
  dependencies: {
    base: ["base1"],
    orderAfter: ["after2"],
    orderBefore: ["before3"],
  },
  schema: {
    commands: [],
    structs: [
      {
        struct: "Person",
        params: [
          {
            name: "name",
            attr: { kind: "string", default: "abc" },
          },
        ],
      },
    ],
    params: [],
  },
};
const lines: PluginAnnotationLines = {
  body: [
    "/*:en",
    "@target MZ",
    "@author Test Author",
    "@plugindesc Test Plugin Description",
    "@url test-url",
    "",
    "@base base1",
    "@orderBefore before3",
    "@orderAfter after2",
    "",
    "*/",
  ],
  structs: [
    [
      "/*~struct~Person:en",
      "@param name",
      "@type string",
      "@default abc",
      "",
      "*/",
    ],
  ],
};
const sourceText = [...lines.body, ...lines.structs].flat(2).join("\n");

describe("Plugin Annotation Generation and Parsing", () => {
  test("generates annotation lines", () => {
    const handlers = createMockedHandlers();
    const result = generatePluginAnnotationLines(schema, handlers);
    expect(result).toEqual(lines);
    expect(handlers.numberArray).toHaveBeenCalledTimes(0);
    expect(handlers.stringArray).toHaveBeenCalledTimes(0);
    expect(handlers.struct).toHaveBeenCalledTimes(0);
    expect(handlers.structArray).toHaveBeenCalledTimes(0);
  });
  test("parse", () => {
    const handlers = createParseHandlers();
    const result = pluginSourceToArraySchema(
      {
        pluginName: schema.pluginName,
        locale: schema.locale,
        source: sourceText,
      },
      handlers,
    );
    expect(result).toEqual(schema);
    expect(handlers.parseObject).toHaveBeenCalledTimes(0);
    expect(handlers.parseObjectArray).toHaveBeenCalledTimes(0);
    expect(handlers.parseStringArray).toHaveBeenCalledTimes(0);
  });

  test("parses by locale then compiles to array schema", () => {
    const handlers = createParseHandlers();
    const parsed = parsePluginByLocale(sourceText, schema.locale);
    const result = compilePluginAsArraySchema(parsed, handlers);
    expect(result).toEqual(schema.schema);
    expect(handlers.parseObject).toHaveBeenCalledTimes(0);
    expect(handlers.parseObjectArray).toHaveBeenCalledTimes(0);
    expect(handlers.parseStringArray).toHaveBeenCalledTimes(0);
  });
  describe("", () => {
    const expecedParsed: ParsedPlugin = {
      commands: [],
      dependencies: {
        base: ["base1"],
        orderAfter: ["after2"],
        orderBefore: ["before3"],
      },
      helpLines: [],
      locale: "en",
      meta: {
        author: "Test Author",
        plugindesc: "Test Plugin Description",
        url: "test-url",
      },
      params: [],
      structs: [
        {
          name: "Person",
          params: [{ attr: { default: "abc", kind: "string" }, name: "name" }],
        },
      ],
    };
    test("parsePluginByLocale", () => {
      const result: ParsedPlugin = parsePluginByLocale(
        sourceText,
        schema.locale,
      );
      expect(result).toEqual(expecedParsed);
    });
    test("compilePluginAsArraySchema", () => {
      const handlers = createParseHandlers();
      const result: PluginSchemaArray = compilePluginAsArraySchema(
        expecedParsed,
        handlers,
      );
      expect(result).toEqual<PluginSchemaArray>(schema.schema);
    });
  });
});
