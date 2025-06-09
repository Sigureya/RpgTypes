import type { NamedItemSource } from "src/namedItemSource";
import {
  getElementTypes,
  getEquipTypes,
  getWeaponTypes,
  getSkillTypes,
  getArmorTypes,
  getVariableNames,
  getSwitches,
} from "./getSystemTypeNames";
import type {
  SourceId_SystemArmorTypes,
  SourceId_SystemElements,
  SourceId_SystemEquipTypes,
  SourceId_SystemSkillTypes,
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
  SourceId_SystemWeaponTypes,
} from "./sourceIdTypes";
import type { System_DataNames, SystemLabel_DataNames } from "./types";

export const defineSystemItems = (
  system: System_DataNames,
  label: Record<keyof System_DataNames, string>
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
export const buildArmorTypesSource = (
  system: Pick<System_DataNames, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: "armorTypes",
  } satisfies SourceId_SystemArmorTypes,
});

export const buildElementTypesSource = (
  system: Pick<System_DataNames, "elements">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getElementTypes(system),
  label: label.elements,
  source: {
    author: "rmmz",
    module: "system",
    kind: "elements",
  } satisfies SourceId_SystemElements,
});

export const buildEquipTypesSource = (
  system: Pick<System_DataNames, "equipTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getEquipTypes(system),
  label: label.equipTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: "equipTypes",
  } satisfies SourceId_SystemEquipTypes,
});

export const buildSkillTypesSource = (
  system: Pick<System_DataNames, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: "skillTypes",
  } satisfies SourceId_SystemSkillTypes,
});

export const buildVariableNamesSource = (
  system: Pick<System_DataNames, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.variables,
  source: {
    author: "rmmz",
    module: "system",
    kind: "variables",
  } satisfies SourceId_SystemVariables,
});

export const buildSwitchesSource = (
  system: Pick<System_DataNames, "switches">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSwitches(system),
  label: label.switches,
  source: {
    author: "rmmz",
    module: "system",
    kind: "switches",
  } satisfies SourceId_SystemSwitches,
});

export const buildWeaponTypesSource = (
  system: Pick<System_DataNames, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: {
    author: "rmmz",
    module: "system",
    kind: "weaponTypes",
  } satisfies SourceId_SystemWeaponTypes,
});
