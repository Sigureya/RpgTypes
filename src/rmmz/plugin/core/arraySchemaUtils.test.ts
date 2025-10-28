import { describe, test, expect } from "vitest";
import type { PluginParam } from "./arraySchemaTypes";
import { isStructAttr } from "./arraySchemaUtils";
import type {
  StructRefParam,
  StructArrayRefParam,
  NumberParam,
} from "./primitiveParams";

describe("isStructAttr", () => {
  test("returns true for struct param", () => {
    const param: PluginParam<StructRefParam> = {
      name: "example",
      attr: { kind: "struct", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns true for struct array param", () => {
    const param: PluginParam<StructArrayRefParam> = {
      name: "exampleArray",
      attr: { kind: "struct[]", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns false for non-struct param", () => {
    const param: PluginParam<NumberParam> = {
      name: "exampleNumber",
      attr: { kind: "number", default: 0 },
    };
    expect(param).not.toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(false);
  });
});
