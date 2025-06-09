import { test, expect, describe } from "vitest";
import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import type {
  Data_NamedItem,
  NamedItemSource,
  FormatLabelResolved,
  FormatCompiled,
} from "src/namedItemSource";
import type { TraitFormat, GameData } from "src/rpg";
import {
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
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
  TRAIT_ELEMENT_RATE,
} from "src/rpg";
import { defineTraitSources } from "./formatTraits";
import type { System_DataNames } from "@RpgTypes/system";
import { makeSystemData } from "@RpgTypes/system";
import { domainNames } from "@RpgTypes/templates";

const mockGameData: Record<keyof GameData, Data_NamedItem[]> = {
  skills: [
    { id: 1, name: "Fireball" },
    { id: 2, name: "Ice Spike" },
    { id: 3, name: "Lightning Bolt" },
  ],
  states: [{ id: 1, name: "poison" }],
  actors: [],
  armors: [
    { id: 1, name: "Leather Armor" },
    { id: 2, name: "Iron Shield" },
  ],
  weapons: [],
  classes: [],
  enemies: [],
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

const mockElements: Data_NamedItem[] = [
  { id: 1, name: "Fire" },
  { id: 2, name: "Ice" },
  { id: 3, name: "Lightning" },
];

const makeSource = (): NamedItemSource[] => {
  return defineTraitSources(
    makeGameDate(mockGameData),
    LABEL_SET_DATA,
    LABEL_SET_TRAIT.options,
    { normal: "Normal" },
    makeSystemData({}),
    mockDataNameLabels
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

describe.skip("", () => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    LABEL_SET_TRAIT.options
  ) satisfies TraitFormat[];
  const source: Map<number, FormatCompiled> = mergeItemsSource(
    list,
    makeSource()
  );
  test("", () => {
    expect(source.get(TRAIT_ELEMENT_RATE)).toEqual({
      patternCompiled: LABEL_SET_TRAIT.options.elementRate.format,
      label: LABEL_SET_TRAIT.options.elementRate.domainName,
      data: mockElements,
    } satisfies FormatCompiled);
  });
});
