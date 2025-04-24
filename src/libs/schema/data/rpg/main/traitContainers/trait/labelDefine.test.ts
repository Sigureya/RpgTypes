import { describe, test, expect } from "vitest";
import * as DEF from "./labelDefine";
import { TRAIT_ELEMENT_RATE, TRAIT_ATTACK_ELEMENT } from "./constants";
import { AUTHOR_RMMZ, MODULE_SYSTEM } from "@RpgTypes/namedItemSource";
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
    expect(result.dataSource).toEqual({
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      sourceKey: SRC_ELEMENTS,
    });
  });
});

describe("defineTraitAttackElement", () => {
  test("should call defineTrait with correct parameters", () => {
    const result = DEF.defineTraitAttackElement({});

    expect(result.code).toBe(TRAIT_ATTACK_ELEMENT);
    expect(result.dataSource).toEqual({
      author: AUTHOR_RMMZ,
      module: MODULE_SYSTEM,
      sourceKey: SRC_ELEMENTS,
    });
  });
});

describe("formatTraitText", () => {
  const traitDefine = {
    code: TRAIT_ELEMENT_RATE,
    label: "Element Rate",
    format: "{name} has {value}",
  };

  const trait = {
    value: 50,
    code: 0,
    dataId: 0,
  };

  test("should replace placeholders with correct values", () => {
    const result = DEF.formatTraitText(traitDefine, trait, "Fire");

    expect(result).toBe("Fire has 50");
  });

  test("should return format as is if no placeholders are present", () => {
    const traitDefineNoPlaceholders = {
      ...traitDefine,
      format: "No placeholders here",
    };

    const result = DEF.formatTraitText(
      traitDefineNoPlaceholders,
      trait,
      "Fire"
    );

    expect(result).toBe("No placeholders here");
  });
});
