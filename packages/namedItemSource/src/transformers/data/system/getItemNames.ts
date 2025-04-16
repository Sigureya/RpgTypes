import type {
  Data_NamedItem,
  Data_System,
  System_ParamNames,
} from "@sigureya/rpgtypes";

const makeNamedItem = (name: string, index: number): Data_NamedItem => ({
  name: name,
  id: index,
});

export const getVariableNames = (
  system: Pick<Data_System, "variables">
): Data_NamedItem[] => {
  return system.variables.map(makeNamedItem);
};

export const getElements = (
  system: Pick<Data_System, "elements">
): Data_NamedItem[] => {
  return system.elements.map(makeNamedItem);
};

export const getEquipTypes = (
  system: Pick<Data_System, "equipTypes">
): Data_NamedItem[] => {
  return system.equipTypes.map(makeNamedItem);
};

export const getSkillTypes = (
  system: Pick<Data_System, "skillTypes">
): Data_NamedItem[] => {
  return system.skillTypes.map(makeNamedItem);
};

export const getWeaponTypes = (
  system: Pick<Data_System, "weaponTypes">
): Data_NamedItem[] => {
  return system.weaponTypes.map(makeNamedItem);
};

export const getArmorTypes = (
  system: Pick<Data_System, "armorTypes">
): Data_NamedItem[] => {
  return system.armorTypes.map(makeNamedItem);
};

export const getParamNames = (system: System_ParamNames): Data_NamedItem[] => {
  return system.terms.params.map(makeNamedItem);
};
