import { describe, expect, it } from "vitest";
import type {
  StringParam,
  ComboParam,
  SelectParam,
  ScalaParam,
  PrimitiveParam,
  FileParam,
} from "./types";
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
    it("does have text", () => {
      expect(param).toSatisfy(paramHasText);
      expect(paramHasText(param)).toBe(true);
    });
    runTestCase(param);
  }
);

describe("string array param", () => {
  const stringArrayParam: PrimitiveParam = {
    kind: "string[]",
    default: ["hello", "world"],
  };
  it("has text", () => {
    expect(stringArrayParam).toSatisfy(paramHasText);
    expect(paramHasText(stringArrayParam)).toBe(true);
  });
});

describe("single file param", () => {
  const fileParam: FileParam = { kind: "file", default: "icon", dir: "img" };

  it("does not have text", () => {
    expect(fileParam).not.toSatisfy(paramHasText);
    expect(paramHasText(fileParam)).toBe(false);
  });
  runTestCase(fileParam);
});

describe("file array param", () => {
  const fileArrayParam: PrimitiveParam = {
    kind: "file[]",
    dir: "img",
    default: ["icon1", "icon2"],
  };
  // it("is string value param", () => {
  //   expect(fileArrayParam).toSatisfy(isStringValueParam);
  //   expect(isStringValueParam(fileArrayParam)).toBe(true);
  // });

  it("is array param", () => {
    expect(fileArrayParam).toSatisfy(isArrayParam);
    expect(isArrayParam(fileArrayParam)).toBe(true);
  });
});
