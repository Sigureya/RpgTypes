import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { PluginParamTokens } from "./parse/types/types";
import type { RpgDataIdParam, PrimitiveParam } from "./primitiveParams";

describe("", () => {
  test("", () => {
    const mock: PluginParamTokens = {
      name: "attr",
      attr: {
        kind: "enemy",
        default: "0",
      } satisfies ParamSoruceRecord<RpgDataIdParam>,
    };
    const expected: PrimitiveParam = {
      kind: "enemy",
      default: 0,
    };
    expect(compileAttributes(mock)).toEqual(expected);
  });
});
