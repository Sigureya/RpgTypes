import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { NumberParam, NumberArrayParam } from "./core/primitiveParams";
import { makePluginParamSchema } from "./paramSchema";

type NumberParamBase = Omit<NumberParam, "kind" | "default">;

const fullsetData = <
  K extends "number" | "number[]",
  V extends number | number[]
>(
  kind: K,
  defaultValue: V
) => {
  return {
    ...{
      kind: kind,
      default: defaultValue,
    },
    ...{
      decimals: 0,
      min: 0,
      max: 100,
      desc: "This is a number parameter",
      text: "Number Parameter",
      parent: "parentId",
    },
  } satisfies NumberParamBase;
};

const nullData = <K extends "number" | "number[]", V extends number | number[]>(
  kind: K,
  defaultValue: V
) => {
  return {
    ...{
      kind: kind,
      default: defaultValue,
    },
    ...({
      decimals: null,
      min: null,
      max: null,
      desc: null,
      text: null,
      parent: null,
    } satisfies Record<keyof NumberParamBase, null>),
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
    ...{
      kind: kind,
      default: defaultValue,
    },
    ...({
      decimals: undefined,
      min: undefined,
      max: undefined,
      desc: undefined,
      text: undefined,
      parent: undefined,
    } satisfies NumberParamBase),
  };
};

describe("number", () => {
  const ajv = new Ajv({
    strict: true,
    discriminator: true,
    code: { source: false },
  });
  const schema = makePluginParamSchema();
  const validate = ajv.compile(schema);
  describe("accepts valid KindOfNumber values", () => {
    test("fullset KindOfNumber data", () => {
      const mock: NumberParam = fullsetData("number", 0);
      expect(mock).toSatisfy(validate);
    });
    test("minimal KindOfNumber data", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0,
      };
      expect(mock).toSatisfy(validate);
    });
    test("with undefined optional fields", () => {
      const mock: NumberParam = undefinedData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("with null optional fields", () => {
      const mock = nullData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("with digit property", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0,
        decimals: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with digit 2 and decimal default", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0.01,
        decimals: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("with digit 0 and decimal default", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0.01,
        decimals: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with min and max properties", () => {
      const mock: NumberParam = {
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
      const mock: Omit<NumberParam, "default"> = {
        kind: "number",
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("with non-number default value", () => {
      const mock: NumberParam = {
        kind: "number",
        default: "123" as any, // Invalid type
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("with negative digit", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0,
        decimals: -1, // Invalid digit
      };
      expect(mock).not.toSatisfy(validate);
    });
    test("with non-integer digit", () => {
      const mock: NumberParam = {
        kind: "number",
        default: 0,
        decimals: 1.4, // Invalid digit
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});

describe("KindOfNumberArray parameter validation", () => {
  const ajv = new Ajv({
    strict: true,
    discriminator: true,
    code: { source: false },
  });
  const schema = makePluginParamSchema();
  const validate = ajv.compile(schema);
  describe("accepts valid KindOfNumberArray values", () => {
    test("with empty default array", () => {
      const mock: NumberArrayParam = {
        kind: "number[]",
        default: [],
        decimals: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("with default values", () => {
      const mock: NumberArrayParam = {
        kind: "number[]",
        default: [1, 2, 3],
        decimals: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("validates number array parameter with digit 2", () => {
      const mock: NumberArrayParam = {
        kind: "number[]",
        default: [1.23, 4.56],
        decimals: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("fullset KindOfNumberArray data", () => {
      const mock: NumberArrayParam = fullsetData("number[]", [1, 2, 3]);
      expect(mock).toSatisfy(validate);
    });
    test("with null optional fields", () => {
      const mock = nullData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
    test("with undefined optional fields", () => {
      const mock: NumberArrayParam = undefinedData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
  });
});
