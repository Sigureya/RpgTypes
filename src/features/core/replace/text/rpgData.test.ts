import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Data_Actor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  NoteReadResult,
  NoteReplaceHandlers,
} from "@RpgTypes/rmmz";
import {
  makeActorData,
  makeClassData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
} from "@RpgTypes/rmmz";
import {
  replaceActorText,
  replaceClassText,
  replaceEnemyText,
  replaceItemText,
  replaceSkillText,
  replaceStateText,
} from "./rpgData";

const createHandler = (
  map: ReadonlyMap<string, string>,
): NoteReplaceHandlers => ({
  replaceText: (text: string) => map.get(text),
  isReplaceTargetNote: () => true,
});

const createMockHandler2 = (
  map: ReadonlyMap<string, string>,
): MockedObject<NoteReplaceHandlers> => ({
  replaceText: vi.fn((text: string) => map.get(text)),
  isReplaceTargetNote: vi.fn().mockRejectedValue(true),
});

describe("replaceActorText", () => {
  const actor: Data_Actor = makeActorData({
    name: "Hero",
    nickname: "Brave",
    profile: "A brave hero.",
    note: "<test:foo>",
    battlerName: "actor1",
    characterName: "Actor1",
    faceName: "Actor1",
  });
  const map = new Map([
    ["Hero", "Champion"],
    ["Brave", "Valiant"],
    ["A brave hero.", "A valiant champion."],
    ["foo", "bar"],
  ]);
  test("replaces actor text fields according to the translation map", () => {
    const handlers = createMockHandler2(map);
    const result = replaceActorText(actor, handlers);
    expect(result.name).toBe("Champion");
    expect(result.nickname).toBe("Valiant");
    expect(result.profile).toBe("A valiant champion.");
    expect(result.note).toContain("bar");
  });
  test("preserves all actor fields without adding or removing properties", () => {
    const handlers = createMockHandler2(map);
    const result = replaceActorText(actor, handlers);
    const keys = new Set(Object.keys(actor));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable actor text value", () => {
    const handlers = createMockHandler2(map);
    const noteItem: NoteReadResult = {
      key: "test",
      value: "foo",
    };
    replaceActorText(actor, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(actor.name);
    expect(handlers.replaceText).toHaveBeenCalledWith(actor.nickname);
    expect(handlers.replaceText).toHaveBeenCalledWith(actor.profile);
    expect(handlers.replaceText).toHaveBeenCalledWith("foo");
    expect(handlers.replaceText).toHaveBeenCalledTimes(4);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
  test("does not invoke", () => {
    const handlers = createMockHandler2(map);
    replaceActorText(actor, handlers);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(actor.battlerName);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(actor.characterName);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(actor.faceName);
  });
});

describe("replaceEnemyText", () => {
  const enemy: Data_Enemy = makeEnemyData({
    name: "Slime",
    note: "<test:goo>",
    battlerName: "enemy1",
  });
  const map = new Map([
    ["Slime", "Blob"],
    ["goo", "glue"],
  ]);
  test("replaces enemy fields using map", () => {
    const handlers = createHandler(map);
    const result = replaceEnemyText(enemy, handlers);
    expect(result.name).toBe("Blob");
    expect(result.note).toContain("glue");
  });
  test("preserves all enemy fields without adding or removing properties", () => {
    const handlers = createHandler(map);
    const result = replaceEnemyText(enemy, handlers);
    const keys = new Set(Object.keys(enemy));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable enemy text value", () => {
    const handlers = createMockHandler2(map);
    const noteItem: NoteReadResult = {
      key: "test",
      value: "goo",
    };
    replaceEnemyText(enemy, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(enemy.name);
    expect(handlers.replaceText).toHaveBeenCalledWith("goo");
    expect(handlers.replaceText).toHaveBeenCalledTimes(2);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
  test("does not invoke", () => {
    const handlers = createMockHandler2(map);
    replaceEnemyText(enemy, handlers);
    expect(handlers.replaceText).not.toHaveBeenCalledWith(enemy.battlerName);
  });
});

describe("replaceClassText", () => {
  const data: Data_Class = makeClassData({
    name: "Warrior",
    note: "<test:sword>",
  });
  const map = new Map([
    ["Warrior", "Fighter"],
    ["sword", "blade"],
  ]);
  test("replaces class fields using map", () => {
    const handlers = createHandler(map);
    const result: Data_Class = replaceClassText(data, handlers);
    expect(result.name).toBe("Fighter");
    expect(result.note).toContain("blade");
  });
  test("preserves all class fields without adding or removing properties", () => {
    const handlers = createHandler(map);
    const result = replaceClassText(data, handlers);
    const keys = new Set(Object.keys(data));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable class text value", () => {
    const handlers = createMockHandler2(map);
    const noteItem: NoteReadResult = {
      key: "test",
      value: "sword",
    };
    replaceClassText(data, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(data.name);
    expect(handlers.replaceText).toHaveBeenCalledWith("sword");
    expect(handlers.replaceText).toHaveBeenCalledTimes(2);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
});

describe("replaceSkillText", () => {
  const skill: Data_Skill = makeSkillData({
    name: "Fire",
    description: "Burns enemy.",
    message1: "Cast Fire!",
    message2: "Enemy burns.",
    note: "<test:hot>",
  });
  const map = new Map([
    ["Fire", "Flame"],
    ["Burns enemy.", "Scorches foe."],
    ["Cast Fire!", "Cast Flame!"],
    ["Enemy burns.", "Foe scorched."],
    ["hot", "heat"],
  ]);
  test("replaces skill fields using map", () => {
    const handlers = createHandler(map);
    const result: Data_Skill = replaceSkillText(skill, handlers);
    expect(result.name).toBe("Flame");
    expect(result.description).toBe("Scorches foe.");
    expect(result.message1).toBe("Cast Flame!");
    expect(result.message2).toBe("Foe scorched.");
    expect(result.note).toContain("heat");
  });
  test("preserves all skill fields without adding or removing properties", () => {
    const handlers = createHandler(map);
    const result = replaceSkillText(skill, handlers);
    const keys = new Set(Object.keys(skill));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable skill text value", () => {
    const handlers = createMockHandler2(map);
    const noteItem: NoteReadResult = {
      key: "test",
      value: "hot",
    };
    replaceSkillText(skill, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(skill.name);
    expect(handlers.replaceText).toHaveBeenCalledWith(skill.description);
    expect(handlers.replaceText).toHaveBeenCalledWith(skill.message1);
    expect(handlers.replaceText).toHaveBeenCalledWith(skill.message2);
    expect(handlers.replaceText).toHaveBeenCalledWith("hot");
    expect(handlers.replaceText).toHaveBeenCalledTimes(5);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
});

describe("replaceItemText", () => {
  const item: Data_Item = makeItemData({
    name: "Potion",
    description: "Restores HP.",
    note: "<test:heal>",
  });
  const map = new Map([
    ["Potion", "Elixir"],
    ["Restores HP.", "Recovers health."],
    ["heal", "restore"],
  ]);
  test("replaces item fields using map", () => {
    const handlers = createHandler(map);
    const result = replaceItemText(item, handlers);
    expect(result.name).toBe("Elixir");
    expect(result.description).toBe("Recovers health.");
    expect(result.note).toContain("restore");
  });
  test("preserves all item fields without adding or removing properties", () => {
    const handlers = createHandler(map);
    const result = replaceItemText(item, handlers);
    const keys = new Set(Object.keys(item));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable item text value", () => {
    const handlers = createMockHandler2(map);
    const noteItem: NoteReadResult = {
      key: "test",
      value: "heal",
    };
    replaceItemText(item, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(item.name);
    expect(handlers.replaceText).toHaveBeenCalledWith(item.description);
    expect(handlers.replaceText).toHaveBeenCalledWith("heal");
    expect(handlers.replaceText).toHaveBeenCalledTimes(3);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
});

describe("replaceStateText", () => {
  const state: Data_State = makeStateData({
    name: "Poison",
    message1: "You are poisoned.",
    message2: "Losing HP.",
    message3: "Poison fades.",
    message4: "Recovered.",
    note: "<test:toxic>",
  });
  const map = new Map([
    ["Poison", "Venom"],
    ["You are poisoned.", "You are envenomed."],
    ["Losing HP.", "HP drops."],
    ["Poison fades.", "Venom fades."],
    ["Recovered.", "Cured."],
    ["toxic", "venomous"],
  ]);
  test("replaces state fields using map", () => {
    const handlers = createHandler(map);
    const result = replaceStateText(state, handlers);
    expect(result.name).toBe("Venom");
    expect(result.message1).toBe("You are envenomed.");
    expect(result.message2).toBe("HP drops.");
    expect(result.message3).toBe("Venom fades.");
    expect(result.message4).toBe("Cured.");
    expect(result.note).toContain("venomous");
  });
  test("preserves all state fields without adding or removing properties", () => {
    const handlers = createHandler(map);
    const result = replaceStateText(state, handlers);
    const keys = new Set(Object.keys(state));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable state text value", () => {
    const handlers = createMockHandler2(map);

    const noteItem: NoteReadResult = {
      key: "test",
      value: "toxic",
    };
    replaceStateText(state, handlers);
    expect(handlers.replaceText).toHaveBeenCalledWith(state.name);
    expect(handlers.replaceText).toHaveBeenCalledWith(state.message1);
    expect(handlers.replaceText).toHaveBeenCalledWith(state.message2);
    expect(handlers.replaceText).toHaveBeenCalledWith(state.message3);
    expect(handlers.replaceText).toHaveBeenCalledWith(state.message4);
    expect(handlers.replaceText).toHaveBeenCalledWith("toxic");
    expect(handlers.replaceText).toHaveBeenCalledTimes(6);
    expect(handlers.isReplaceTargetNote).toBeCalledTimes(1);
    expect(handlers.isReplaceTargetNote).toHaveBeenCalledWith(noteItem);
  });
});
