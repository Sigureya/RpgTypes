import { describe, test, expect } from "vitest";
import {
  getItemCommandEnabled,
  getEquipCommandEnabled,
  getFormationCommandEnabled,
  getSaveCommandEnabled,
  getSkillCommandEnabled,
  getStatusCommandEnabled,
  getArmorCategoryEnabled,
  getItemCategoryEnabled,
  getKeyItemCategoryEnabled,
  getWeaponCategoryEnabled,
} from "./gameMenu";
import type { ItemCategories } from "./itemCategories";
import { makeItemCategories } from "./itemCategories";
import type { MenuCommandsEnabled } from "./menuCommands";
import { makeMenuCommandsEnabled } from "./menuCommands";
import type { System_BooleanGameMenuOptions } from "./types";

interface TestCase {
  caseName: string;
  menu?: Partial<MenuCommandsEnabled>;
  items?: Partial<ItemCategories>;
  expected: boolean;
}

const testAreEnabledCommand = (
  descName: string,
  fn: (options: System_BooleanGameMenuOptions) => boolean,
  cases: TestCase[]
) => {
  describe(descName, () => {
    cases.forEach(
      ({ caseName, expected, menu: menuCommands, items: itemCategories }) => {
        const options: System_BooleanGameMenuOptions = {
          menuCommands: makeMenuCommandsEnabled(menuCommands),
          itemCategories: makeItemCategories(itemCategories),
        };
        describe(caseName, () => {
          test(`expect ${expected}`, () => {
            expect(options).toSatisfy((x) => fn(x) === expected);
          });
        });
      }
    );
  });
};

testAreEnabledCommand("getItemCommandEnabled", getItemCommandEnabled, [
  { caseName: "true", menu: { item: true }, expected: true },
  { caseName: "false", menu: { item: false }, expected: false },
  { caseName: "undefined", menu: { item: undefined }, expected: true },
  { caseName: "empty", menu: {}, expected: true },
]);

testAreEnabledCommand("getSkillCommandEnabled", getSkillCommandEnabled, [
  { caseName: "true", menu: { skill: true }, expected: true },
  { caseName: "false", menu: { skill: false }, expected: false },
  { caseName: "undefined", menu: { skill: undefined }, expected: true },
  { caseName: "empty", menu: {}, expected: true },
]);
testAreEnabledCommand("getEquipCommandEnabled", getEquipCommandEnabled, [
  { caseName: "true", menu: { equip: true }, expected: true },
  { caseName: "false", menu: { equip: false }, expected: false },
  { caseName: "undefined", menu: { equip: undefined }, expected: true },
  { caseName: "empty", menu: {}, expected: true },
]);
testAreEnabledCommand("getStatusCommandEnabled", getStatusCommandEnabled, [
  { caseName: "true", menu: { status: true }, expected: true },
  { caseName: "false", menu: { status: false }, expected: false },
  { caseName: "undefined", menu: { status: undefined }, expected: true },
  { caseName: "empty", menu: {}, expected: true },
]);
testAreEnabledCommand(
  "getFormationCommandEnabled",
  getFormationCommandEnabled,
  [
    { caseName: "true", menu: { formation: true }, expected: true },
    { caseName: "false", menu: { formation: false }, expected: false },
    { caseName: "undefined", menu: { formation: undefined }, expected: true },
    { caseName: "empty", menu: {}, expected: true },
  ]
);
testAreEnabledCommand("getSaveCommandEnabled", getSaveCommandEnabled, [
  { caseName: "true", menu: { save: true }, expected: true },
  { caseName: "false", menu: { save: false }, expected: false },
  { caseName: "undefined", menu: { save: undefined }, expected: true },
  { caseName: "empty", menu: {}, expected: true },
]);

testAreEnabledCommand("getItemCategoryEnabled", getItemCategoryEnabled, [
  { caseName: "true", items: { item: true }, expected: true },
  { caseName: "false", items: { item: false }, expected: false },
  { caseName: "undefined", items: { item: undefined }, expected: true },
  { caseName: "empty", items: {}, expected: true },
]);
testAreEnabledCommand("getWeaponCategoryEnabled", getWeaponCategoryEnabled, [
  { caseName: "true", items: { weapon: true }, expected: true },
  { caseName: "false", items: { weapon: false }, expected: false },
  { caseName: "undefined", items: { weapon: undefined }, expected: true },
  { caseName: "empty", items: {}, expected: true },
]);

testAreEnabledCommand("getArmorCategoryEnabled", getArmorCategoryEnabled, [
  { caseName: "true", items: { armor: true }, expected: true },
  { caseName: "false", items: { armor: false }, expected: false },
  { caseName: "undefined", items: { armor: undefined }, expected: true },
  { caseName: "empty", items: {}, expected: true },
]);
testAreEnabledCommand("getKeyItemCategoryEnabled", getKeyItemCategoryEnabled, [
  { caseName: "true", items: { keyItem: true }, expected: true },
  { caseName: "false", items: { keyItem: false }, expected: false },
  { caseName: "undefined", items: { keyItem: undefined }, expected: true },
  { caseName: "empty", items: {}, expected: true },
]);
