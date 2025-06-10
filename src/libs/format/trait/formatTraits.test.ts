import { DEFAULT_SYSTEM_LABELS_DATA_TYPES } from "@RpgTypes/system";
import type { System_DataNames } from "@RpgTypes/system/core";
import {
  getElementTypes,
  getEquipTypes,
  getWeaponTypes,
} from "@RpgTypes/system/core";
import type { DomainName } from "@RpgTypes/templates";
import type {
  Data_NamedItem,
  NamedItemSource,
  FormatCompiled,
} from "src/namedItemSource";
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
  TRAIT_STATE_RATE,
  TRAIT_STATE_RESIST,
  TRAIT_PARAM,
  TRAIT_XPARAM,
  TRAIT_SPARAM,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_TIMES,
  TRAIT_ATTACK_SKILL,
  TRAIT_ACTION_PLUS,
  TRAIT_SPECIAL_FLAG,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_PARTY_ABILITY,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  makeActorData,
  makeArmorData,
  makeSkillData,
  makeStateData,
  makeClassData,
  makeEnemyData,
  makeItemData,
  makeCommonEventData,
  makeWeaponData,
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
  specialParamsToArray,
  regularParamsToArray,
  extraParamsToArray,
  specialFlagToArray,
  collapsOptionsToArray,
  partyAbilityToArray,
  TRAIT_ELEMENT_RATE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_EQUIP_WEAPON_TYPE,
} from "src/rpg";
import { test, expect, describe } from "vitest";
import { defineTraitSources, mergeTraitSource } from "./formatTraits";

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

interface TestCase {
  caseName: string;
  expected: FormatCompiled;
  code: number;
}

interface TestCaseCategory {
  groopName: string;
  errorMessage: `${string}`;
}
const testFormat = (
  { groopName, errorMessage: sourceFunctionName }: TestCaseCategory,
  map: ReadonlyMap<number, FormatCompiled>,
  cases: TestCase[]
) => {
  describe(groopName, () => {
    cases.forEach(({ caseName, expected, code }) => {
      describe(caseName, () => {
        test(" should match expected format", () => {
          expect(map.get(code), sourceFunctionName).toEqual(expected);
        });
      });
    });
  });
};

