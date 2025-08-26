import { describe, expect, test } from "vitest";
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

describe("replaceActorText", () => {
  test("replaces actor fields using map", () => {
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
    const result = replaceActorText(actor, map);
    expect(result.name).toBe("Champion");
    expect(result.nickname).toBe("Valiant");
    expect(result.profile).toBe("A valiant champion.");
    expect(result.note).toContain("bar");
  });
});

describe("replaceEnemyText", () => {
  test("replaces enemy fields using map", () => {
    const enemy: Data_Enemy = makeEnemyData({
      name: "Slime",
      note: "<test:goo>",
    });
    const map = new Map([
      ["Slime", "Blob"],
      ["goo", "glue"],
    ]);
    const result = replaceEnemyText(enemy, map);
    expect(result.name).toBe("Blob");
    expect(result.note).toContain("glue");
  });
});

describe("replaceClassText", () => {
  test("replaces class fields using map", () => {
    const data: Data_Class = makeClassData({
      name: "Warrior",
      note: "<test:sword>",
    });
    const map = new Map([
      ["Warrior", "Fighter"],
      ["sword", "blade"],
    ]);
    const result = replaceClassText(data, map);
    expect(result.name).toBe("Fighter");
    expect(result.note).toContain("blade");
  });
});

describe("replaceSkillText", () => {
  test("replaces skill fields using map", () => {
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
    const result = replaceSkillText(skill, map);
    expect(result.name).toBe("Flame");
    expect(result.description).toBe("Scorches foe.");
    expect(result.message1).toBe("Cast Flame!");
    expect(result.message2).toBe("Foe scorched.");
    expect(result.note).toContain("heat");
  });
});

describe("replaceItemText", () => {
  test("replaces item fields using map", () => {
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
    const result = replaceItemText(item, map);
    expect(result.name).toBe("Elixir");
    expect(result.description).toBe("Recovers health.");
    expect(result.note).toContain("restore");
  });
});

describe("replaceStateText", () => {
  test("replaces state fields using map", () => {
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
    const result = replaceStateText(state, map);
    expect(result.name).toBe("Venom");
    expect(result.message1).toBe("You are envenomed.");
    expect(result.message2).toBe("HP drops.");
    expect(result.message3).toBe("Venom fades.");
    expect(result.message4).toBe("Cured.");
    expect(result.note).toContain("venomous");
  });
});
