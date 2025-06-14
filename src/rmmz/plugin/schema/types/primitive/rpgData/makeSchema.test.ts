import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { DataIndexArg } from "../numbers";
import {
  rmmzDataTypes,
  dataIndexSchema,
  dataIndexArraySchema,
  rmmzDataTypeArrays,
  makeDataIndexValueSchema,
} from "./makeSchema";

describe("", () => {
  const ajv = new Ajv({ strict: true });
  const schema = dataIndexSchema();
  const variable = ajv.compile(schema);
  describe("normal case", () => {
    test("", () => {
      const mock: DataIndexArg<"actor"> = {
        type: "actor",
        default: 3,
        desc: "desc",
        text: "text",
        parent: "parent",
      };
      expect(mock).toSatisfy(variable);
    });
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("error case", () => {
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("", () => {
      const mock: DataIndexArg<"weapon"> = {
        type: "weapon",
        default: 3.14,
      };
      expect(mock).not.toSatisfy(variable);
    });
  });
});

describe("", () => {
  const mock: DataIndexArg<"weapon"> = {
    type: "weapon",
    default: 15,
  };
  const schema = makeDataIndexValueSchema(mock);
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);
  test("", () => {
    expect(validate(4)).toBe(true);
  });
  test("", () => {
    expect(validate(0)).toBe(true);
  });
  test("", () => {
    expect(validate(3.14)).toBe(false);
  });
  test("", () => {
    expect(validate(-1)).toBe(false);
  });
});
