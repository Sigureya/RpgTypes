import { describe, test, expect } from "vitest";
import type { PluginParamEx } from "./arraySchemaTypes";
import type {
  StructRefParam,
  StructArrayRefParam,
  NumberParam,
} from "./primitive";
import { isStructAttr } from "./typeTest";

describe("isStructAttr", () => {
  test("returns true for struct param", () => {
    const param: PluginParamEx<StructRefParam> = {
      name: "example",
      attr: { kind: "struct", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns true for struct array param", () => {
    const param: PluginParamEx<StructArrayRefParam> = {
      name: "exampleArray",
      attr: { kind: "struct[]", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns false for non-struct param", () => {
    const param: PluginParamEx<NumberParam> = {
      name: "exampleNumber",
      attr: { kind: "number", default: 0 },
    };
    expect(param).not.toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(false);
  });
});
