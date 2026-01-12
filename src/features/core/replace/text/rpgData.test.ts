import type { MockedFunction } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Data_Actor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
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

const createMockFn = (
  map: ReadonlyMap<string, string>
): MockedFunction<(key: string) => string | undefined> => {
  return vi.fn((key: string) => map.get(key));
};

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
    const result = replaceActorText(actor, (key: string) => map.get(key));
    expect(result.name).toBe("Champion");
    expect(result.nickname).toBe("Valiant");
    expect(result.profile).toBe("A valiant champion.");
    expect(result.note).toContain("bar");
  });
  test("preserves all actor fields without adding or removing properties", () => {
    const result = replaceActorText(actor, (key: string) => map.get(key));
    const keys = new Set(Object.keys(actor));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable actor text value", () => {
    const mockFn = createMockFn(map);
    replaceActorText(actor, mockFn);
    expect(mockFn).toHaveBeenCalledWith(actor.name);
    expect(mockFn).toHaveBeenCalledWith(actor.nickname);
    expect(mockFn).toHaveBeenCalledWith(actor.profile);
    expect(mockFn).toHaveBeenCalledWith("foo");
    expect(mockFn).not.toHaveBeenCalledWith(actor.battlerName);
    expect(mockFn).not.toHaveBeenCalledWith(actor.characterName);
    expect(mockFn).not.toHaveBeenCalledWith(actor.faceName);
    expect(mockFn).toHaveBeenCalledTimes(4);
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
    const result = replaceEnemyText(enemy, (key: string) => map.get(key));
    expect(result.name).toBe("Blob");
    expect(result.note).toContain("glue");
  });
  test("preserves all enemy fields without adding or removing properties", () => {
    const result = replaceEnemyText(enemy, (key: string) => map.get(key));
    const keys = new Set(Object.keys(enemy));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable enemy text value", () => {
    const mockFn = createMockFn(map);
    replaceEnemyText(enemy, mockFn);
    expect(mockFn).toHaveBeenCalledWith(enemy.name);
    expect(mockFn).toHaveBeenCalledWith("goo");
    expect(mockFn).not.toHaveBeenCalledWith(enemy.battlerName);
    expect(mockFn).toHaveBeenCalledTimes(2);
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
    const result: Data_Class = replaceClassText(data, (key: string) =>
      map.get(key)
    );
    expect(result.name).toBe("Fighter");
    expect(result.note).toContain("blade");
  });
  test("preserves all class fields without adding or removing properties", () => {
    const result = replaceClassText(data, (key: string) => map.get(key));
    const keys = new Set(Object.keys(data));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable class text value", () => {
    const mockFn = createMockFn(map);
    replaceClassText(data, mockFn);
    expect(mockFn).toHaveBeenCalledWith(data.name);
    expect(mockFn).toHaveBeenCalledWith("sword");
    expect(mockFn).toHaveBeenCalledTimes(2);
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
    const result: Data_Skill = replaceSkillText(skill, (key: string) =>
      map.get(key)
    );
    expect(result.name).toBe("Flame");
    expect(result.description).toBe("Scorches foe.");
    expect(result.message1).toBe("Cast Flame!");
    expect(result.message2).toBe("Foe scorched.");
    expect(result.note).toContain("heat");
  });
  test("preserves all skill fields without adding or removing properties", () => {
    const result = replaceSkillText(skill, (key: string) => map.get(key));
    const keys = new Set(Object.keys(skill));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
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
    const result = replaceItemText(item, (key: string) => map.get(key));
    expect(result.name).toBe("Elixir");
    expect(result.description).toBe("Recovers health.");
    expect(result.note).toContain("restore");
  });
  test("preserves all item fields without adding or removing properties", () => {
    const result = replaceItemText(item, (key: string) => map.get(key));
    const keys = new Set(Object.keys(item));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable item text value", () => {
    const mockFn = createMockFn(map);
    replaceItemText(item, mockFn);
    expect(mockFn).toHaveBeenCalledWith(item.name);
    expect(mockFn).toHaveBeenCalledWith(item.description);
    expect(mockFn).toHaveBeenCalledWith("heal");
    expect(mockFn).toHaveBeenCalledTimes(3);
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
    const result = replaceStateText(state, (key: string) => map.get(key));
    expect(result.name).toBe("Venom");
    expect(result.message1).toBe("You are envenomed.");
    expect(result.message2).toBe("HP drops.");
    expect(result.message3).toBe("Venom fades.");
    expect(result.message4).toBe("Cured.");
    expect(result.note).toContain("venomous");
  });
  test("preserves all state fields without adding or removing properties", () => {
    const result = replaceStateText(state, (key: string) => map.get(key));
    const keys = new Set(Object.keys(state));
    const expectedKeys = new Set(Object.keys(result));
    expect(expectedKeys).toEqual(keys);
  });
  test("invokes the mapper for each translatable state text value", () => {
    const mockFn = createMockFn(map);
    replaceStateText(state, mockFn);
    expect(mockFn).toHaveBeenCalledWith(state.name);
    expect(mockFn).toHaveBeenCalledWith(state.message1);
    expect(mockFn).toHaveBeenCalledWith(state.message2);
    expect(mockFn).toHaveBeenCalledWith(state.message3);
    expect(mockFn).toHaveBeenCalledWith(state.message4);
    expect(mockFn).toHaveBeenCalledWith("toxic");
    expect(mockFn).toHaveBeenCalledTimes(6);
  });
});
