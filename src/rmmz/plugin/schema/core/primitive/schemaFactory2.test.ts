import { describe, test, expect } from "vitest";
import type { NewRmmzParam_Number } from "./newParamType";
import { schemaFromNumberParam } from "./schemaFactory2";
import type { NumberParamSchema, ParamSchema } from "./x-rpg-param";
describe("schemaFromNumberParam", () => {
  test("should create a schema with default value and type", () => {
    const param: NewRmmzParam_Number = {
      type: "number",
      default: 42,
      digit: 0,
      text: "Test Number",
      desc: "A test number parameter",
    };
    const schema = schemaFromNumberParam(param);
    expect(schema).toEqual({
      type: "integer",
      default: 42,
      title: "Test Number",
      description: "A test number parameter",
      maximum: Number.MAX_SAFE_INTEGER,
      minimum: Number.MIN_SAFE_INTEGER,
      "x-rpg-param": {
        kind: "number",
        data: { digit: 0 },
        parent: "",
      },
    } satisfies NumberParamSchema);
  });

  test("should handle floating point numbers", () => {
    const param: NewRmmzParam_Number = {
      type: "number",
      default: 3.14,
      digit: 2,
      text: "Pi",
      desc: "The value of Pi",
    };
    const schema = schemaFromNumberParam(param);
    //    schema["x-rpg-param"].

    expect(schema).toEqual({
      type: "number",
      default: 3.14,
      title: "Pi",
      maximum: Number.MAX_SAFE_INTEGER,
      minimum: Number.MIN_SAFE_INTEGER,
      description: "The value of Pi",
      "x-rpg-param": {
        kind: "number",
        data: { digit: 2 },
        parent: "",
      },
    } satisfies NumberParamSchema);
  });
});
