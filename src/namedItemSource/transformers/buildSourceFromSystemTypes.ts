import type {
  Data_System,
  NamedItemSource,
  SourceIdentifier,
  SystemLabel_DataNames,
} from "@RpgTypes/schema";

import {
  SRC_ELEMENTS,
  SRC_WEAPON_TYPES,
  SRC_SKILL_TYPES,
  SRC_EQUIP_TYPES,
  SRC_ARMOR_TYPES,
  SRC_DATA_VARIABLE,
} from "@RpgTypes/schema";

import {
  getArmorTypes,
  getElementTypes,
  getEquipTypes,
  getSkillTypes,
  getVariableNames,
  getWeaponTypes,
} from "./data/system";
import { AUTHOR_RMMZ, MODULE_SYSTEM } from "./constants";

const makeSourceIdentifier = (sourceKey: string): SourceIdentifier => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  sourceKey,
});

export const buildElementTypesSource = (
  system: Pick<Data_System, "elements">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getElementTypes(system),
  label: label.elements,
  source: makeSourceIdentifier(SRC_ELEMENTS),
});

export const buildEquipTypesSource = (
  system: Pick<Data_System, "equipTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getEquipTypes(system),
  label: label.equipTypes,
  source: makeSourceIdentifier(SRC_EQUIP_TYPES),
});

export const buildWeaponTypesSource = (
  system: Pick<Data_System, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: makeSourceIdentifier(SRC_WEAPON_TYPES),
});

export const buildSkillTypesSource = (
  system: Pick<Data_System, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: makeSourceIdentifier(SRC_SKILL_TYPES),
});
export const buildArmorTypesSource = (
  system: Pick<Data_System, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: makeSourceIdentifier(SRC_ARMOR_TYPES),
});

export const buildVariableNamesSource = (
  system: Pick<Data_System, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.variables,
  source: makeSourceIdentifier(SRC_DATA_VARIABLE),
});
