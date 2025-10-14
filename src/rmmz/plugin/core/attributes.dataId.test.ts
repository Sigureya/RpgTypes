import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { PrimitiveParam } from "./paramUnion";
import type { PluginParamTokens } from "./parse/types/types";
import type { RpgDataIdParam } from "./primitiveParams";

describe("compileAttributes - dataId", () => {
  test("enemy", () => {
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
