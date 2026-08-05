import { describe, expect, test } from "vitest";
import {
  isSkillIdSealed,
  isSkillTypeSealed,
  traitAddedSkills,
  traitsAddedSkillTypes,
} from "./action";
import {
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
} from "./core";
import type { Trait } from "./types";

const MOCK_TRAITS: Trait[] = [
  { code: TRAIT_SKILL_TYPE_ADD, dataId: 1, value: 0 },
  { code: TRAIT_SKILL_TYPE_ADD, dataId: 2, value: 0 },
  { code: TRAIT_SKILL_TYPE_SEAL, dataId: 3, value: 0 },
  { code: TRAIT_SKILL_ADD, dataId: 4, value: 0 },
  { code: TRAIT_SKILL_ADD, dataId: 5, value: 0 },
  { code: TRAIT_SKILL_SEAL, dataId: 6, value: 0 },
];

describe("traitsAddedSkillTypes", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitsAddedSkillTypes(traits);
    expect(result).toEqual([]);
  });

  test("traits with skill types", () => {
    const traits: Trait[] = [
      { code: TRAIT_SKILL_TYPE_ADD, dataId: 1, value: 0 },
      { code: TRAIT_SKILL_TYPE_ADD, dataId: 2, value: 0 },
    ];
    const result = traitsAddedSkillTypes(traits);
    expect(result).toEqual([1, 2]);
  });

  test("traits with skill types and other traits", () => {
    const result = traitsAddedSkillTypes(MOCK_TRAITS);
    expect(result).toEqual([1, 2]);
  });
});

describe("isSkillTypeSealed", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = isSkillTypeSealed(traits, 1);
    expect(result).toBe(false);
  });

  test("matching skill type sealed", () => {
    const result = isSkillTypeSealed(MOCK_TRAITS, 3);
    expect(result).toBe(true);
  });

  test("non matching skill type", () => {
    const result = isSkillTypeSealed(MOCK_TRAITS, 9);
    expect(result).toBe(false);
  });
});

describe("traitAddedSkills", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = traitAddedSkills(traits);
    expect(result).toEqual([]);
  });

  test("traits with added skills", () => {
    const traits: Trait[] = [
      { code: TRAIT_SKILL_ADD, dataId: 4, value: 0 },
      { code: TRAIT_SKILL_ADD, dataId: 5, value: 0 },
    ];
    const result = traitAddedSkills(traits);
    expect(result).toEqual([4, 5]);
  });

  test("traits with added skills and other traits", () => {
    const result = traitAddedSkills(MOCK_TRAITS);
    expect(result).toEqual([4, 5]);
  });
});

describe("isSkillIdSealed", () => {
  test("empty traits", () => {
    const traits: Trait[] = [];
    const result = isSkillIdSealed(traits, 6);
    expect(result).toBe(false);
  });

  test("matching skill id sealed", () => {
    const result = isSkillIdSealed(MOCK_TRAITS, 6);
    expect(result).toBe(true);
  });

  test("non matching skill id", () => {
    const result = isSkillIdSealed(MOCK_TRAITS, 9);
    expect(result).toBe(false);
  });
});
