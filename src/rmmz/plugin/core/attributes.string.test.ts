import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { StringParam, StringArrayParam } from "./params";
import type { PluginParamTokens } from "./parse/types/types";

describe("compileAttributes - string", () => {
  test("minimum set", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "string",
        default: "abc",
      } satisfies ParamSoruceRecord<StringParam>,
    };
    const expected: StringParam = {
      kind: "string",
      default: "abc",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "string",
        default: "abc",
        text: "String Text",
        desc: "String Description",
        parent: "Parent String",
      } satisfies ParamSoruceRecord<StringParam>,
    };
    const expected: StringParam = {
      kind: "string",
      default: "abc",
      text: "String Text",
      desc: "String Description",
      parent: "Parent String",
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});

describe("compileAttributes - string[]", () => {
  test("minimum set", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "string[]",
        default: `["a", "b", "c"]`,
      } satisfies ParamSoruceRecord<StringArrayParam>,
    };
    const expected: StringArrayParam = {
      kind: "string[]",
      default: ["a", "b", "c"],
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });

  test("empty array", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "string[]",
        default: `[]`,
      } satisfies ParamSoruceRecord<StringArrayParam>,
    };
    const expected: StringArrayParam = {
      kind: "string[]",
      default: [],
    };
    const result = compileAttributes(tokens);
    expect(result).toEqual(expected);
  });
});
