import { describe, expect, it } from "vitest";
import type { RpgDataIdParam, RpgVariableParam } from "./primitiveParams";
import { isStringValueParam, isArrayParam, paramHasText } from "./typeTest";

const runTestCase = (param: RpgDataIdParam | RpgVariableParam) => {
  describe(`dataId kind=${param.kind}`, () => {
    it("is not string param", () => {
      expect(param).not.toSatisfy(isStringValueParam);
    });
    it("is not array param", () => {
      expect(param).not.toSatisfy(isArrayParam);
    });
    it("does not have text", () => {
      expect(param).not.toSatisfy(paramHasText);
    });
  });
};

const dataIdParam: RpgDataIdParam[] = [
  { kind: "actor", default: 1 },
  { kind: "enemy", default: 25 },
  { kind: "class", default: 1 },
  { kind: "skill", default: 1 },
  { kind: "item", default: 1 },
  { kind: "weapon", default: 1 },
  { kind: "armor", default: 1 },
  { kind: "state", default: 1 },
];

describe("RpgDataIdParams", () => {
  dataIdParam.forEach((param) => {
    runTestCase(param);
  });
});

describe("RpgVariableParam", () => {
  const param: RpgVariableParam = { kind: "variable", default: 1 };
  runTestCase(param);
});
