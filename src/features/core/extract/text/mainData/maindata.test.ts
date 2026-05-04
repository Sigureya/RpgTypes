import { describe, expect, test } from "vitest";
import type {
  Data_Actor,
  Data_Enemy,
  Data_Armor,
  Data_Weapon,
  Data_Item,
  Data_Skill,
  Data_State,
} from "@RpgTypes/rmmz";
import {
  makeActorData,
  makeEnemyData,
  makeArmorData,
  makeWeaponData,
  makeItemData,
  makeSkillData,
  makeStateData,
} from "@RpgTypes/rmmz";
import {
  extractTextFromEnemy,
  extractTextFromArmor,
  extractTextFromWeapon,
  extractTextFromItem,
  extractTextFromSkill,
  extractTextFromState,
  extractTextFromActor,
} from "./mainData";
import type { TextExtractable, ExtractedText } from "./types";

describe("extractTextFromActor", () => {
  const expected: ExtractedText<Data_Actor> = {
    id: 1,
    name: "アクター",
    main: [
      { key: "name", value: "アクター", id: 1 },
      { key: "nickname", value: "ニックネーム", id: 1 },
      { key: "profile", value: "プロフィール", id: 1 },
    ],
    note: [],
  };
  const actor = makeActorData({
    nickname: "ニックネーム",
    name: "アクター",
    profile: "プロフィール",
    id: 1,
  });
  test("extract", () => {
    const result: ExtractedText<Data_Actor> = extractTextFromActor(actor);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromEnemy", () => {
  const enemy: TextExtractable<Data_Enemy> = makeEnemyData({
    name: "エネミー",
    id: 2,
  });
  const expected: ExtractedText<Data_Enemy> = {
    id: 2,
    name: "エネミー",
    main: [{ key: "name", value: "エネミー", id: 2 }],
    note: [],
  };
  test("extract", () => {
    const result: ExtractedText<Data_Enemy> = extractTextFromEnemy(enemy);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromArmor", () => {
  const armor = makeArmorData({
    name: "アーマー",
    description: "アーマー説明",
    id: 3,
  });
  const expected: ExtractedText<Data_Armor> = {
    id: 3,
    name: "アーマー",
    main: [
      { key: "name", value: "アーマー", id: 3 },
      { key: "description", value: "アーマー説明", id: 3 },
    ],
    note: [],
  };
  test("param", () => {
    expect(armor.name).toBe("アーマー");
    expect(armor.description).toBe("アーマー説明");
    expect(armor.id).toBe(3);
  });
  test("extract", () => {
    const result = extractTextFromArmor(armor);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromWeapon", () => {
  describe("", () => {
    const weapon = makeWeaponData({
      name: "ウェポン",
      description: "ウェポン説明",
      id: 4,
    });

    test("param", () => {
      expect(weapon.name).toBe("ウェポン");
      expect(weapon.description).toBe("ウェポン説明");
      expect(weapon.id).toBe(4);
    });
    const expected: ExtractedText<Data_Weapon> = {
      id: 4,
      name: "ウェポン",
      main: [
        { key: "name", value: "ウェポン", id: 4 },
        { key: "description", value: "ウェポン説明", id: 4 },
      ],
      note: [],
    };
    test("extract", () => {
      const result = extractTextFromWeapon(weapon);
      expect(result).toEqual(expected);
    });
  });
});

describe("extractTextFromItem", () => {
  const item = makeItemData({
    name: "アイテム",
    description: "アイテム説明",
    id: 5,
  });
  test("param", () => {
    expect(item.name).toBe("アイテム");
    expect(item.description).toBe("アイテム説明");
    expect(item.id).toBe(5);
  });
  const expected: ExtractedText<Data_Item> = {
    id: 5,
    name: "アイテム",
    main: [
      { key: "name", value: "アイテム", id: 5 },
      { key: "description", value: "アイテム説明", id: 5 },
    ],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromItem(item);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromSkill", () => {
  const skill = makeSkillData({
    name: "スキル",
    description: "スキル説明",
    message1: "msg1",
    message2: "msg2",
    id: 6,
  });
  test("param", () => {
    expect(skill.name).toBe("スキル");
    expect(skill.description).toBe("スキル説明");
    expect(skill.id).toBe(6);
  });
  const expected: ExtractedText<Data_Skill> = {
    id: 6,
    name: "スキル",
    main: [
      { key: "name", value: "スキル", id: 6 },
      { key: "description", value: "スキル説明", id: 6 },
      { key: "message1", value: "msg1", id: 6 },
      { key: "message2", value: "msg2", id: 6 },
    ],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromSkill(skill);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromState", () => {
  const state = makeStateData({
    name: "ステート",
    message1: "msg1",
    message2: "msg2",
    message3: "msg3",
    message4: "msg4",
    id: 7,
  });
  test("param", () => {
    expect(state.name).toBe("ステート");
    expect(state.id).toBe(7);

    expect(state.message1).toBe("msg1");
    expect(state.message2).toBe("msg2");
    expect(state.message3).toBe("msg3");
    expect(state.message4).toBe("msg4");
  });
  const expected: ExtractedText<Data_State> = {
    id: 7,
    name: "ステート",
    main: [
      { key: "name", value: "ステート", id: 7 },
      { key: "message1", value: "msg1", id: 7 },
      { key: "message2", value: "msg2", id: 7 },
      { key: "message3", value: "msg3", id: 7 },
      { key: "message4", value: "msg4", id: 7 },
    ],
    note: [],
  };

  test("extract", () => {
    const result = extractTextFromState(state);
    expect(result).toEqual(expected);
  });
});
