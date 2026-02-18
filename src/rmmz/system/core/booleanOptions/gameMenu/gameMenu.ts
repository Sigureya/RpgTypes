import type { MenuCommandsEnabled } from "./menuCommands";
import type {
  System_BooleanGameMenuOptions,
  System_BooleanMenuCommands,
} from "./types";

export const createMenuCommandState = (
  system: System_BooleanMenuCommands,
): MenuCommandsEnabled => ({
  item: getItemCommandEnabled(system),
  skill: getSkillCommandEnabled(system),
  equip: getEquipCommandEnabled(system),
  status: getStatusCommandEnabled(system),
  formation: getFormationCommandEnabled(system),
  save: getSaveCommandEnabled(system),
});

export const getItemCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[0];
};

export const getSkillCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[1];
};

export const getEquipCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[2];
};

export const getStatusCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[3];
};

export const getFormationCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[4];
};

export const getSaveCommandEnabled = (
  system: System_BooleanMenuCommands,
): boolean => {
  return system.menuCommands[5];
};

export const getItemCategoryEnabled = (
  system: System_BooleanGameMenuOptions,
): boolean => {
  return system.itemCategories[0];
};

export const getWeaponCategoryEnabled = (
  system: System_BooleanGameMenuOptions,
): boolean => {
  return system.itemCategories[1];
};

export const getArmorCategoryEnabled = (
  system: System_BooleanGameMenuOptions,
): boolean => {
  return system.itemCategories[2];
};

export const getKeyItemCategoryEnabled = (
  system: System_BooleanGameMenuOptions,
): boolean => {
  return system.itemCategories[3];
};
