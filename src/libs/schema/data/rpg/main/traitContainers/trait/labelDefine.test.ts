import { describe, test, expect } from "vitest";

import * as DEF from "./labelDefine";
import { TRAIT_ELEMENT_RATE } from "./constants";
import {
  SRC_ELEMENTS,
  type SourceIdentifier,
} from "@RpgTypes/schema/namedItemSource";
import { AUTHOR_RMMZ, MODULE_SYSTEM } from "@RpgTypes/namedItemSource";
describe("", () => {
  const result = DEF.defineTraitElementRate({});

  test("", () => {
    const expected: SourceIdentifier = {
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      sourceKey: SRC_ELEMENTS,
    };
    expect(result.dataSource).toEqual(expected);
  });
  test("", () => {
    expect(result.code).toBe(TRAIT_ELEMENT_RATE);
  });
});
describe("", () => {
  const result = DEF.defineTraitElementRate({
    domainName: "aaa",
    format: "fmt",
  });
  test("", () => {
    expect(result.format).toBe("fmt");
    expect(result.label).toBe("aaa");
  });
  test("", () => {
    const expected: SourceIdentifier = {
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      sourceKey: SRC_ELEMENTS,
    };
    expect(result.dataSource).toEqual(expected);
  });
  test("", () => {
    expect(result.code).toBe(TRAIT_ELEMENT_RATE);
  });
});
