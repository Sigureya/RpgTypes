import type { NamedItemSource } from "@RpgTypes/libs";
import {
  getElementTypes,
  getEquipTypes,
  getWeaponTypes,
  getSkillTypes,
  getArmorTypes,
  getVariableNames,
  getSwitches,
} from "./getSystemTypeNames";
import {
  SRC_SYSTEM_SWITCHES,
  SRC_SYSTEM_WEAPON_TYPES,
  SRC_SYSTEM_ARMOR_TYPES,
  SRC_SYSTEM_ELEMENTS,
  SRC_SYSTEM_EQUIP_TYPES,
  SRC_SYSTEM_SKILL_TYPES,
  SRC_SYSTEM_VARIABLES,
} from "./kindConstants";
import type {
  SourceId_SystemArmorTypes,
  SourceId_SystemElements,
  SourceId_SystemEquipTypes,
  SourceId_SystemSkillTypes,
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
  SourceId_SystemWeaponTypes,
} from "./sourceIdTypes";
import type { System_RPG_DataNames, SystemLabel_DataNames } from "./types";

export const defineSystemItems = (
  system: System_RPG_DataNames,
  label: SystemLabel_DataNames
): NamedItemSource[] => {
  return [
    buildElementTypesSource(system, label),
    buildEquipTypesSource(system, label),
    buildWeaponTypesSource(system, label),
    buildSkillTypesSource(system, label),
    buildArmorTypesSource(system, label),
    buildVariableNamesSource(system, label),
    buildSwitchesSource(system, label),
  ];
};
const buildArmorTypesSource = (
  system: Pick<System_RPG_DataNames, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.options.armorTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_ARMOR_TYPES,
  } satisfies SourceId_SystemArmorTypes,
});

const buildElementTypesSource = (
  system: Pick<System_RPG_DataNames, "elements">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getElementTypes(system),
  label: label.options.elements,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_ELEMENTS,
  } satisfies SourceId_SystemElements,
});

const buildEquipTypesSource = (
  system: Pick<System_RPG_DataNames, "equipTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getEquipTypes(system),
  label: label.options.equipTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_EQUIP_TYPES,
  } satisfies SourceId_SystemEquipTypes,
});

const buildSkillTypesSource = (
  system: Pick<System_RPG_DataNames, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.options.skillTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_SKILL_TYPES,
  } satisfies SourceId_SystemSkillTypes,
});

const buildVariableNamesSource = (
  system: Pick<System_RPG_DataNames, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.options.variables,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_VARIABLES,
  } satisfies SourceId_SystemVariables,
});

const buildSwitchesSource = (
  system: Pick<System_RPG_DataNames, "switches">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSwitches(system),
  label: label.options.switches,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_SWITCHES,
  } satisfies SourceId_SystemSwitches,
});

const buildWeaponTypesSource = (
  system: Pick<System_RPG_DataNames, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.options.weaponTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: SRC_SYSTEM_WEAPON_TYPES,
  } satisfies SourceId_SystemWeaponTypes,
});
