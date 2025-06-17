import { test, expect, describe } from "vitest";
import type {
  BooleanArg,
  NumberArg,
  Primitive_NumbersArray,
  Primitive_StringsArray,
  StringArg,
} from "./core";
import { stringifyPrimitiveAnnotation } from "./stringifyPrimitive";

describe("stringifyPrimitive", () => {
  test("stringify boolean", () => {
    const ant: BooleanArg = {
      type: "boolean",
      default: true,
      on: "on01",
      off: "off02",
    };
    const result: string = stringifyPrimitiveAnnotation(ant);
    expect(result).toBe("true");
  });

  test("stringify number", () => {
    const ant: NumberArg = {
      type: "number",
      default: 5,
      min: 1,
      max: 10,
      digit: 2,
    };
    const result: string = stringifyPrimitiveAnnotation(ant);
    expect(result).toBe("5");
  });
  describe("stringify string", () => {
    const ant: StringArg = {
      type: "string",
      default: "default text",
    };
    test("", () => {
      const result: string = stringifyPrimitiveAnnotation(ant);
      expect(result).toBe("default text");
    });
  });
  describe("stringify string array", () => {
    const ant: Primitive_StringsArray = {
      type: "string[]",
      default: ["a", "b", "c"],
    };
    test("stringify string array", () => {
      const result: string = stringifyPrimitiveAnnotation(ant);
      expect(result).toBe('["a","b","c"]');
    });
    test("stringify string array with dictionary", () => {
      const result: string = stringifyPrimitiveAnnotation(ant, {
        a: "apple",
        b: "banana",
        c: "cherry",
      });
      expect(result).toBe('["apple","banana","cherry"]');
    });
  });
  test("stringify number array", () => {
    const ant: Primitive_NumbersArray = {
      type: "number[]",
      default: [1, 2, 3],
    };
    const result: string = stringifyPrimitiveAnnotation(ant);
    expect(result).toBe('["1","2","3"]');
  });
});
