import { describe, test, expect } from "vitest";
import {
  isDataActor,
  isDataArmor,
  isDataClass,
  isDataEnemy,
  isDataState,
  isDataWeapon,
} from "./validate";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_State,
  Data_Weapon,
} from "./traitContainers";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeEnemyData,
  makeStateData,
} from "./traitContainers";

describe("isDataActor", () => {
  test("Valid actor2", () => {
    const actor: Data_Actor = makeActorData();
    expect(isDataActor(actor)).toBe(true);
  });
  test("Valid actor", () => {
    const actor: Data_Actor = {
      name: "John Doe",
      id: 1,
      nickname: "Hero",
      battlerName: "Battler",
      characterName: "Character",
      characterIndex: 0,
      faceName: "Face",
      faceIndex: 0,
      classId: 1,
      initialLevel: 1,
      maxLevel: 99,
      profile: "This is a test profile.",
      equips: [],
      note: "This is a test note.",
      traits: [
        {
          code: 3,
          dataId: 400,
          value: 485,
        },
      ],
    };
    expect(isDataActor(actor)).toBe(true);
  });

  test("Invalid actor", () => {
    const invalidActor = { name: 123 }; // Invalid name
    expect(isDataActor(invalidActor)).toBe(false);
    expect(isDataActor({})).toBe(false);
    expect(isDataActor(null)).toBe(false);
    expect(isDataActor(undefined)).toBe(false);
  });
});

describe("isDataArmor", () => {
  test("Valid armor2", () => {
    const armor: Data_Armor = makeArmorData();
    expect(isDataArmor(armor)).toBe(true);
  });
  test("Valid armor", () => {
    const armor: Data_Armor = {
      id: 1,
      name: "Iron Armor",
      iconIndex: 0,
      description: "A sturdy iron armor.",
      etypeId: 1,
      price: 1000,
      traits: [
        {
          code: 2,
          dataId: 7,
          value: 189,
        },
      ],
      atypeId: 1,
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      note: "This is a test note.",
    };
    expect(isDataArmor(armor)).toBe(true);
  });
  test("Invalid armor", () => {
    const invalidArmor = { name: 123 }; // Invalid name
    expect(isDataArmor(invalidArmor)).toBe(false);
    expect(isDataArmor({})).toBe(false);
    expect(isDataArmor(null)).toBe(false);
    expect(isDataArmor(undefined)).toBe(false);
  });
});

describe("isDataWeapon", () => {
  test("Valid weapon", () => {
    const weapon: Data_Weapon = {
      id: 1,
      name: "Iron Sword",
      iconIndex: 0,
      description: "A sharp iron sword.",
      etypeId: 1,
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      price: 1000,
      traits: [
        {
          code: 0,
          dataId: 181,
          value: 500,
        },
      ],
      wtypeId: 1,
      animationId: 1,
      damage: {
        type: 1,
        elementId: 2,
        formula: "a.atk * 4",
        variance: 0,
        critical: false,
      },

      note: "This is a test note.",
    };
    expect(isDataWeapon(weapon)).toBe(true);
  });
  test("Invalid weapon", () => {
    const invalidWeapon = { name: 123 }; // Invalid name
    expect(isDataWeapon(invalidWeapon)).toBe(false);
    expect(isDataWeapon({})).toBe(false);
    expect(isDataWeapon(null)).toBe(false);
    expect(isDataWeapon(undefined)).toBe(false);
  });
});

describe("isDataEnemy", () => {
  test("Valid enemy2", () => {
    const enemy: Data_Enemy = makeEnemyData();
    expect(isDataEnemy(enemy)).toBe(true);
  });
  test("Valid enemy", () => {
    const enemy: Data_Enemy = {
      name: "Goblin",
      id: 1,
      battlerName: "GoblinBattler",
      battlerHue: 0,
      exp: 100,
      gold: 50,
      note: "This is a test note.",
      params: [100, 50, 20, 10, 5, 5, 5, 5], // Example params
      dropItems: [
        {
          kind: 0,
          dataId: 1,
          denominator: 1,
        },
      ],
      traits: [
        {
          code: 0,
          dataId: 1,
          value: 2,
        },
      ],
      actions: [
        {
          conditionParam1: 0,
          conditionParam2: 0,
          conditionType: 0,
          skillId: 1,
          rating: 5,
        },
      ],
    };
    expect(isDataEnemy(enemy)).toBe(true);
  });
  test("Invalid enemy", () => {
    const invalidEnemy = { name: 123 }; // Invalid name
    expect(isDataEnemy(invalidEnemy)).toBe(false);
    expect(isDataEnemy({})).toBe(false);
    expect(isDataEnemy(null)).toBe(false);
    expect(isDataEnemy(undefined)).toBe(false);
  });
});

describe("isDataState", () => {
  test("Valid state2", () => {
    const state: Data_State = makeStateData();
    expect(isDataState(state)).toBe(true);
  });
  test("Valid state", () => {
    const state: Data_State = {
      id: 1,
      name: "Poison",
      iconIndex: 0,
      restriction: 0,
      priority: 0,
      removeAtBattleEnd: true,
      removeByDamage: true,
      autoRemovalTiming: 0,
      maxTurns: 3,
      minTurns: 1,
      message1: "This is a test message.",
      message2: "This is another test message.",
      message3: "This is a third test message.",
      message4: "This is a fourth test message.",
      messageType: 0,
      releaseByDamage: true,
      traits: [
        {
          code: 0,
          dataId: 1,
          value: 2,
        },
      ],
      note: "This is a test note.",
      motion: 0,
      chanceByDamage: 0,
      overlay: 0,
      removeByRestriction: false,
      removeByWalking: false,
      stepsToRemove: 0,
    };
    expect(isDataState(state)).toBe(true);
  });
  test("Invalid state", () => {
    const invalidState = { name: 123 }; // Invalid name
    expect(isDataState(invalidState)).toBe(false);
    expect(isDataState({})).toBe(false);
    expect(isDataState(null)).toBe(false);
    expect(isDataState(undefined)).toBe(false);
  });
});

describe("isDataClass", () => {
  test("Valid class2", () => {
    const class_: Data_Class = makeClassData();
    expect(isDataClass(class_)).toBe(true);
  });
  test("Valid class", () => {
    const class_: Data_Class = {
      id: 1,
      name: "Warrior",
      expParams: [],
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      traits: [{ code: 0, dataId: 1, value: 2 }],
      note: "This is a test note.",
      learnings: [
        {
          level: 1,
          skillId: 1,
          note: "skill note.",
        },
      ],
    };
    expect(isDataClass(class_)).toBe(true);
  });
});
