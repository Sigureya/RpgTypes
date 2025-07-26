import { test, expect, describe } from "vitest";
import type {
  Data_NamedItem,
  FormatCompiled,
  NamedItemSource,
} from "@RpgTypes/libs";
import type {
  GameData,
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Weapon,
  NormalLabel,
  TraitCode,
} from "@RpgTypes/rmmz/rpg";
import {
  collapsOptionsToArray,
  extraParamsToArray,
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
  partyAbilityToArray,
  regularParamsToArray,
  resolveTraitLabels,
  specialFlagToArray,
  specialParamsToArray,
  TRAIT_ACTION_PLUS,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_PARAM,
  TRAIT_PARTY_ABILITY,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
  TRAIT_SLOT_TYPE,
  TRAIT_SPARAM,
  TRAIT_SPECIAL_FLAG,
  TRAIT_STATE_RATE,
  TRAIT_STATE_RESIST,
  TRAIT_XPARAM,
} from "@RpgTypes/rmmz/rpg";
import {
  DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  getArmorTypes,
  getElementTypes,
  getEquipTypes,
  getSkillTypes,
  getWeaponTypes,
  type System_RPG_DataNames,
} from "@RpgTypes/rmmz/system";
import {
  buildReferenceItemSources,
  compileTraitDisplayData,
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
// This mock data is intentionally defined in a flat and simplified format (id and name only).
// We pass it through make***Data() functions to transform it into a proper GameData structure,
// allowing us to:
// 1. Validate that each transformed item conforms to the expected typed structure.
// 2. Simplify the initial mock definition for readability and maintainability.
// 3. Ensure compatibility with buildReferenceItemSources(), which accepts strictly typed GameData.
// Note: Adding explicit `satisfies` assertions here helps TypeScript infer and validate types
// within a single file, which improves static analysis accuracy and readability.
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

const mockSystemdata: System_RPG_DataNames = {
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
  code: TraitCode;
}
interface TestCaseGroup {
  groupName: string;
  errorMessage: `${string}`;
  cases: TestCaseItem[];
}

const testCaseGameData: TestCaseGroup = {
  groupName: "Traits that reference GameData",
  errorMessage: "Check the return value of defineGameDataSources()",

  cases: [
    {
      caseName: "stateRate",
      code: TRAIT_STATE_RATE,
      expected: {
        label: LABEL_SET_TRAIT.options.stateRate.title,
        patternCompiled: LABEL_SET_TRAIT.options.stateRate.format,
        data: mockGameData.states,
      },
    },
    {
      caseName: "stateResist",
      code: TRAIT_STATE_RESIST,
      expected: {
        label: LABEL_SET_TRAIT.options.stateResist.title,
        patternCompiled: LABEL_SET_TRAIT.options.stateResist.format,
        data: mockGameData.states,
      },
    },
    {
      code: TRAIT_SKILL_ADD,
      caseName: "skillAdd",
      expected: {
        label: LABEL_SET_TRAIT.options.skillAdd.title,
        patternCompiled: LABEL_SET_TRAIT.options.skillAdd.format,
        data: mockGameData.skills,
      },
    },
    {
      code: TRAIT_SKILL_SEAL,
      caseName: "skillSeal",
      expected: {
        label: LABEL_SET_TRAIT.options.skillSeal.title,
        patternCompiled: LABEL_SET_TRAIT.options.skillSeal.format,
        data: mockGameData.skills,
      },
    },
    {
      code: TRAIT_ATTACK_STATE,
      caseName: "attackState",
      expected: {
        label: LABEL_SET_TRAIT.options.attackState.title,
        patternCompiled: LABEL_SET_TRAIT.options.attackState.format,
        data: mockGameData.states,
      },
    },
    {
      code: TRAIT_ATTACK_SKILL,
      caseName: "attackSkill",
      expected: {
        label: LABEL_SET_TRAIT.options.attackSkill.title,
        patternCompiled: LABEL_SET_TRAIT.options.attackSkill.format,
        data: mockGameData.skills,
      },
    },
  ],
};
const testCaseTrait: TestCaseGroup = {
  groupName: "Traits that reference defined sub-parameters",
  errorMessage: "Check the return value of defineTraitItems()",
  cases: [
    {
      code: TRAIT_SPARAM,
      caseName: "specialParam",
      expected: {
        label: LABEL_SET_TRAIT.options.specialParam.title,
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
        label: LABEL_SET_TRAIT.options.extraParam.title,
        patternCompiled: LABEL_SET_TRAIT.options.extraParam.format,
        data: extraParamsToArray(LABEL_SET_TRAIT.options.extraParam.options),
      },
    },
    {
      code: TRAIT_PARAM,
      caseName: "regularParam",
      expected: {
        label: LABEL_SET_TRAIT.options.regularParam.title,
        patternCompiled: LABEL_SET_TRAIT.options.regularParam.format,
        data: regularParamsToArray(
          LABEL_SET_TRAIT.options.regularParam.options
        ),
      },
    },
    {
      code: TRAIT_DEBUFF_RATE,
      caseName: "debuffRate",
      expected: {
        label: LABEL_SET_TRAIT.options.debuffRate.title,
        patternCompiled: LABEL_SET_TRAIT.options.debuffRate.format,
        data: regularParamsToArray(
          LABEL_SET_TRAIT.options.regularParam.options
        ),
      },
    },
    {
      code: TRAIT_COLLAPSE_TYPE,
      caseName: "collapseType",
      expected: {
        label: LABEL_SET_TRAIT.options.collaps.title,
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
        label: LABEL_SET_TRAIT.options.specialFlag.title,
        patternCompiled: LABEL_SET_TRAIT.options.specialFlag.format,
        data: specialFlagToArray(LABEL_SET_TRAIT.options.specialFlag.options),
      },
    },
    {
      code: TRAIT_PARTY_ABILITY,
      caseName: "partyAbility",
      expected: {
        label: LABEL_SET_TRAIT.options.partyAbility.title,
        patternCompiled: LABEL_SET_TRAIT.options.partyAbility.format,
        data: partyAbilityToArray(LABEL_SET_TRAIT.options.partyAbility.options),
      },
    },
  ],
};
const testCaseSystem: TestCaseGroup = {
  groupName: "Traits that reference system-defined terms",
  errorMessage: "Check the return value of defineSystemItems()",
  cases: [
    {
      caseName: "element rate",
      code: TRAIT_ELEMENT_RATE,
      expected: {
        label: LABEL_SET_TRAIT.options.elementRate.title,
        patternCompiled: LABEL_SET_TRAIT.options.elementRate.format,
        data: getElementTypes(mockSystemdata),
      },
    },
    {
      caseName: "attack element",
      code: TRAIT_ATTACK_ELEMENT,
      expected: {
        label: LABEL_SET_TRAIT.options.attackElement.title,
        patternCompiled: LABEL_SET_TRAIT.options.attackElement.format,
        data: getElementTypes(mockSystemdata),
      },
    },
    {
      caseName: "equip lock",
      code: TRAIT_EQUIP_LOCK,
      expected: {
        label: LABEL_SET_TRAIT.options.equipLock.title,
        patternCompiled: LABEL_SET_TRAIT.options.equipLock.format,
        data: getEquipTypes(mockSystemdata),
      },
    },
    {
      caseName: "equip seal",
      code: TRAIT_EQUIP_SEAL,
      expected: {
        label: LABEL_SET_TRAIT.options.equipSeal.title,
        patternCompiled: LABEL_SET_TRAIT.options.equipSeal.format,
        data: getEquipTypes(mockSystemdata),
      },
    },
    {
      caseName: "weapon type",
      code: TRAIT_EQUIP_WEAPON_TYPE,
      expected: {
        label: LABEL_SET_TRAIT.options.equipWeaponType.title,
        patternCompiled: LABEL_SET_TRAIT.options.equipWeaponType.format,
        data: getWeaponTypes(mockSystemdata),
      },
    },
    {
      caseName: "armor type",
      code: TRAIT_EQUIP_ARMOR_TYPE,
      expected: {
        label: LABEL_SET_TRAIT.options.equipArmorType.title,
        patternCompiled: LABEL_SET_TRAIT.options.equipArmorType.format,
        data: getArmorTypes(mockSystemdata),
      },
    },
    {
      caseName: "slot type",
      code: TRAIT_SLOT_TYPE,
      expected: {
        label: LABEL_SET_TRAIT.options.slotType.title,
        patternCompiled: LABEL_SET_TRAIT.options.slotType.format,
        data: getEquipTypes(mockSystemdata),
      },
    },
    {
      caseName: "skill type seal",
      code: TRAIT_SKILL_TYPE_SEAL,
      expected: {
        label: LABEL_SET_TRAIT.options.skillTypeSeal.title,
        patternCompiled: LABEL_SET_TRAIT.options.skillTypeSeal.format,
        data: getSkillTypes(mockSystemdata),
      },
    },
    {
      caseName: "skill type add",
      code: TRAIT_SKILL_TYPE_ADD,
      expected: {
        label: LABEL_SET_TRAIT.options.skillTypeAdd.title,
        patternCompiled: LABEL_SET_TRAIT.options.skillTypeAdd.format,
        data: getSkillTypes(mockSystemdata),
      },
    },
  ],
};

// Traits that do not require data array lookup (e.g., attackSpeed, attackTimes, actionPlus).
// These traits do not reference any external data array, so their data property is
const testCaseNonData: TestCaseGroup = {
  groupName: "Traits that do not require data array lookup",
  errorMessage: "Unexpected array data is included",
  cases: [
    {
      code: TRAIT_ATTACK_SPEED,
      caseName: "attackSpeed",
      expected: {
        label: LABEL_SET_TRAIT.options.attackSpeed.title,
        patternCompiled: LABEL_SET_TRAIT.options.attackSpeed.format,
        data: undefined,
      },
    },
    {
      code: TRAIT_ATTACK_TIMES,
      caseName: "attackTimes",
      expected: {
        label: LABEL_SET_TRAIT.options.attackTimes.title,
        patternCompiled: LABEL_SET_TRAIT.options.attackTimes.format,
        data: undefined,
      },
    },
    {
      code: TRAIT_ACTION_PLUS,
      caseName: "actionPlus",
      expected: {
        label: LABEL_SET_TRAIT.options.actionPlus.title,
        patternCompiled: LABEL_SET_TRAIT.options.actionPlus.format,
        data: undefined,
      },
    },
  ],
};

const testFormat = (
  map: ReadonlyMap<number, FormatCompiled>,
  { groupName, errorMessage, cases }: TestCaseGroup
) => {
  describe(groupName, () => {
    cases.forEach(({ caseName, expected, code }) => {
      describe(`${caseName} (code:${code})`, () => {
        test("result is not undefined", () => {
          expect(map.get(code)).toBeDefined();
        });
        test("label matches the expected value", () => {
          expect(map.get(code)?.label).toEqual(expected.label);
        });
        test("patternCompiled matches the expected value", () => {
          expect(map.get(code)?.patternCompiled).toEqual(
            expected.patternCompiled
          );
        });
        test("data matches the expected value", () => {
          expect(map.get(code)?.data, errorMessage).toEqual(expected.data);
        });
      });
    });
  });
};

describe("compileTraitDisplayData", () => {
  // Tests for buildReferenceItemSources() are separated into another file.
  // See: format.buildReferenceItemSources.test.ts
  const namedItemSource: NamedItemSource[] = buildReferenceItemSources(
    makeGameData(mockGameData),
    LABEL_SET_DATA,
    LABEL_SET_TRAIT.options,
    mockNormalLabel,
    mockSystemdata,
    DEFAULT_SYSTEM_LABELS_DATA_TYPES
  );
  const map: ReadonlyMap<number, FormatCompiled> = compileTraitDisplayData(
    namedItemSource,
    LABEL_SET_TRAIT.options
  );

  describe("Each element in format.data contains only 'id' and 'name' properties", () => {
    Array.from(map.values()).forEach((format: FormatCompiled) => {
      if (!format.data) {
        // Skip if there is no data property
        return;
      }
      const list = format.data;
      describe(format.label, () => {
        const set = new Set<keyof Data_NamedItem>(["id", "name"]);
        describe.each(list)("%j", (item) => {
          test("contains only 'id' and 'name' properties", () => {
            expect(new Set(Object.keys(item))).toEqual(set);
          });
          test(`'name' is a string`, () => {
            expect(item.id).toBeTypeOf("number");
          });
          test(`'id' is a number`, () => {
            expect(item.name).toBeTypeOf("string");
          });
        });
      });
    });
  });

  describe("Trait code mapping: data array, label, and pattern are correct", () => {
    testFormat(map, testCaseGameData);
    testFormat(map, testCaseTrait);
    testFormat(map, testCaseSystem);
    testFormat(map, testCaseNonData);
  });
  describe("All Trait codes are covered by test cases", () => {
    const traits = resolveTraitLabels(LABEL_SET_TRAIT.options);
    const allCase: TestCaseItem[] = [
      ...testCaseGameData.cases,
      ...testCaseTrait.cases,
      ...testCaseSystem.cases,
      ...testCaseNonData.cases,
    ];
    test("Simple check: only length is compared", () => {
      expect(traits.length).toBe(allCase.length);
    });
    test("Detailed check: missing test cases are reported", () => {
      const testCaseCodes = new Set(
        allCase.map(
          // The satisfies keyword is used here to help detect issues when codes are modified.
          ({ code }) => code satisfies number
        )
      );
      expect(traits.filter((t) => !testCaseCodes.has(t.kindId))).toEqual([]);
    });
  });
});
// Abnormal (edge/error) case tests are omitted for the following reasons:
// 1. The set of normal (expected) test cases is very large.
// 2. Most abnormal cases are prevented by TypeScript's type checking.
// 3. Handling of invalid values is delegated to the caller by design.
