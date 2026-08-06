import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import type { Data_Skill, Data_UsableItem, Trait } from "@RpgTypes/rmmz/rpg";
import {
  attackSkillNumRepeats,
  makeSkillData,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_TIMES,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Action, Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import { Game_Battler, Game_Action } from "./rmmz_objects";

const createMockBattler = (traits: Trait[]) => {
  const battler = new Game_Battler();
  vi.spyOn(battler, "allTraits").mockReturnValue(traits);
  vi.spyOn(battler, "attackTimesAdd");
  return battler;
};

type FakeAction = Pick<Rmmz_Action, "item" | "isAttack" | "subject">;

const createFackAction = (
  subject: Rmmz_Battler,
  item: Data_UsableItem,
): MockedObject<FakeAction> => {
  return {
    subject: vi.fn(() => subject),
    item: vi.fn(() => item),
    isAttack: vi.fn(() => subject.attackSkillId() === item.id),
  };
};

interface TestCase {
  name: string;
  traits: Trait[];
  expected: number;
  item: Data_Skill;
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    describe("Game_Action", () => {
      test("result", () => {
        const subject = createMockBattler(testCase.traits);
        const action = createFackAction(subject, testCase.item);
        const result = Game_Action.prototype.numRepeats.call(action);
        expect(result).toBe(testCase.expected);
      });
      test("call", () => {
        const subject = createMockBattler(testCase.traits);
        const action = createFackAction(subject, testCase.item);
        Game_Action.prototype.numRepeats.call(action);
        expect(action.isAttack).toHaveBeenCalledOnce();
        expect(action.isAttack).toHaveBeenCalledWith();
        expect(action.item).toHaveBeenCalledOnce();
        expect(action.item).toHaveBeenCalledWith();
      });
    });
    describe("function", () => {
      test("attackSkillNumRepeats", () => {
        const result = attackSkillNumRepeats(testCase.item.id, testCase.traits);
        expect(result).toBe(testCase.expected);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    expected: 0,
    item: makeSkillData({ id: 12 }),
    name: "attack skill with no traits",
    traits: [],
  },
  {
    name: "attack skill with trait that adds 2 repeat",
    expected: 2,
    item: makeSkillData({ id: 17 }),
    traits: [
      { code: TRAIT_ATTACK_TIMES, dataId: 17, value: 2 },
      { code: TRAIT_ATTACK_SKILL, dataId: 17, value: 0 },
    ],
  },
  {
    name: "attack skill with trait that adds 2 repeat but not attack skill",
    expected: 0,
    item: makeSkillData({ id: 19 }),
    traits: [{ code: TRAIT_ATTACK_TIMES, dataId: 19, value: 2 }],
  },
];

describe("Game_Action numRepeats", () => {
  testCases.forEach(runTestCase);
});
