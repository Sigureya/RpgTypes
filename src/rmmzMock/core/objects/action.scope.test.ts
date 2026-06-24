import { describe, expect, test, vi } from "vitest";
import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
import {
  makeSkillData,
  SCOPE_TARGET_OPPONENT,
  scopeForUser,
  scopeIsForOne,
  scopeNeedsSelection,
  scopeIsForOpponent,
  scopeIsForFriend,
  scopeIsForDeadFriend,
  scopeIsForAliveFriend,
  scopeIsForEveryone,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Action_TargetTrait } from "@RpgTypes/rmmzRuntime/objects/core/battle/action/trait";
import { Game_Action } from "./rmmz_objects";

interface TestCase {
  skill: Data_Skill;
  trait: Record<keyof Rmmz_Action_TargetTrait, boolean>;
}

const runTestCase = (testCase: TestCase) => {
  describe(`Skill: ${testCase.skill.name}`, () => {
    describe("Rmmz_Action_TargetTrait", () => {
      vi.stubGlobal("$dataSkills", [null, testCase.skill]);
      const fackActor = {
        isActor: () => true,
        actorId: () => 1,
      };
      const action = new Game_Action(fackActor);
      vi.spyOn(action, "item").mockReturnValue(testCase.skill);
      test("isForUser", () => {
        expect(action.isForUser()).toBe(testCase.trait.isForUser);
      });
      test("isForOne", () => {
        expect(action.isForOne()).toBe(testCase.trait.isForOne);
      });
      test("needsSelection", () => {
        expect(action.needsSelection()).toBe(testCase.trait.needsSelection);
      });
      test("isForOpponent", () => {
        expect(action.isForOpponent()).toBe(testCase.trait.isForOpponent);
      });
      test("isForFriend", () => {
        expect(action.isForFriend()).toBe(testCase.trait.isForFriend);
      });
      test("isForDeadFriend", () => {
        expect(action.isForDeadFriend()).toBe(testCase.trait.isForDeadFriend);
      });
      test("isForAliveFriend", () => {
        expect(action.isForAliveFriend()).toBe(testCase.trait.isForAliveFriend);
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
];

testCases.forEach(runTestCase);
