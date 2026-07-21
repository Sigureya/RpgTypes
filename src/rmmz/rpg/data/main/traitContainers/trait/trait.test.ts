import { describe, expect, test } from "vitest";
import { TRAIT_ATTACK_ELEMENT } from "./core";
import {
  traitAttackElements,
  traitPi,
  traitSum,
  traitSumAll,
  traitSet,
  someTraitMatched,
} from "./trait";
import type { Trait } from "./types";

const TRAIT_A = 31 as const;
const TRAIT_B = 42 as const;

const traits: Trait[] = [
  {
    code: TRAIT_A,
    dataId: 10,
    value: 2,
  },
  {
    code: TRAIT_A,
    dataId: 10,
    value: 0.5,
  },
  {
    code: TRAIT_A,
    dataId: 20,
    value: 3,
  },
  {
    code: TRAIT_B,
    dataId: 10,
    value: 100,
  },
];

describe("trait functions", () => {
  describe("traitPi", () => {
    test("matched traits are multiplied", () => {
      const result = traitPi(traits, TRAIT_A, 10);

      expect(result).toBe(1);
    });

    test("non matched traits are ignored", () => {
      const result = traitPi(traits, TRAIT_A, 20);

      expect(result).toBe(3);
    });

    test("no matched traits returns initial value", () => {
      const result = traitPi(traits, TRAIT_A, 999);

      expect(result).toBe(1);
    });
  });

  describe("traitSum", () => {
    test("matched traits are summed", () => {
      const result = traitSum(traits, TRAIT_A, 10);

      expect(result).toBe(2.5);
    });

    test("non matched traits are ignored", () => {
      const result = traitSum(traits, TRAIT_A, 20);

      expect(result).toBe(3);
    });

    test("no matched traits returns zero", () => {
      const result = traitSum(traits, TRAIT_A, 999);

      expect(result).toBe(0);
    });
  });

  describe("traitSumAll", () => {
    test("all same code traits are summed", () => {
      const result = traitSumAll(traits, TRAIT_A);

      expect(result).toBe(5.5);
    });

    test("different code traits are ignored", () => {
      const result = traitSumAll(traits, TRAIT_B);

      expect(result).toBe(100);
    });

    test("no matched traits returns zero", () => {
      const result = traitSumAll(traits, 999);

      expect(result).toBe(0);
    });
  });

  describe("traitSet", () => {
    test("returns dataIds with same code", () => {
      const result = traitSet(traits, TRAIT_A);

      expect(result).toEqual([10, 10, 20]);
    });

    test("returns empty array when no matched", () => {
      const result = traitSet(traits, 999);

      expect(result).toEqual([]);
    });
  });

  describe("traitAttackElements", () => {
    test("returns attack elements", () => {
      const traits: Trait[] = [
        {
          code: TRAIT_ATTACK_ELEMENT,
          dataId: 3,
          value: 0,
        },
        {
          code: TRAIT_ATTACK_ELEMENT,
          dataId: 5,
          value: 0,
        },
      ];

      const result = traitAttackElements(traits);

      expect(result).toEqual([3, 5]);
    });
  });

  describe("someTraitMatched", () => {
    test("returns true when matched", () => {
      const result = someTraitMatched(traits, TRAIT_A, 20);

      expect(result).toBe(true);
    });

    test("returns false when not matched", () => {
      const result = someTraitMatched(traits, TRAIT_A, 999);

      expect(result).toBe(false);
    });

    test("same dataId but different code is false", () => {
      const result = someTraitMatched(traits, TRAIT_B, 20);

      expect(result).toBe(false);
    });
  });
});
