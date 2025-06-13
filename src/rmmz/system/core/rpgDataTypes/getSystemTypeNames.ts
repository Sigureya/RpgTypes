import type { Data_NamedItem } from "src/namedItemSource";
import type { System_RPG_DataNames } from "./types";

const makeNamedItem = (name: string, index: number): Data_NamedItem => ({
  name: name,
  id: index,
});

export const getVariableNames = (
  system: Pick<System_RPG_DataNames, "variables">
): Data_NamedItem[] => {
  return system.variables.map(makeNamedItem);
};

export const getElementTypes = (
  system: Pick<System_RPG_DataNames, "elements">
): Data_NamedItem[] => {
  return system.elements.map(makeNamedItem);
};

export const getEquipTypes = (
  system: Pick<System_RPG_DataNames, "equipTypes">
): Data_NamedItem[] => {
  return system.equipTypes.map(makeNamedItem);
};

export const getSkillTypes = (
  system: Pick<System_RPG_DataNames, "skillTypes">
): Data_NamedItem[] => {
  return system.skillTypes.map(makeNamedItem);
};

export const getWeaponTypes = (
  system: Pick<System_RPG_DataNames, "weaponTypes">
): Data_NamedItem[] => {
  return system.weaponTypes.map(makeNamedItem);
};

export const getArmorTypes = (
  system: Pick<System_RPG_DataNames, "armorTypes">
): Data_NamedItem[] => {
  return system.armorTypes.map(makeNamedItem);
};

export const getSwitches = (
  system: Pick<System_RPG_DataNames, "switches">
): Data_NamedItem[] => {
  return system.switches.map(makeNamedItem);
};
