import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

const fullsetData = <
  K extends "number" | "number[]",
  V extends number | number[]
>(
  kind: K,
  defaultValue: V
) => {
  return {
    kind: kind,
    default: defaultValue,
    digit: 0,
    min: 0,
    max: 100,
    desc: "This is a number parameter",
    text: "Number Parameter",
    parent: "parentId",
  };
};

const nullData = <K extends "number" | "number[]", V extends number | number[]>(
  kind: K,
  defaultValue: V
) => {
  return {
    kind: kind,
    default: defaultValue,
    digit: null,
    min: null,
    max: null,
    desc: null,
    text: null,
    parent: null,
  };
};

const undefinedData = <
  K extends "number" | "number[]",
  V extends number | number[]
>(
  kind: K,
  defaultValue: V
) => {
  return {
    kind: kind,
    default: defaultValue,
    digit: undefined,
    min: undefined,
    max: undefined,
    desc: undefined,
    text: undefined,
    parent: undefined,
  };
};

describe("number", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);
  describe("accepts valid KindOfNumber values", () => {
    test("fullset KindOfNumber data", () => {
      const mock: KindOfNumber = fullsetData("number", 0);
      expect(mock).toSatisfy(validate);
    });
    test("minimal KindOfNumber data", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
      };
      expect(mock).toSatisfy(validate);
    });
    test("with undefined optional fields", () => {
      const mock: KindOfNumber = undefinedData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("with null optional fields", () => {
      const mock: KindOfNumber = nullData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("with digit property", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with digit 2 and decimal default", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0.01,
        digit: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("with digit 0 and decimal default", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0.01,
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with min and max properties", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 5,
        min: 0,
        max: 10,
      };
      expect(mock).toSatisfy(validate);
    });
  });
  describe("rejects invalid KindOfNumber values", () => {
    test("with non-number default value", () => {
      const mock: Omit<KindOfNumber, "default"> = {
        kind: "number",
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("with non-number default value", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: "123" as any, // Invalid type
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("with negative digit", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
        digit: -1, // Invalid digit
      };
      expect(mock).not.toSatisfy(validate);
    });
    test("with non-integer digit", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
        digit: 1.4, // Invalid digit
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});

describe("KindOfNumberArray parameter validation", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);
  describe("accepts valid KindOfNumberArray values", () => {
    test("with empty default array", () => {
      const mock: KindOfNumberArray = {
        kind: "number[]",
        default: [],
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with default values", () => {
      const mock: KindOfNumberArray = {
        kind: "number[]",
        default: [1, 2, 3],
        digit: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates number array parameter with digit 2", () => {
      const mock: KindOfNumberArray = {
        kind: "number[]",
        default: [1.23, 4.56],
        digit: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("fullset KindOfNumberArray data", () => {
      const mock: KindOfNumberArray = fullsetData("number[]", [1, 2, 3]);
      expect(mock).toSatisfy(validate);
    });
    test("with null optional fields", () => {
      const mock: KindOfNumberArray = nullData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
    test("with undefined optional fields", () => {
      const mock: KindOfNumberArray = undefinedData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
  });
});
