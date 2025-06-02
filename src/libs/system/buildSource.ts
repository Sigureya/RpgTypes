import type { NamedItemSource } from "src/namedItemSource";

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
  systemElementsSourceId,
  systemEquipTypesSourceId,
  systemSkillTypesSourceId,
  systemWeaponTypesSourceId,
  systemArmorTypesSourceId,
  systemSwitchesSourceId,
} from "./sourceId";

export const buildElementTypesSource = (
  system: Pick<Data_System, "elements">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getElementTypes(system),
  label: label.elements,
  source: systemElementsSourceId(),
});

export const buildEquipTypesSource = (
  system: Pick<Data_System, "equipTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getEquipTypes(system),
  label: label.equipTypes,
  source: systemEquipTypesSourceId(),
});

export const buildWeaponTypesSource = (
  system: Pick<Data_System, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: systemWeaponTypesSourceId(),
});

export const buildSkillTypesSource = (
  system: Pick<Data_System, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: systemSkillTypesSourceId(),
});
export const buildArmorTypesSource = (
  system: Pick<Data_System, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: systemArmorTypesSourceId(),
});

export const buildVariableNamesSource = (
  system: Pick<Data_System, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.variables,
  source: systemSwitchesSourceId(),
});