describe("mergeTraitSource", () => {
  const source: Map<number, FormatCompiled> = mergeTraitSource(
    LABEL_SET_TRAIT.options,
    LABEL_SET_DATA,
    makeGameDate(mockGameData),
    mockNormalLabel,
    mockSystemdata,
    DEFAULT_SYSTEM_LABELS_DATA_TYPES.options
  );

  describe("format.dataの各要素が最小限のメンバで構成されていること", () => {
    Array.from(source.values()).forEach((format: FormatCompiled) => {
      if (!format.data) {
        // dataがない場合はスキップ
        return;
      }
      const list = format.data;
      describe(format.label, () => {
        const set = new Set(["id", "name"] satisfies (keyof Data_NamedItem)[]);
        describe.each(list)("%j", (item) => {
          test("idとnameだけを持つ", () => {
            expect(new Set(Object.keys(item))).toEqual(set);
          });
          test("idとnameの型チェック", () => {
            expect(item.id).toBeTypeOf("number");
            expect(item.name).toBeTypeOf("string");
          });
        });
      });
    });
  });

  describe("codeの対応チェック。data配列・ラベル・フォーマット用パターンが適切", () => {
    testFormat(
      {
        groopName: "GameDataを参照するTrait",
        errorMessage: "defineGameDataSources()の戻り値を確認してください",
      },
      source,
      [
        {
          caseName: "stateRate",
          code: TRAIT_STATE_RATE,
          expected: {
            label: LABEL_SET_TRAIT.options.stateRate.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.stateRate.format,
            data: mockGameData.states satisfies Data_NamedItem[],
          },
        },
        {
          caseName: "stateResist",
          code: TRAIT_STATE_RESIST,
          expected: {
            label: LABEL_SET_TRAIT.options.stateResist.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.stateResist.format,
            data: mockGameData.states,
          },
        },
        {
          code: TRAIT_SKILL_ADD,
          caseName: "skillAdd",
          expected: {
            label: LABEL_SET_TRAIT.options.skillAdd.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.skillAdd.format,
            data: mockGameData.skills,
          },
        },
        {
          code: TRAIT_SKILL_SEAL,
          caseName: "skillSeal",
          expected: {
            label: LABEL_SET_TRAIT.options.skillSeal.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.skillSeal.format,
            data: mockGameData.skills,
          },
        },
        {
          code: TRAIT_ATTACK_STATE,
          caseName: "attackState",
          expected: {
            label: LABEL_SET_TRAIT.options.attackState.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.attackState.format,
            data: mockGameData.states,
          },
        },
        {
          code: TRAIT_ATTACK_SKILL,
          caseName: "attackSkill",
          expected: {
            label: LABEL_SET_TRAIT.options.attackSkill.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.attackSkill.format,
            data: mockGameData.skills,
          },
        },
      ]
    );
    testFormat(
      {
        groopName: "Trait用に定義されたサブパラメータを参照するTrait",
        errorMessage: "defineTraitItems()の戻り値を確認してください",
      },
      source,
      [
        {
          code: TRAIT_SPARAM,
          caseName: "specialParam",
          expected: {
            label: LABEL_SET_TRAIT.options.specialParam.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.specialParam.format,
            data: specialParamsToArray(
              LABEL_SET_TRAIT.options.specialParam.options
            ),
          },
        },
        {
          code: TRAIT_XPARAM,
          caseName: "extraParam",
          expected: {
            label: LABEL_SET_TRAIT.options.extraParam.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.extraParam.format,
            data: extraParamsToArray(
              LABEL_SET_TRAIT.options.extraParam.options
            ),
          },
        },
        {
          code: TRAIT_PARAM,
          caseName: "regularParam",
          expected: {
            label: LABEL_SET_TRAIT.options.regularParam.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.regularParam.format,
            data: regularParamsToArray(
              LABEL_SET_TRAIT.options.regularParam.options
            ),
          },
        },
        {
          code: TRAIT_COLLAPSE_TYPE,
          caseName: "collapseType",
          expected: {
            label: LABEL_SET_TRAIT.options.collaps.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.collaps.format,
            data: collapsOptionsToArray(
              LABEL_SET_TRAIT.options.collaps.options,
              mockNormalLabel
            ),
          },
        },
        {
          code: TRAIT_SPECIAL_FLAG,
          caseName: "specialFlag",
          expected: {
            label: LABEL_SET_TRAIT.options.specialFlag.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.specialFlag.format,
            data: specialFlagToArray(
              LABEL_SET_TRAIT.options.specialFlag.options
            ),
          },
        },
        {
          code: TRAIT_PARTY_ABILITY,
          caseName: "partyAbility",
          expected: {
            label: LABEL_SET_TRAIT.options.partyAbility.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.partyAbility.format,
            data: partyAbilityToArray(
              LABEL_SET_TRAIT.options.partyAbility.options
            ),
          },
        },
      ]
    );

    testFormat(
      {
        groopName: "Systemで定義された用語を参照するTrait",
        errorMessage: "defineSystemItems()の戻り値を確認してください",
      },
      source,
      [
        {
          caseName: "element rate",
          code: TRAIT_ELEMENT_RATE,
          expected: {
            label: LABEL_SET_TRAIT.options.elementRate.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.elementRate.format,
            data: getElementTypes(mockSystemdata),
          },
        },
        {
          caseName: "attack element",
          code: TRAIT_ATTACK_ELEMENT,
          expected: {
            label: LABEL_SET_TRAIT.options.attackElement.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.attackElement.format,
            data: getElementTypes(mockSystemdata),
          },
        },
        {
          caseName: "equip lock",
          code: TRAIT_EQUIP_LOCK,
          expected: {
            label: LABEL_SET_TRAIT.options.equipLock.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.equipLock.format,
            data: getEquipTypes(mockSystemdata),
          },
        },
        {
          caseName: "equip seal",
          code: TRAIT_EQUIP_SEAL,
          expected: {
            label: LABEL_SET_TRAIT.options.equipSeal.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.equipSeal.format,
            data: getEquipTypes(mockSystemdata),
          },
        },
        {
          caseName: "equip type",
          code: TRAIT_EQUIP_WEAPON_TYPE,
          expected: {
            label: LABEL_SET_TRAIT.options.equipWeaponType.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.equipWeaponType.format,
            data: getWeaponTypes(mockSystemdata),
          },
        },
      ]
    );

    testFormat(
      {
        groopName: "Traits that do not require data array lookup",
        errorMessage: "不要な配列データが混入してます",
      },
      source,
      [
        // Traits that do not require data array lookup (e.g., attackSpeed, attackTimes, actionPlus).
        // These traits do not reference any external data array, so their data property is
        {
          code: TRAIT_ATTACK_SPEED,
          caseName: "attackSpeed",
          expected: {
            label: LABEL_SET_TRAIT.options.attackSpeed.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.attackSpeed.format,
            data: undefined,
          } satisfies FormatCompiled,
        },
        {
          code: TRAIT_ATTACK_TIMES,
          caseName: "attackTimes",
          expected: {
            label: LABEL_SET_TRAIT.options.attackTimes.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.attackTimes.format,
            data: undefined,
          },
        },
        {
          code: TRAIT_ACTION_PLUS,
          caseName: "actionPlus",
          expected: {
            label: LABEL_SET_TRAIT.options.actionPlus.domainName,
            patternCompiled: LABEL_SET_TRAIT.options.actionPlus.format,
            data: undefined,
          },
        },
      ]
    );
  });
});
const domainNames = (record: Record<string, DomainName>): string[] => {
  return Object.entries<DomainName>(record).map(
    ([, value]) => value.domainName
  );
};

describe("defineTraitSources", () => {
  describe(".labelは全てdomainNameである", () => {
    const result: NamedItemSource[] = defineTraitSources(
      makeGameDate(mockGameData),
      LABEL_SET_DATA,
      LABEL_SET_TRAIT.options,
      mockNormalLabel,
      mockSystemdata,
      DEFAULT_SYSTEM_LABELS_DATA_TYPES.options
    );
    const set = new Set<string>([
      ...domainNames(LABEL_SET_DATA),
      ...domainNames(LABEL_SET_TRAIT.options),
      ...domainNames(DEFAULT_SYSTEM_LABELS_DATA_TYPES.options),
    ]);
    const isItemInSet = (item: NamedItemSource) => {
      return set.has(item.label);
    };

    test.each(result)("item.label:$label", (sourceItem) => {
      expect(sourceItem).toSatisfy(isItemInSet);
    });
  });
});
