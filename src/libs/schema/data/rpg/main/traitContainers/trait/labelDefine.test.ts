import { describe, test, expect } from "vitest";
import * as DEF from "./labelDefine";
import { TRAIT_ELEMENT_RATE, TRAIT_ATTACK_ELEMENT } from "./constants";
import { AUTHOR_RMMZ, MODULE_SYSTEM } from "@RpgTypes/namedItemSource";
import type { SourceIdentifier } from "@RpgTypes/schema/namedItemSource";
import { SRC_ELEMENTS } from "@RpgTypes/schema/namedItemSource";
import type { TraitLabelResolved } from "./options";
import { LABEL_SET_TRAIT } from "./options";

describe("resolveTraitLabel", () => {
  const result: ReadonlyArray<TraitLabelResolved> = DEF.resolveTraitLabels(
    LABEL_SET_TRAIT.options
  );
  const codeList = result.map((item) => item.code);

  test("should ensure that all codes are unique", () => {
    const set = new Set(codeList);
    expect(set.size).toBe(codeList.length);
  });

  test("should ensure that codes are sorted in ascending order", () => {
    expect(codeList).toEqual(codeList.toSorted((a, b) => a - b));
  });
});

describe("defineTraitElementRate", () => {
  test("should call defineTrait with correct parameters", () => {
    const result = DEF.defineTraitElementRate({});

    expect(result.code).toBe(TRAIT_ELEMENT_RATE);
    const expected: SourceIdentifier = {
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      kind: SRC_ELEMENTS,
    };
    expect(result.dataSource).toEqual(expected);
  });
  test("should create a new instance with correct parameters", () => {
    const result1 = DEF.defineTraitElementRate({});
    const result2 = DEF.defineTraitElementRate({});
    expect(result1).not.toBe(result2);
    expect(result1).toEqual(result2);
    expect(result1.dataSource).toEqual(result2.dataSource);
    expect(result1.dataSource).not.toBe(result2.dataSource);
  });
});

describe("defineTraitAttackElement", () => {
  test("should call defineTrait with correct parameters", () => {
    const result = DEF.defineTraitAttackElement({});

    expect(result.code).toBe(TRAIT_ATTACK_ELEMENT);
    const expected: SourceIdentifier = {
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      kind: SRC_ELEMENTS,
    };
    expect(result.dataSource).toEqual(expected);
  });
});
