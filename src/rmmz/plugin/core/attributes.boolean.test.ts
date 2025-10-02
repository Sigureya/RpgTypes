import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { PluginParamTokens } from "./parse/types/types";
import type { BooleanParam } from "./primitiveParams";

describe("compileAttributes - boolean", () => {
  test("minimum set", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "boolean",
        default: "true",
      } satisfies ParamSoruceRecord<BooleanParam>,
    };
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: true,
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "boolean",
        default: "false",
        text: "Enabled?",
        desc: "Is this feature enabled?",
        on: "Yes",
        off: "No",
        parent: "Parent Feature",
      } satisfies ParamSoruceRecord<BooleanParam>,
    };
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: false,
      text: "Enabled?",
      desc: "Is this feature enabled?",
      on: "Yes",
      off: "No",
      parent: "Parent Feature",
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });
});
