import { describe, test, expect } from "vitest";
import { LABEL_SET_TRAIT } from "./default";
import type { TraitLabel } from "./types";

describe("LABEL_SET_TRAIT", () => {
  Object.entries<TraitLabel>(LABEL_SET_TRAIT.options).forEach(
    ([key, value]) => {
      test(`${key} should have a domainName of type string`, () => {
        expect(value.domainName).toBeTypeOf("string");
      });
      test(`${key} should have a format of type string`, () => {
        expect(value.format).toBeTypeOf("string");
      });
    }
  );
});
