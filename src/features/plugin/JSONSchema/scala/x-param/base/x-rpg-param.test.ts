import { describe, test, expect } from "vitest";
import type { ParamBase } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/paramBase";
import type { X_RmmzParamBase, X_Param } from "./x-rpg-param";
import { X_RPG_PARM, xparamBaseData } from "./x-rpg-param";

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
    const param: ParamBase = { kind: "test-kind", parent: "test-parent" };
    const data = { key: "value" };
    const result = xparamBaseData(param, data);
    const expected: X_RmmzParamBase = {
      kind: "test-kind",
      parent: "test-parent",
      data: {
        key: "value",
      },
    };
    expect(result[X_RPG_PARM]).toEqual(expected);
    expect(result[X_RPG_PARM].data).toBe(data);
  });
});
