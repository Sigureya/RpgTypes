import { describe, expect, it } from "vitest";
import type {
  PrimitiveParam,
  RpgDataIdParam,
  RpgVariableParam,
  RpgSwitchParam,
  NumberParam,
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

const runTestCase = (param: PrimitiveParam) => {
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
    it("is not struct param", () => {
      expect(param).not.toSatisfy(isStructParam);
    });
    it("is not struct array param", () => {
      expect(param).not.toSatisfy(isStructArrayParam);
    });
    it("is number value param", () => {
      expect(param).toSatisfy(isNumberValueParamEx);
    });
    it("is scalar param", () => {
      expect(param).toSatisfy(isScalarParam);
    });
    it("is number value param GG", () => {
      expect(param).toSatisfy(hasNumberValueParam);
    });
  });
};

describe("RpgDataIdParams", () => {
  const dataIdParam: RpgDataIdParam[] = [
    { kind: "actor", default: 1 },
    { kind: "enemy", default: 25 },
    { kind: "class", default: 1 },
    { kind: "skill", default: 1 },
    { kind: "item", default: 1 },
    { kind: "weapon", default: 1 },
    { kind: "armor", default: 1 },
    { kind: "state", default: 1 },
    { kind: "common_event", default: 1 },
    { kind: "troop", default: 1 },
  ];
  dataIdParam.forEach((param) => {
    runTestCase(param);
  });
});

describe("RpgVariableParam", () => {
  const param: RpgVariableParam = { kind: "variable", default: 1 };
  runTestCase(param);
});

describe("RpgSwitchParam", () => {
  const param: RpgSwitchParam = { kind: "switch", default: 1 };
  runTestCase(param);
});

describe("RpgDataIdParam number tests", () => {
  const param: NumberParam = { kind: "number", default: 42 };
  runTestCase(param);
});

describe("number arrays", () => {
  const params: Extract<PrimitiveParam, { default: number[] }>[] = [
    { kind: "number[]", default: [1, 2, 3] },
    { kind: "actor[]", default: [1, 2, 3] },
    { kind: "class[]", default: [1, 2, 3] },
    { kind: "enemy[]", default: [1, 2, 3] },
    { kind: "skill[]", default: [1, 2, 3] },
    { kind: "item[]", default: [1, 2, 3] },
    { kind: "weapon[]", default: [1, 2, 3] },
    { kind: "armor[]", default: [1, 2, 3] },
    { kind: "state[]", default: [1, 2, 3] },
    { kind: "common_event[]", default: [1, 2, 3] },
    { kind: "troop[]", default: [1, 2, 3] },
  ];
  params.forEach((param) => {
    describe(`array param kind=${param.kind}`, () => {
      it("is array param", () => {
        expect(param).toSatisfy(isArrayParam);
      });
      it("is number array param", () => {
        expect(param).toSatisfy(isNumberValueParamEx);
      });
      it("is number value param GG", () => {
        expect(param).toSatisfy(hasNumberValueParam);
      });
    });
  });
});
