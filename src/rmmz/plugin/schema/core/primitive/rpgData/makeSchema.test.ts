import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { dataIndexSchema, makeDataIndexValueSchema } from "./makeSchema";
import type {
  RmmzParamCore_Skill,
  RmmzParamCore_Weapon,
  Weapon,
} from "./types";

describe("", () => {
  const ajv = new Ajv({ strict: true });
  const schema = dataIndexSchema();
  const variable = ajv.compile(schema);
  describe("normal case", () => {
    test("", () => {
      const mock: RmmzParamCore_Skill = {
        type: "skill",
        default: 3,
      };
      expect(mock).toSatisfy(variable);
    });
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("error case", () => {
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 3.14,
      };
      expect(mock).not.toSatisfy(variable);
    });
  });
});

describe("", () => {
  const mock: Weapon = {
    type: "weapon",
    default: 15,
  };
  const schema = makeDataIndexValueSchema(mock);
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);
  test("", () => {
    expect(4).toSatisfy(validate);
  });
  test("", () => {
    expect(0).toSatisfy(validate);
  });
  test("", () => {
    expect(3.14).not.toSatisfy(validate);
  });
  test("", () => {
    expect(-1).not.toSatisfy(validate);
  });
});
