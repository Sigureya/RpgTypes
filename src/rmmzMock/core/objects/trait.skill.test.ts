import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  isSkillIdSealed,
  isSkillTypeSealed,
  TRAIT_ATTACK_SKILL,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_SEAL,
  traitAddedSkills,
  traitsAttackSkillId,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

type BattlerBase = Pick<
  Rmmz_BattlerBase,
  | "traits"
  | "allTraits"
  | "traitsWithId"
  | "traitsSum"
  | "traitsPi"
  | "traitsSet"
>;

const createMockedBattlerBase = (
  traitItems: Trait[],
): MockedObject<BattlerBase> => {
  const allTraits = vi.fn((): Trait[] => {
    return traitItems;
  });
  const traits = vi.fn((code: number): Trait[] => {
    return Game_BattlerBase.prototype.traits.call(
      { allTraits: allTraits },
      code,
    );
  });
  const traitsWithId = vi.fn((code: number, id: number): Trait[] => {
    return Game_BattlerBase.prototype.traitsWithId.call(
      { allTraits: allTraits },
      code,
      id,
    );
  });

  const traitsPi = vi.fn((code: number, id: number): number => {
    return Game_BattlerBase.prototype.traitsPi.call(
      { traitsWithId: traitsWithId },
      code,
      id,
    );
  });

  const traitsSum = vi.fn((code: number, id: number): number => {
    return Game_BattlerBase.prototype.traitsSum.call(
      { traits: traits },
      code,
      id,
    );
  });
  const traitsSet = vi.fn((code: number): boolean => {
    return Game_BattlerBase.prototype.traitsSet.call({ traits: traits }, code);
  });

  return {
    allTraits,
    traitsSet,
    traits,
    traitsWithId,
    traitsPi,
    traitsSum,
  };
};

