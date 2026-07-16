import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import { TRAIT_SKILL_ADD, traitAddedSkills } from "@RpgTypes/rmmz/rpg";
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
    return Game_BattlerBase.prototype.allTraits.call({
      traitObjects: vi.fn().mockReturnValue(traitItems),
    });
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
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("functions", () => {
      test("traitAddedSkills", () => {
        const skills = traitAddedSkills(testCase.traits);
        expect(skills).toEqual(testCase.addedSkills);
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
        expect(battlerBase.traits).toHaveBeenCalledWith(TRAIT_SKILL_ADD);
        expect(battlerBase.traits).toHaveBeenCalledOnce();
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "empty traits",
    traits: [],
    addedSkills: [],
  },
];

describe("trait.skills", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
