import type { DomainName } from "@RpgTypes/templates";
import type { NamedItemSource } from "src/namedItemSource";
import { describe, test, expect } from "vitest";
import { defineGameDataSources } from "./gameData";
import type { GameData } from "./gameDataTypes";
import type { DataLabels, SourceId_Data } from "./main";
import {
  LABEL_SET_DATA,
  makeActorData,
  makeArmorData,
  makeClassData,
  makeEnemyData,
  makeItemData,
  makeSkillData,
  makeStateData,
  makeWeaponData,
} from "./main";
import {
  MODULE_DATA,
  SRC_DATA_ACTOR,
  SRC_DATA_ARMOR,
  SRC_DATA_CLASS,
  SRC_DATA_ENEMY,
  SRC_DATA_ITEMS,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_DATA_WEAPON,
} from "./sourceKindConstants";

const kindOf = (list: NamedItemSource[], target: string) => {
  const key = {
    author: "rmmz",
    kind: target,
    module: MODULE_DATA,
  } satisfies SourceId_Data<string>;
  return list.find(
    (item) =>
      item.source.author === key.author &&
      item.source.kind === key.kind &&
      item.source.module === key.module
  );
};

interface TestCase {
  caseName: string;
  data: GameData;
  dataLabels: DataLabels;
}

const runTestCases = ({ caseName, data, dataLabels }: TestCase) => {
  const result: NamedItemSource[] = defineGameDataSources(data, dataLabels);
  describe(caseName, () => {
    const labelsSet: ReadonlySet<string> = new Set(
      Object.values<DomainName>(LABEL_SET_DATA).map((item) => item.domainName)
    );
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
    describe("", () => {
      type Table = Pick<NamedItemSource, "items">;
      test(SRC_DATA_ACTOR, () => {
        const actorSource = kindOf(result, SRC_DATA_ACTOR);
        expect(actorSource).toMatchObject({
          items: mockGameData.actors,
        } satisfies Table);
      });
      test(SRC_DATA_CLASS, () => {
        const classSource = kindOf(result, SRC_DATA_CLASS);
        expect(classSource).toMatchObject({
          items: mockGameData.classes,
        } satisfies Table);
      });
      test(SRC_DATA_SKILL, () => {
        const skillSource = kindOf(result, SRC_DATA_SKILL);
        expect(skillSource).toMatchObject({
          items: mockGameData.skills,
        } satisfies Table);
      });
      test(SRC_DATA_ITEMS, () => {
        const itemSource = kindOf(result, SRC_DATA_ITEMS);
        expect(itemSource).toMatchObject({
          items: mockGameData.items,
        } satisfies Table);
      });
      test(SRC_DATA_ENEMY, () => {
        const enemySource = kindOf(result, SRC_DATA_ENEMY);
        expect(enemySource).toMatchObject({
          items: mockGameData.enemies,
        } satisfies Table);
      });
      test(SRC_DATA_ARMOR, () => {
        const armorSource = kindOf(result, SRC_DATA_ARMOR);
        expect(armorSource).toMatchObject({
          items: mockGameData.armors,
        } satisfies Table);
      });
      test(SRC_DATA_WEAPON, () => {
        const weaponSource = kindOf(result, SRC_DATA_WEAPON);
        expect(weaponSource).toMatchObject({
          items: mockGameData.weapons,
        } satisfies Table);
      });
      test(SRC_DATA_STATE, () => {
        const stateSource = kindOf(result, SRC_DATA_STATE);
        expect(stateSource).toMatchObject({
          items: mockGameData.states,
        } satisfies Table);
      });
    });
  });
};

const mockGameData: GameData = {
  actors: [makeActorData({ id: 1, name: "Hero" })],
  classes: [makeClassData({})],
  skills: [makeSkillData({})],
  items: [makeItemData({ price: 100, name: "Potion" })],
  enemies: [makeEnemyData({ exp: 50, name: "Goblin" })],
  armors: [makeArmorData({ etypeId: 5 })],
  weapons: [makeWeaponData()],
  states: [makeStateData({})],
  commonEvents: [],
};

const testCases: TestCase[] = [
  { caseName: "basic", data: mockGameData, dataLabels: LABEL_SET_DATA },
];
describe("defineGameDataSources", () => {
  testCases.forEach(runTestCases);
});
