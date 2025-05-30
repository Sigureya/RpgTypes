import type { NamedItemSource } from "@RpgTypes/schema";

import {
  getElementTypes,
  getEquipTypes,
  getWeaponTypes,
  getSkillTypes,
  getArmorTypes,
  getVariableNames,
} from "./getSystemTypeNames";
import type { Data_System } from "./system";
import type { SystemLabel_DataNames } from "./systemLabels";
import {
  sourceIdSystemElements,
  sourceIdSystemEquipTypes,
  sourceIdSystemSkillTypes,
  sourceIdSystemWeaponTypes,
  sourceIdSystemArmorTypes,
  sourceIdSystemSwitches,
} from "./sourceId";

export const buildElementTypesSource = (
  system: Pick<Data_System, "elements">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getElementTypes(system),
  label: label.elements,
  source: sourceIdSystemElements(),
});

export const buildEquipTypesSource = (
  system: Pick<Data_System, "equipTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getEquipTypes(system),
  label: label.equipTypes,
  source: sourceIdSystemEquipTypes(),
});

export const buildWeaponTypesSource = (
  system: Pick<Data_System, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: sourceIdSystemWeaponTypes(),
});

export const buildSkillTypesSource = (
  system: Pick<Data_System, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: sourceIdSystemSkillTypes(),
});
export const buildArmorTypesSource = (
  system: Pick<Data_System, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: sourceIdSystemArmorTypes(),
});

export const buildVariableNamesSource = (
  system: Pick<Data_System, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.variables,
  source: sourceIdSystemSwitches(),
});
