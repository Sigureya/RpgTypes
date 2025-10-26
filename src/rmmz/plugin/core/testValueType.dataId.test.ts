import { describe, expect, test } from "vitest";
import type { RpgDataIdParam, RpgVariableParam } from "./primitiveParams";
import { isStringValueParam } from "./testValueType";

const runTestCase = (param: RpgDataIdParam) => {
  describe(`dataId kind=${param.kind}`, () => {
    test("is not string param", () => {
      expect(param).not.toSatisfy(isStringValueParam);
    });
  });
};

const actorParam: RpgDataIdParam[] = [
  { kind: "actor", default: 1 },
  { kind: "enemy", default: 25 },
  { kind: "class", default: 1 },
];
describe("RpgDataIdParams", () => {
  actorParam.forEach((param) => {
    runTestCase(param);
  });
});
