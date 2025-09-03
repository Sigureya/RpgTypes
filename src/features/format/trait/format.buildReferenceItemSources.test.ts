import { describe, test, expect } from "vitest";
import type {
  Data_NamedItem,
  DomainName,
  NamedItemSource,
} from "@RpgTypes/libs";
import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_CommonEventUnknown,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
  GameData,
  NormalLabel,
  System_RPG_DataNames,
} from "@RpgTypes/rmmz";
import {
  DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  defineGameDataSources,
  defineSystemItems,
  defineTraitItems,
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
  makeActorData,
  makeArmorData,
  makeClassData,
  makeCommonEventData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
  makeWeaponData,
} from "@RpgTypes/rmmz";
import { buildReferenceItemSources } from "./formatTraits";

const mockNormalLabel: NormalLabel = { normal: "Normal" };
const mockSystemdata: System_RPG_DataNames = {
  elements: ["Fire", "Ice", "Lightning"],
  armorTypes: ["Light Armor", "Heavy Armor"],
  weaponTypes: ["Sword", "Axe"],
  skillTypes: ["Offensive", "Defensive"],
  equipTypes: ["Main Hand", "Off Hand"],
  variables: ["Player Health", "Player Mana"],
  switches: ["Game Start", "Game Over"],
};
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
  items: [
    { id: 1, name: "Health Potion" },
    { id: 2, name: "Mana Potion" },
  ],
  commonEvents: [],
};

const makeGameDate = (
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
  ) satisfies Data_CommonEventUnknown[],
});

const domainNames = (record: Record<string, DomainName>): string[] => {
  return Object.entries<DomainName>(record).map(([, value]) => value.title);
};

interface TestCase {
  caseName: string;
  result: NamedItemSource[];
  labels: string[];
}

const runTestCases = ({ caseName, labels, result }: TestCase) => {
  describe(caseName, () => {
    const labelsSet: ReadonlySet<string> = new Set(labels);
    const itemIsInSet = (label: string) => {
      return labelsSet.has(label);
    };
    const resultLabels = result.map((item) => item.label);
    test.each(resultLabels)(
      `label "%s" is included in the expected set`,
      (label) => {
        expect(label).toSatisfy(itemIsInSet);
      }
    );

    test(`sources are unique`, () => {
      const set = new Set(result.map((item) => JSON.stringify(item.source)));
      expect(set.size).toBe(result.length);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "buildReferenceItemSources",
    labels: [
      ...domainNames(LABEL_SET_DATA),
      ...domainNames(LABEL_SET_TRAIT.options),
      ...Object.values<string>(DEFAULT_SYSTEM_LABELS_DATA_TYPES.options),
    ],
    result: buildReferenceItemSources(
      makeGameDate(mockGameData),
      LABEL_SET_DATA,
      LABEL_SET_TRAIT.options,
      mockNormalLabel,
      mockSystemdata,
      DEFAULT_SYSTEM_LABELS_DATA_TYPES
    ),
  },
  {
    caseName: "defineGameDataSources",
    labels: domainNames(LABEL_SET_DATA),
    result: defineGameDataSources(makeGameDate(mockGameData), LABEL_SET_DATA),
  },
  {
    caseName: "defineTraitItems",
    labels: domainNames(LABEL_SET_TRAIT.options),
    result: defineTraitItems(LABEL_SET_TRAIT.options, mockNormalLabel),
  },
  {
    caseName: "defineSystemItems",
    labels: Object.values<string>(DEFAULT_SYSTEM_LABELS_DATA_TYPES.options),
    result: defineSystemItems(mockSystemdata, DEFAULT_SYSTEM_LABELS_DATA_TYPES),
  },
];

testCases.forEach(runTestCases);
