import { describe, expect, it } from "vitest";
import type { ScalaParam } from "./paramUnion";
import type { StringParam, ComboParam, SelectParam } from "./primitiveParams";
import {
  isStringValueParam,
  isArrayParam,
  paramHasText,
  isStructParam,
  isStructArrayParam,
  isNumberValueParamEx,
  isScalarParam,
  hasNumberValueParam,
} from "./typeTest";

const stringParam: StringParam = {
  kind: "string",
  default: "hello",
};

const multilineStringParam: StringParam = {
  kind: "multiline_string",
  default: "hello\nworld",
};

const comboParam: ComboParam = {
  kind: "combo",
  default: "option1",
  options: ["option1", "option2", "option3"],
};

const selectParam: SelectParam = {
  kind: "select",
  default: "choiceA",
  options: [
    { option: "Choice A", value: "A" },
    { option: "Choice B", value: "B" },
  ],
};

const runTestCase = (param: ScalaParam) => {
  describe(`param kind=${param.kind}`, () => {
    it("is string value param", () => {
      expect(param).toSatisfy(isStringValueParam);
      expect(isStringValueParam(param)).toBe(true);
    });
    it("is not array param", () => {
      expect(param).not.toSatisfy(isArrayParam);
      expect(isArrayParam(param)).toBe(false);
    });
    it("is not struct param", () => {
      expect(param).not.toSatisfy(isStructParam);
      expect(isStructParam(param)).toBe(false);
    });
    it("is not struct array param", () => {
      expect(param).not.toSatisfy(isStructArrayParam);
      expect(isStructArrayParam(param)).toBe(false);
    });
    it("does have text", () => {
      expect(param).toSatisfy(paramHasText);
      expect(paramHasText(param)).toBe(true);
    });
    it("is not number value param", () => {
      expect(param).not.toSatisfy(isNumberValueParamEx);
      expect(isNumberValueParamEx(param)).toBe(false);
    });
    it("is scalar param", () => {
      expect(param).toSatisfy(isScalarParam);
      expect(isScalarParam(param)).toBe(true);
    });
    it("is not number value param GG", () => {
      expect(param).not.toSatisfy(hasNumberValueParam);
      expect(hasNumberValueParam(param)).toBe(false);
    });
  });
};

[stringParam, multilineStringParam, comboParam, selectParam].forEach(
  (param) => {
    runTestCase(param);
  }
);