interface TestCase {
  name: string;
  traits: Trait[];
  addedSkills: number[];
  attackSkillId: number;
  sealedSkillTypes: { truery: number[]; falsey: number[] };
  sealedSkills: { truery: number[]; falsey: number[] };
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("functions", () => {
      test("traitAddedSkills", () => {
        const skills = traitAddedSkills(testCase.traits);
        expect(skills).toEqual(testCase.addedSkills);
      });
      test("traitAttackSkillId", () => {
        const attack = traitsAttackSkillId(testCase.traits);
        expect(attack).toEqual(testCase.attackSkillId);
      });

      describe("isSkillTypeSealed", () => {
        test("true", () => {
          testCase.sealedSkillTypes.truery.forEach((stypeId) => {
            const result = isSkillTypeSealed(testCase.traits, stypeId);
            expect(result, `stype:${stypeId}`).toBe(true);
          });
        });
        test("false", () => {
          testCase.sealedSkillTypes.falsey.forEach((stypeId) => {
            const result = isSkillTypeSealed(testCase.traits, stypeId);
            expect(result, `stype:${stypeId}`).toBe(false);
          });
        });
      });
      describe("isSkillSealed", () => {
        test("true", () => {
          testCase.sealedSkills.truery.forEach((stypeId) => {
            const result = isSkillIdSealed(testCase.traits, stypeId);
            expect(result, `stype:${stypeId}`).toBe(true);
          });
        });
        test("false", () => {
          testCase.sealedSkills.falsey.forEach((stypeId) => {
            const result = isSkillIdSealed(testCase.traits, stypeId);
            expect(result, `stype:${stypeId}`).toBe(false);
          });
        });
      });
    });
    describe("Game_BattlerBase", () => {
      test("addedSkills", () => {
        const battlerBase = createMockedBattlerBase(testCase.traits);
        const skills = Game_BattlerBase.prototype.addedSkills.call(battlerBase);
        expect(skills).toEqual(testCase.addedSkills);
        expect(battlerBase.allTraits).toHaveBeenCalledOnce();
        expect(battlerBase.traitsSet).toHaveBeenCalledWith(TRAIT_SKILL_ADD);
        expect(battlerBase.traitsSet).toHaveBeenCalledOnce();
      });
      test("attackSkillId", () => {
        const battlerBase = createMockedBattlerBase(testCase.traits);
        const attack =
          Game_BattlerBase.prototype.attackSkillId.call(battlerBase);
        expect(attack).toEqual(testCase.attackSkillId);
        expect(battlerBase.allTraits).toHaveBeenCalledOnce();
        expect(battlerBase.traitsSet).toHaveBeenCalledWith(TRAIT_ATTACK_SKILL);
        expect(battlerBase.traitsSet).toHaveBeenCalledOnce();
      });
      test("isSkillTypeSealed", () => {
        testCase.sealedSkillTypes.truery.forEach((stypeId) => {
          const battlerBase = createMockedBattlerBase(testCase.traits);
          const result = Game_BattlerBase.prototype.isSkillTypeSealed.call(
            battlerBase,
            stypeId,
          );
          expect(result, `stype:${stypeId}`).toBe(true);
          expect(battlerBase.traitsSet).toHaveBeenCalledWith(
            TRAIT_SKILL_TYPE_SEAL,
          );
          expect(battlerBase.traitsSet).toHaveBeenCalledOnce();
        });
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "empty traits",
    traits: [],
    addedSkills: [],
    attackSkillId: 1,
    sealedSkillTypes: {
      truery: [],
      falsey: [1, 2, 3, 4, 5],
    },
    sealedSkills: {
      truery: [],
      falsey: [1, 2, 3, 4, 5],
    },
  },
  {
    name: "added skills",
    traits: [
      { code: TRAIT_SKILL_ADD, dataId: 113, value: 0 },
      { code: TRAIT_SKILL_ADD, dataId: 211, value: 0 },
      { code: TRAIT_SKILL_ADD, dataId: 231, value: 0 },
    ],
    addedSkills: [113, 211, 231],
    attackSkillId: 1,
    sealedSkillTypes: {
      truery: [],
      falsey: [113, 211, 231],
    },
    sealedSkills: {
      truery: [],
      falsey: [113, 211, 231],
    },
  },
  {
    name: "attack skill",
    traits: [
      { code: TRAIT_ATTACK_SKILL, dataId: 183, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 351, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 257, value: 0 },
    ],
    addedSkills: [],
    attackSkillId: 351,
    sealedSkillTypes: {
      truery: [],
      falsey: [183, 257, 351],
    },
    sealedSkills: {
      truery: [],
      falsey: [183, 257, 351],
    },
  },
  {
    name: "attack skill",
    traits: [
      { code: TRAIT_ATTACK_SKILL, dataId: 485, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 651, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 653, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 657, value: 0 },
    ],
    addedSkills: [],
    attackSkillId: 657,
    sealedSkillTypes: {
      truery: [],
      falsey: [485, 651, 653, 657],
    },
    sealedSkills: {
      truery: [],
      falsey: [485, 651, 653, 657],
    },
  },
  {
    name: "sealed skill types",
    traits: [
      { code: TRAIT_SKILL_TYPE_SEAL, dataId: 14, value: 0 },
      { code: TRAIT_SKILL_TYPE_SEAL, dataId: 20, value: 0 },
      { code: TRAIT_SKILL_TYPE_SEAL, dataId: 24, value: 0 },
      { code: TRAIT_SKILL_TYPE_SEAL, dataId: 26, value: 0 },
    ],
    addedSkills: [],
    attackSkillId: 1,
    sealedSkillTypes: {
      truery: [14, 20, 24, 26],
      falsey: [],
    },
    sealedSkills: {
      truery: [],
      falsey: [14, 20, 24, 26],
    },
  },
  {
    name: "mixed traits",
    traits: [
      { code: TRAIT_SKILL_ADD, dataId: 185, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 183, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 351, value: 0 },
      { code: TRAIT_SKILL_ADD, dataId: 251, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 257, value: 0 },
      { code: TRAIT_SKILL_TYPE_SEAL, dataId: 14, value: 0 },
      { code: TRAIT_SKILL_ADD, dataId: 261, value: 0 },
      { code: TRAIT_SKILL_SEAL, dataId: 81, value: 0 },
    ],
    addedSkills: [185, 251, 261],
    attackSkillId: 351,
    sealedSkills: {
      truery: [81],
      falsey: [185, 251, 351],
    },
    sealedSkillTypes: {
      truery: [14],
      falsey: [185, 251, 351],
    },
  },
];

describe("trait.skills", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
