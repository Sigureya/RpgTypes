import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { dataIndexSchema, makeDataIndexValueSchema } from "./makeSchema";
import type { Actor, Weapon } from "./types";

describe("", () => {
  const ajv = new Ajv({ strict: true });
  const schema = dataIndexSchema();
  const variable = ajv.compile(schema);
  describe("normal case", () => {
    test("", () => {
      const mock: Actor = {
        type: "actor",
        default: 3,
        desc: "desc",
        text: "text",
        parent: "parent",
      };
      expect(mock).toSatisfy(variable);
    });
    test("", () => {
      const mock: Weapon = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("error case", () => {
    test("", () => {
      const mock: Weapon = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("", () => {
      const mock: Weapon = {
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
