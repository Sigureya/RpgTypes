import { test, expect, describe } from "vitest";
import type { Data_NamedItem, FormatCompiled } from "src/namedItemSource";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
  GameData,
  NormalLabel,
} from "src/rpg";
import {
  makeActorData,
  makeArmorData,
  makeClassData,
  makeCommonEventData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
  makeWeaponData,
  resolveItemEffectLabels,
  LABEL_SET_ITEM_EFFECT,
  LABEL_SET_TRAIT,
  LABEL_SET_DATA,
} from "src/rpg";
import {
  EFFECT_ADD_BUFF,
  EFFECT_ADD_DEBUFF,
  EFFECT_ADD_STATE,
  EFFECT_REMOVE_BUFF,
  EFFECT_REMOVE_DEBUFF,
  EFFECT_REMOVE_STATE,
  EFFECT_COMMON_EVENT,
  EFFECT_GAIN_TP,
  EFFECT_GROW,
  EFFECT_LEARN_SKILL,
  EFFECT_RECOVER_HP,
  EFFECT_RECOVER_MP,
  EFFECT_SPECIAL,
} from "src/rpg/data/main/usableItems/core/itemEffect/effectCode";
import { DEFAULT_SYSTEM_LABELS_DATA_TYPES } from "src/system";
import type { System_DataNames } from "src/system/core";
import { build } from "vite";
import {
  buildReferenceItemSources,
  compileItemEffectDisplayData,
} from "./formatTraits";

const mockGameData: Record<keyof GameData, Data_NamedItem[]> = {
  skills: [
    { id: 1, name: "Fireball" },
    { id: 2, name: "Ice Spike" },
    { id: 3, name: "Lightning Bolt" },
  ],
  states: [
    { id: 1, name: "poison" },
    { id: 2, name: "silence" },
  ],
  actors: [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
  ],
  armors: [
    { id: 1, name: "Leather Armor" },
    { id: 2, name: "Iron Shield" },
  ],
  weapons: [
    { id: 1, name: "Sword" },
    { id: 2, name: "Axe" },
  ],
  classes: [
    { id: 1, name: "Warrior" },
    { id: 2, name: "Mage" },
  ],
  enemies: [
    { id: 1, name: "Goblin" },
    { id: 2, name: "Orc" },
    { id: 3, name: "Dragon" },
  ],
  items: [],
  commonEvents: [],
};
const makeGameData = (
  data: Record<keyof GameData, Data_NamedItem[]>
): GameData => ({
  skills: data.skills.map(makeSkillData) satisfies Data_Skill[],
  states: data.states.map(makeStateData) satisfies Data_State[],
  actors: data.actors.map(makeActorData) satisfies Data_Actor[],
  armors: data.armors.map(makeArmorData) satisfies Data_Armor[],
  weapons: data.weapons.map(makeWeaponData) satisfies Data_Weapon[],
  classes: data.classes.map(makeClassData) satisfies Data_Class[],
  enemies: data.enemies.map(makeEnemyData) satisfies Data_Enemy[],
  items: data.items.map(makeItemData) satisfies Data_Item[],
  commonEvents: data.commonEvents.map(
    makeCommonEventData
  ) satisfies Data_CommonEvent[],
});

const mockNormalLabel: NormalLabel = { normal: "Normal" };

const mockSystemdata: System_DataNames = {
  elements: ["Fire", "Ice", "Lightning"],
  armorTypes: ["Light Armor", "Heavy Armor"],
  weaponTypes: ["Sword", "Axe"],
  skillTypes: ["Offensive", "Defensive"],
  equipTypes: ["Main Hand", "Off Hand"],
  variables: ["Player Health", "Player Mana"],
  switches: ["Game Start", "Game Over"],
};

interface TestCaseItem {
  caseName: string;
  expected: FormatCompiled;
  code: number;
}
interface TestCaseGroup {
  groupName: string;
  errorMessage: `${string}`;
  cases: TestCaseItem[];
}
const testCaseGameData: TestCaseGroup = {
  groupName: "Item Effect that reference GameData",
  errorMessage: "Expected item effect to be defined in game data",
  cases: [
    {
      code: EFFECT_ADD_STATE,
      caseName: "Add State",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.addState.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.addState.format,
        data: mockGameData.states,
      },
    },
    {
      code: EFFECT_LEARN_SKILL,
      caseName: "Learn Skill",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.learnSkill.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.learnSkill.format,
        data: mockGameData.skills,
      },
    },
    {
      code: EFFECT_COMMON_EVENT,
      caseName: "Common Event",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.commonEvent.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.commonEvent.format,
        data: mockGameData.commonEvents,
      },
    },
  ],
};

// ItemEffect that do not require data array lookup (e.g., recover HP/MP, gain TP, etc.)
// These effect do not reference any external data array, so their data property is
const testCaseNonData: TestCaseGroup = {
  groupName: "Traits that do not require data array lookup",
  errorMessage: "Unexpected array data is included",
  cases: [
    {
      code: EFFECT_RECOVER_HP,
      caseName: "Recover HP",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.recoverHp.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.recoverHp.format,
        data: undefined,
      },
    },
    {
      code: EFFECT_RECOVER_MP,
      caseName: "Recover MP",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.recoverMp.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.recoverMp.format,
        data: undefined,
      },
    },
    {
      code: EFFECT_GAIN_TP,
      caseName: "Gain TP",
      expected: {
        label: LABEL_SET_ITEM_EFFECT.options.gainTp.domainName,
        patternCompiled: LABEL_SET_ITEM_EFFECT.options.gainTp.format,
        data: undefined,
      },
    },
  ],
};

const makeMap = (): ReadonlyMap<number, FormatCompiled> => {
  const source = buildReferenceItemSources(
    makeGameData(mockGameData),
    LABEL_SET_DATA,
    LABEL_SET_TRAIT.options,
    mockNormalLabel,
    mockSystemdata,
    DEFAULT_SYSTEM_LABELS_DATA_TYPES
  );

  return compileItemEffectDisplayData(
    source,
    LABEL_SET_ITEM_EFFECT.options,
    resolveItemEffectLabels(LABEL_SET_ITEM_EFFECT.options)
  );
};

describe("compileItemEffectDisplayData", () => {
  const map = makeMap();
});
