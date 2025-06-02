import type { Data_NamedItem2 } from "src/namedItemSource";
import type { Data_System } from "./system";
import type { System_ParamNames } from "./subset";

const makeNamedItem = (name: string, index: number): Data_NamedItem2 => ({
  name: name,
  id: index,
});

export const getVariableNames = (
  system: Pick<Data_System, "variables">
): Data_NamedItem2[] => {
  return system.variables.map(makeNamedItem);
};

export const getElementTypes = (
  system: Pick<Data_System, "elements">
): Data_NamedItem2[] => {
  return system.elements.map(makeNamedItem);
};

export const getEquipTypes = (
  system: Pick<Data_System, "equipTypes">
): Data_NamedItem2[] => {
  return system.equipTypes.map(makeNamedItem);
};

export const getSkillTypes = (
  system: Pick<Data_System, "skillTypes">
): Data_NamedItem2[] => {
  return system.skillTypes.map(makeNamedItem);
};

export const getWeaponTypes = (
  system: Pick<Data_System, "weaponTypes">
): Data_NamedItem2[] => {
  return system.weaponTypes.map(makeNamedItem);
};

export const getArmorTypes = (
  system: Pick<Data_System, "armorTypes">
): Data_NamedItem2[] => {
  return system.armorTypes.map(makeNamedItem);
};

export const getParamNames = (system: System_ParamNames): Data_NamedItem2[] => {
  return system.terms.params.map(makeNamedItem);
};
