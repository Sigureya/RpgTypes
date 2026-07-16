import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  isSkillTypeSealed,
  TRAIT_ATTACK_SKILL,
  TRAIT_SKILL_ADD,
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
  sealedSkillTypes: number[];
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
      test("isSkillTypeSealed", () => {
        testCase.sealedSkillTypes.forEach((stypeId) => {
          const result = isSkillTypeSealed(testCase.traits, stypeId);
          expect(result, `stype:${stypeId}`).toBe(true);
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
        testCase.sealedSkillTypes.forEach((stypeId) => {
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
    sealedSkillTypes: [],
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
    sealedSkillTypes: [],
  },
  {
    name: "attack skill",
    traits: [
      { code: TRAIT_ATTACK_SKILL, dataId: 113, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 211, value: 0 },
      { code: TRAIT_ATTACK_SKILL, dataId: 257, value: 0 },
    ],
    addedSkills: [],
    attackSkillId: 257,
    sealedSkillTypes: [],
  },
];

describe("trait.skills", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
