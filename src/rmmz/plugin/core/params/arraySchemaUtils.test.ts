import { describe, test, expect } from "vitest";
import type {
  PluginParamEx,
  StructRefParam,
  StructArrayRefParam,
  NumberParam,
} from "./types";
import { hasStructAttr } from "./typeTest";

describe("isStructAttr", () => {
  test("returns true for struct param", () => {
    const param: PluginParamEx<StructRefParam> = {
      name: "example",
      attr: { kind: "struct", struct: "MyStruct" },
    };
    expect(param).toSatisfy(hasStructAttr);
    expect(hasStructAttr(param)).toBe(true);
  });
  test("returns true for struct array param", () => {
    const param: PluginParamEx<StructArrayRefParam> = {
      name: "exampleArray",
      attr: { kind: "struct[]", struct: "MyStruct" },
    };
    expect(param).toSatisfy(hasStructAttr);
    expect(hasStructAttr(param)).toBe(true);
  });
  test("returns false for non-struct param", () => {
    const param: PluginParamEx<NumberParam> = {
      name: "exampleNumber",
      attr: { kind: "number", default: 0 },
    };
    expect(param).not.toSatisfy(hasStructAttr);
    expect(hasStructAttr(param)).toBe(false);
  });
});
