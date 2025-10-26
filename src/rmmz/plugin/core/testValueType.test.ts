import { describe, expect, test } from "vitest";
import type {
  FileParam,
  BooleanParam,
  ComboParam,
  NumberParam,
  SelectParam,
  StringParam,
  RpgDataIdParam,
  RpgVariableParam,
} from "./primitiveParams";
import { isStringValueParam } from "./testValueType";

describe("file", () => {
  const param: FileParam = {
    kind: "file",
    default: "icon",
    dir: "img/system/",
  };
  test("", () => {
    expect(param).toSatisfy(isStringValueParam);
  });
});

describe("", () => {
  const actor: RpgDataIdParam = {
    kind: "actor",
    default: 1,
  };
  test("RpgDataIdParam is not string param", () => {
    expect(actor).not.toSatisfy(isStringValueParam);
  });
});
