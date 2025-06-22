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
  describe("valid cases", () => {
    test("フルセットのデータ", () => {
      const mock: KindOfNumber = fullsetData("number", 0);
      expect(mock).toSatisfy(validate);
    });
    test("最小メンバのデータ", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
      };
      expect(mock).toSatisfy(validate);
    });
    test("undefined optional fields", () => {
      const mock: KindOfNumber = undefinedData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("null", () => {
      const mock: KindOfNumber = nullData("number", 0);
      expect(mock).toSatisfy(validate);
    });

    test("桁情報付き", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0,
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates number parameter with digit 2", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0.01,
        digit: 2,
      };
      expect(mock).toSatisfy(validate);
    });
    test("桁指定無し＆初期値が小数。データに問題があるけどバリデーションは通す", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 0.01,
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("最大値・最小値が指定されている", () => {
      const mock: KindOfNumber = {
        kind: "number",
        default: 5,
        min: 0,
        max: 10,
      };
      expect(mock).toSatisfy(validate);
    });
  });
});

describe("number[]", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);
  describe("valid cases", () => {
    test("validates number array parameter with default empty array", () => {
      const mock: KindOfNumberArray = {
        kind: "number[]",
        default: [],
        digit: 0,
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates number array parameter with default values", () => {
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
    test("fullset data", () => {
      const mock: KindOfNumberArray = fullsetData("number[]", [1, 2, 3]);
      expect(mock).toSatisfy(validate);
    });
    test("null", () => {
      const mock: KindOfNumberArray = nullData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
    test("undefined", () => {
      const mock: KindOfNumberArray = undefinedData("number[]", []);
      expect(mock).toSatisfy(validate);
    });
  });
});
