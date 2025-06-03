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
import type { Data_System } from "./system";
import type { SystemLabel_DataNames } from "./systemLabels";
import {
  systemElementsSourceId,
  systemEquipTypesSourceId,
  systemSkillTypesSourceId,
  systemWeaponTypesSourceId,
  systemArmorTypesSourceId,
  systemSwitchesSourceId,
  systemVariablesSourceId,
} from "./sourceId";
import type { System_DataNames } from "./subset";

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
  system: Pick<Data_System, "armorTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: systemArmorTypesSourceId(),
});

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

export const buildSkillTypesSource = (
  system: Pick<Data_System, "skillTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: systemSkillTypesSourceId(),
});

export const buildVariableNamesSource = (
  system: Pick<Data_System, "variables">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getVariableNames(system),
  label: label.variables,
  source: systemVariablesSourceId(),
});

export const buildSwitchesSource = (
  system: Pick<Data_System, "switches">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getSwitches(system),
  label: label.switches,
  source: systemSwitchesSourceId(),
});

export const buildWeaponTypesSource = (
  system: Pick<Data_System, "weaponTypes">,
  label: SystemLabel_DataNames
): NamedItemSource => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: systemWeaponTypesSourceId(),
});
