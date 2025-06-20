import { describe, test, expect } from "vitest";
import type { KindBase } from "./primitiveParams";
import type {
  JSONSchemaTypeWithRpgParam,
  X_RmmzParamBaee,
  X_Param,
} from "./x-rpg-param";
import { X_RPG_PARM, xparamBaseData } from "./x-rpg-param";

interface X_RpgParamTest {
  param: number;
  data: string;
}

describe("X_RPG_PARM", () => {
  test("should be defined", () => {
    expect(X_RPG_PARM).toBe("x-rpg-param");
  });

  test("should have correct type for X_Param", () => {
    const xParam: X_Param = {
      [X_RPG_PARM]: {
        kind: "test",
        data: {},
      },
    };
    expect(xParam[X_RPG_PARM].kind).toBe("test");
  });

  test("should create xparamBaseData with correct structure", () => {
    const param: KindBase = { kind: "test-kind", parent: "test-parent" };
    const data = { key: "value" };
    const result = xparamBaseData(param, data);
    expect(result[X_RPG_PARM]).toEqual({
      kind: "test-kind",
      parent: "test-parent",
      data: data,
    } satisfies X_RmmzParamBaee);
  });
});

describe("JSONSchemaTypeWithRpgParam", () => {
  test("should have x-rpg-param metadata", () => {
    const schema: JSONSchemaTypeWithRpgParam<X_RpgParamTest> = {
      type: "object",
      properties: {
        param: { type: "integer" },
        data: { type: "string" },
      },
      required: ["param", "data"],
      additionalProperties: false,
      [X_RPG_PARM]: {
        kind: "x-rpg-param-test",
        data: {},
      } satisfies X_RmmzParamBaee,
    };
    expect(schema[X_RPG_PARM].kind).toBe("x-rpg-param-test");
  });
});
