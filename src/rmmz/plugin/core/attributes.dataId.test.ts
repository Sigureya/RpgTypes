import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { PrimitiveParam } from "./params/types/paramUnion";
import type { RpgDataIdParam } from "./params/types/rpgDataTypes";
import type { PluginParamTokens } from "./parse/types/types";

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
