import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import { makeSystemData } from "@RpgTypes/system";
import type { System_DataNames } from "@RpgTypes/system/core/dataTypes";
import type { DomainName } from "@RpgTypes/templates";
import type {
  Data_NamedItem,
  NamedItemSource,
  FormatLabelResolved,
  FormatCompiled,
} from "src/namedItemSource";
import type { TraitFormat, GameData, NormalLabel } from "src/rpg";
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
  resolveTraitLabels,
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
  specialParamsToArray,
  regularParamsToArray,
  extraParamsToArray,
  specialFlagToArray,
  collapsOptionsToArray,
  partyAbilityToArray,
} from "src/rpg";
import { test, expect, describe } from "vitest";
import { defineTraitSources } from "./formatTraits";

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
const mockDataNameLabels: Record<keyof System_DataNames, string> = {
  armorTypes: "Armor Types",
  weaponTypes: "Weapon Types",
  elements: "Elements",
  skillTypes: "Skill Types",
  equipTypes: "Equip Types",
  variables: "Variables",
  switches: "Switches",
};

const makeGameDate = (
  data: Record<keyof GameData, Data_NamedItem[]>
): GameData => ({
  skills: data.skills.map(makeSkillData),
  states: data.states.map(makeStateData),
  actors: data.actors.map(makeActorData),
  armors: data.armors.map(makeArmorData),
  weapons: data.weapons.map(makeWeaponData),
  classes: data.classes.map(makeClassData),
  enemies: data.enemies.map(makeEnemyData),
  items: data.items.map(makeItemData),
  commonEvents: data.commonEvents.map(makeCommonEventData),
});
const mockNormalLabel: NormalLabel = { normal: "Normal" };

const mockSystemdata = makeSystemData({
  dataNames: {
    elements: ["Fire", "Ice", "Lightning"],
  },
});

const makeSource = (): NamedItemSource[] => {
  return defineTraitSources(
    makeGameDate(mockGameData),
    LABEL_SET_DATA,
    LABEL_SET_TRAIT.options,
    mockNormalLabel,
    mockSystemdata,
    mockDataNameLabels
  );
};
const domainNames = (record: Record<string, DomainName>): string[] => {
  return Object.entries<DomainName>(record).map(
    ([, value]) => value.domainName
  );
};

describe("defineTraitSources", () => {
  const result = makeSource();
  describe("", () => {
    const set = new Set<string>([
      ...domainNames(LABEL_SET_DATA),
      ...domainNames(LABEL_SET_TRAIT.options),
    ]);
    test.each(result)("", (sourceItem) => {
      expect(sourceItem).toSatisfy((item: NamedItemSource) =>
        set.has(item.label)
      );
    });
  });
});

interface TestCase {
  caseName: string;
  expected: FormatCompiled;
  code: number;
}

const testFormatCompiled = (format: FormatCompiled) => {
  if (!format.data) {
    return;
  }
  const list = format.data;
  describe(`FormatCompiled ${format.label}`, () => {
    const set = new Set(["id", "name"] satisfies (keyof Data_NamedItem)[]);
    test.each(list)("should have valid data item %j", (item) => {
      expect(new Set(Object.keys(item))).toEqual(set);
      expect(item.id).toBeTypeOf("number");
      expect(item.name).toBeTypeOf("string");
    });
  });
};

const testFormat = (
  groopName: string,
  map: ReadonlyMap<number, FormatCompiled>,
  cases: TestCase[]
) => {
  describe(groopName, () => {
    cases.forEach(({ caseName, expected, code }) => {
      describe(caseName, () => {
        test(" should match expected format", () => {
          expect(map.get(code)).toEqual(expected);
        });
      });
    });
  });
};

describe("format", () => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    LABEL_SET_TRAIT.options
  ) satisfies TraitFormat[];
  const source: Map<number, FormatCompiled> = mergeItemsSource(
    list,
    makeSource()
  );
  [...source.values()].forEach((format) => {
    testFormatCompiled(format);
  });
  testFormat("source from data", source, [
    {
      caseName: "stateRate",
      code: TRAIT_STATE_RATE,
      expected: {
        label: LABEL_SET_TRAIT.options.stateRate.domainName,
        patternCompiled: LABEL_SET_TRAIT.options.stateRate.format,
        data: mockGameData.states,
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
  ]);
  testFormat("source from trait", source, [
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
        data: extraParamsToArray(LABEL_SET_TRAIT.options.extraParam.options),
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
        data: specialFlagToArray(LABEL_SET_TRAIT.options.specialFlag.options),
      },
    },
    {
      code: TRAIT_PARTY_ABILITY,
      caseName: "partyAbility",
      expected: {
        label: LABEL_SET_TRAIT.options.partyAbility.domainName,
        patternCompiled: LABEL_SET_TRAIT.options.partyAbility.format,
        data: partyAbilityToArray(LABEL_SET_TRAIT.options.partyAbility.options),
      },
    },
  ]);
  testFormat("no data", source, [
    {
      code: TRAIT_ATTACK_SPEED,
      caseName: "attackSpeed",
      expected: {
        label: LABEL_SET_TRAIT.options.attackSpeed.domainName,
        patternCompiled: LABEL_SET_TRAIT.options.attackSpeed.format,
      },
    },
    {
      code: TRAIT_ATTACK_TIMES,
      caseName: "attackTimes",
      expected: {
        label: LABEL_SET_TRAIT.options.attackTimes.domainName,
        patternCompiled: LABEL_SET_TRAIT.options.attackTimes.format,
      },
    },
    {
      code: TRAIT_ACTION_PLUS,
      caseName: "actionPlus",
      expected: {
        label: LABEL_SET_TRAIT.options.actionPlus.domainName,
        patternCompiled: LABEL_SET_TRAIT.options.actionPlus.format,
      },
    },
  ]);
});
