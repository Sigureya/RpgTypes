import { describe, test, expect } from "vitest";
import {
  traitAttackElements,
  traitAttackSkillId,
  traitAttackStateRate,
  traitAttackStates,
  traitAttackTimesAdd,
  traitAtttackSpeed,
} from "./attack";
import {
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
} from "./core";
import type { Trait } from "./types";

const MOCK_TRAITS: Trait[] = [
  { code: TRAIT_ATTACK_ELEMENT, dataId: 1, value: 0 },
  { code: TRAIT_ATTACK_ELEMENT, dataId: 2, value: 0 },
  { code: TRAIT_ATTACK_STATE, dataId: 3, value: 0.3 },
  { code: TRAIT_ATTACK_STATE, dataId: 4, value: 0.4 },
  { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 1.5 },
  { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 2.5 },
  { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 1.5 },
  { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 2.5 },
  { code: TRAIT_ATTACK_SKILL, dataId: 5, value: 0 },
  { code: TRAIT_ATTACK_SKILL, dataId: 10, value: 0 },
];

describe("traitAttackElements", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitAttackElements(traits);
    expect(result).toEqual([]);
  });
  test("traits with attack elements", () => {
    const traits: Trait[] = [
      { code: TRAIT_ATTACK_ELEMENT, dataId: 1, value: 0 },
      { code: TRAIT_ATTACK_ELEMENT, dataId: 2, value: 0 },
    ];
    const result = traitAttackElements(traits);
    expect(result).toEqual([1, 2]);
  });
  test("traits with attack elements and other traits", () => {
    const result = traitAttackElements(MOCK_TRAITS);
    expect(result).toEqual([1, 2]);
  });
});

describe("state", () => {
  const stateTraits: Trait[] = [
    { code: TRAIT_ATTACK_STATE, dataId: 3, value: 2.75 },
    { code: TRAIT_ATTACK_STATE, dataId: 4, value: 2.4 },
    { code: TRAIT_ATTACK_STATE, dataId: 5, value: 3.2 },
    { code: TRAIT_ATTACK_STATE, dataId: 8, value: 3.0 },
  ];
  describe("traitAttackStates", () => {
    test("empty traits", () => {
      const traits: Trait[] = [];
      const result = traitAttackStates(traits);
      expect(result).toEqual([]);
    });
    test("traits with attack states", () => {
      const result = traitAttackStates(stateTraits);
      expect(result).toEqual([3, 4, 5, 8]);
    });
    test("traits with attack states and other traits", () => {
      const result = traitAttackStates(MOCK_TRAITS);
      expect(result).toEqual([3, 4]);
    });
  });
  describe("traitAttackStateRate", () => {
    test("stateId 3", () => {
      const result = traitAttackStateRate(stateTraits, 3);
      expect(result).toBeCloseTo(2.75);
    });
    test("stateId 4", () => {
      const result = traitAttackStateRate(stateTraits, 4);
      expect(result).toBeCloseTo(2.4);
    });
    test("stateId 5", () => {
      const result = traitAttackStateRate(stateTraits, 5);
      expect(result).toBeCloseTo(3.2);
    });
    test("stateId 8", () => {
      const result = traitAttackStateRate(stateTraits, 8);
      expect(result).toBeCloseTo(3.0);
    });
    test("stateId 9 (not present)", () => {
      const result = traitAttackStateRate(stateTraits, 9);
      expect(result).toBeCloseTo(0);
    });
    test("traits with attack states and other traits", () => {
      const result = traitAttackStateRate(MOCK_TRAITS, 3);
      expect(result).toBeCloseTo(0.3);
    });
  });
});

describe("traitAtttackSpeed", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitAtttackSpeed(traits);
    expect(result).toBeCloseTo(0);
  });
  test("traits with attack speed", () => {
    const traits: Trait[] = [
      { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 1.5 },
      { code: TRAIT_ATTACK_SPEED, dataId: 0, value: 2.5 },
    ];
    const result = traitAtttackSpeed(traits);
    expect(result).toBeCloseTo(4.0);
  });
  test("traits with attack speed and other traits", () => {
    const result = traitAtttackSpeed(MOCK_TRAITS);
    expect(result).toBeCloseTo(4.0);
  });
});

describe("traitAttackTimesAdd", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitAttackTimesAdd(traits);
    expect(result).toBeCloseTo(0);
  });
  test("traits with attack times", () => {
    const traits: Trait[] = [
      { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 1.5 },
      { code: TRAIT_ATTACK_TIMES, dataId: 0, value: 2.5 },
    ];
    const result = traitAttackTimesAdd(traits);
    expect(result).toBeCloseTo(4.0);
  });
});

describe("traitAttackSkillId", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitAttackSkillId(traits);
    expect(result).toBe(1);
  });
  test("traits with attack skill", () => {
    const traits: Trait[] = [
      { code: TRAIT_ATTACK_SKILL, dataId: 5, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 10, value: 0 },
    ];
    const result = traitAttackSkillId(traits);
    expect(result).toBe(10);
  });
});
