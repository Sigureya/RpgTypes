import { describe, test, expect } from "vitest";

import { defineTraitElementRate } from "./labelDefine";
import { TRAIT_ELEMENT_RATE } from "./constants";
import { LABEL_SET_TRAIT2 } from "./options";
describe("", () => {
  const result = defineTraitElementRate(LABEL_SET_TRAIT2.options.elementRate);

  test("", () => {
    expect(result.label).toBeTypeOf("string");
  });
  // test("", () => {
  //   expect(result.label).toBe(LABELS_TRAIT_ELEMENT_RATE.domainName);
  // });
  test("", () => {
    expect(result.code).toBe(TRAIT_ELEMENT_RATE);
  });
  test("", () => {
    const r2 = defineTraitElementRate(LABEL_SET_TRAIT2.options.elementRate);
    expect(result.format).toEqual(r2);
  });
});
