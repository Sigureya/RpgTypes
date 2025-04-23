import { describe, test, expect } from "vitest";

import { defineTraitElementRate } from "./labelDefine";
import { TRAIT_ELEMENT_RATE } from "./constants";
import { LABEL_SET_TRAIT } from "./options";
describe("", () => {
  const result = defineTraitElementRate({});

  test("", () => {
    expect(result.label).toBeTypeOf("string");
  });
  // test("", () => {
  //   expect(result.label).toBe(LABELS_TRAIT_ELEMENT_RATE.domainName);
  // });
  test("", () => {
    expect(result.code).toBe(TRAIT_ELEMENT_RATE);
  });
});
