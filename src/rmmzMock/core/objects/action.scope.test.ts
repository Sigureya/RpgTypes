import { describe, expect, test, vi } from "vitest";
import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
import {
  makeSkillData,
  SCOPE_EACH_OPPONENT,
  SCOPE_TARGET_ALIVE_FRIEND,
  SCOPE_TARGET_OPPONENT,
  scopeForUser,
  scopeIsForAliveFriend,
  scopeIsForDeadFriend,
  scopeIsForEveryone,
  scopeIsForFriend,
  scopeIsForOne,
  scopeIsForOpponent,
  scopeNeedsSelection,
} from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Action,
  Rmmz_Action_TargetTrait,
} from "@RpgTypes/rmmzRuntime";
import { Game_Action } from "./rmmz_objects";

interface FackActor {
  isActor: () => boolean;
  actorId: () => number;
}
interface TestCase {
  skill: Data_Skill;
  trait: Record<keyof Rmmz_Action_TargetTrait, boolean>;
}

const createAction = (skill: Data_Skill) => {
  const fackActor: FackActor = {
    isActor: () => true,
    actorId: () => 1,
  };
  const action: Rmmz_Action<FackActor> = new Game_Action(fackActor);
  vi.spyOn(action, "item").mockReturnValue(skill);
  return action;
};

const runTestCase = (testCase: TestCase) => {
  describe(`Skill: ${testCase.skill.name}`, () => {
    describe("Rmmz_Action_TargetTrait", () => {
      vi.stubGlobal("$dataSkills", [null, testCase.skill]);
      test("isForUser", () => {
        const action = createAction(testCase.skill);
        expect(action.isForUser()).toBe(testCase.trait.isForUser);
      });
      test("isForOne", () => {
        const action = createAction(testCase.skill);
        expect(action.isForOne()).toBe(testCase.trait.isForOne);
      });
      test("needsSelection", () => {
        const action = createAction(testCase.skill);
        expect(action.needsSelection()).toBe(testCase.trait.needsSelection);
      });
      test("isForOpponent", () => {
        const action = createAction(testCase.skill);
        expect(action.isForOpponent()).toBe(testCase.trait.isForOpponent);
      });
      test("isForFriend", () => {
        const action = createAction(testCase.skill);
        expect(action.isForFriend()).toBe(testCase.trait.isForFriend);
      });
      test("isForDeadFriend", () => {
        const action = createAction(testCase.skill);
        expect(action.isForDeadFriend()).toBe(testCase.trait.isForDeadFriend);
      });
      test("isForAliveFriend", () => {
        const action = createAction(testCase.skill);
        expect(action.isForAliveFriend()).toBe(testCase.trait.isForAliveFriend);
      });
      test("isForAll", () => {
        const action = createAction(testCase.skill);
        expect(action.isForAll()).toBe(testCase.trait.isForAll);
      });
      test("isForEveryone", () => {
        const action = createAction(testCase.skill);
        expect(action.isForEveryone()).toBe(testCase.trait.isForEveryone);
      });
      test("isForRandom", () => {
        const action = createAction(testCase.skill);
        expect(action.isForRandom()).toBe(testCase.trait.isForRandom);
      });
    });

    describe("function", () => {
      test("scopeForUser", () => {
        expect(scopeForUser(testCase.skill)).toBe(testCase.trait.isForUser);
      });
      test("scopeIsForOne", () => {
        expect(scopeIsForOne(testCase.skill)).toBe(testCase.trait.isForOne);
      });
      test("scopeNeedsSelection", () => {
        expect(scopeNeedsSelection(testCase.skill)).toBe(
          testCase.trait.needsSelection,
        );
      });
      test("scopeIsForOpponent", () => {
        expect(scopeIsForOpponent(testCase.skill)).toBe(
          testCase.trait.isForOpponent,
        );
      });
      test("scopeIsForFriend", () => {
        expect(scopeIsForFriend(testCase.skill)).toBe(
          testCase.trait.isForFriend,
        );
      });
      test("scopeIsForDeadFriend", () => {
        expect(scopeIsForDeadFriend(testCase.skill)).toBe(
          testCase.trait.isForDeadFriend,
        );
      });
      test("scopeIsForAliveFriend", () => {
        expect(scopeIsForAliveFriend(testCase.skill)).toBe(
          testCase.trait.isForAliveFriend,
        );
      });
      test("scopeIsForEveryone", () => {
        expect(scopeIsForEveryone(testCase.skill)).toBe(
          testCase.trait.isForEveryone,
        );
      });
    });
    vi.unstubAllGlobals();
  });
};

const testCases: TestCase[] = [
  {
    skill: makeSkillData({
      name: "scopeForUser",
      scope: SCOPE_TARGET_OPPONENT,
    }),
    trait: {
      needsSelection: true,
      isForOpponent: true,
      isForFriend: false,
      isForEveryone: false,
      isForAliveFriend: false,
      isForAll: false,
      isForDeadFriend: false,
      isForUser: false,
      isForOne: true,
      isForRandom: false,
    },
  },
  {
    skill: makeSkillData({
      name: "scope each opponent",
      scope: SCOPE_EACH_OPPONENT,
    }),
    trait: {
      needsSelection: false,
      isForOpponent: true,
      isForFriend: false,
      isForEveryone: false,
      isForAliveFriend: false,
      isForAll: true,
      isForDeadFriend: false,
      isForUser: false,
      isForOne: false,
      isForRandom: false,
    },
  },
  {
    skill: makeSkillData({
      name: "scopeForFriend",
      scope: SCOPE_TARGET_ALIVE_FRIEND,
    }),
    trait: {
      needsSelection: true,
      isForOpponent: false,
      isForFriend: true,
      isForEveryone: false,
      isForAliveFriend: true,
      isForAll: false,
      isForDeadFriend: false,
      isForUser: false,
      isForOne: true,
      isForRandom: false,
    },
  },
];

testCases.forEach(runTestCase);
