import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { PluginParamTokens } from "./parse/types";
import type { RpgDataIdParam, StructParamPrimitive } from "./primitiveParams";

describe("", () => {
  test("", () => {
    const mock: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "enemy",
        default: "0",
      } satisfies ParamSoruceRecord<RpgDataIdParam>,
    };
    const expected: StructParamPrimitive = {
      kind: "enemy",
      default: 0,
    };
    expect(compileAttributes(mock)).toEqual(expected);
  });
});
