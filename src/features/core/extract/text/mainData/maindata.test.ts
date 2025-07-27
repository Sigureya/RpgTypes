import { describe, expect, test } from "vitest";
import * as RpgTypes from "@RpgTypes/rmmz";
import {
  extractTextFromEnemy,
  extractTextFromArmor,
  extractTextFromWeapon,
  extractTextFromItem,
  extractTextFromSkill,
  extractTextFromState,
  extractTextFromActor,
} from "./mainData";
import type { ExtractedText, TextExtractable } from "./types";

describe("extractTextFromActor", () => {
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "アクター", id: 1 },
      { key: "nickname", text: "ニックネーム", id: 1 },
      { key: "profile", text: "プロフィール", id: 1 },
    ],
    note: [],
  };
  const actor: TextExtractable<RpgTypes.Data_Actor> = RpgTypes.makeActorData({
    nickname: "ニックネーム",
    name: "アクター",
    profile: "プロフィール",
    id: 1,
  });
  test("extract", () => {
    const result: ExtractedText = extractTextFromActor(actor);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromEnemy", () => {
  const enemy: TextExtractable<RpgTypes.Data_Enemy> = RpgTypes.makeEnemyData({
    name: "エネミー",
    id: 2,
  });
  const expected: ExtractedText = {
    main: [{ key: "name", text: "エネミー", id: 2 }],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromEnemy(enemy);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromArmor", () => {
  const armor = RpgTypes.makeArmorData({
    name: "アーマー",
    description: "アーマー説明",
    id: 3,
  });
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "アーマー", id: 3 },
      { key: "description", text: "アーマー説明", id: 3 },
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
  const weapon = RpgTypes.makeWeaponData({
    name: "ウェポン",
    description: "ウェポン説明",
    id: 4,
  });

  test("param", () => {
    expect(weapon.name).toBe("ウェポン");
    expect(weapon.description).toBe("ウェポン説明");
    expect(weapon.id).toBe(4);
  });
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "ウェポン", id: 4 },
      { key: "description", text: "ウェポン説明", id: 4 },
    ],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromWeapon(weapon);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromItem", () => {
  const item = RpgTypes.makeItemData({
    name: "アイテム",
    description: "アイテム説明",
    id: 5,
  });
  test("param", () => {
    expect(item.name).toBe("アイテム");
    expect(item.description).toBe("アイテム説明");
    expect(item.id).toBe(5);
  });
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "アイテム", id: 5 },
      { key: "description", text: "アイテム説明", id: 5 },
    ],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromItem(item);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromSkill", () => {
  const skill = RpgTypes.makeSkillData({
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
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "スキル", id: 6 },
      { key: "description", text: "スキル説明", id: 6 },
      { key: "message1", text: "msg1", id: 6 },
      { key: "message2", text: "msg2", id: 6 },
    ],
    note: [],
  };
  test("extract", () => {
    const result = extractTextFromSkill(skill);
    expect(result).toEqual(expected);
  });
});

describe("extractTextFromState", () => {
  const state = RpgTypes.makeStateData({
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
  const expected: ExtractedText = {
    main: [
      { key: "name", text: "ステート", id: 7 },
      { key: "message1", text: "msg1", id: 7 },
      { key: "message2", text: "msg2", id: 7 },
      { key: "message3", text: "msg3", id: 7 },
      { key: "message4", text: "msg4", id: 7 },
    ],
    note: [],
  };

  test("extract", () => {
    const result = extractTextFromState(state);
    expect(result).toEqual(expected);
  });
});
