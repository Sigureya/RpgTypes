import type { System_BooleanGameMenuOptions } from "./types";

export const getItemCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[0];
};

export const getSkillCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[1];
};

export const getEquipCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[2];
};

export const getStatusCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[3];
};

export const getFormationCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[4];
};

export const getSaveCommandEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.menuCommands[5];
};

export const getItemCategoryEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.itemCategories[0];
};

export const getWeaponCategoryEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.itemCategories[1];
};

export const getArmorCategoryEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.itemCategories[2];
};

export const getKeyItemCategoryEnabled = (
  system: System_BooleanGameMenuOptions
): boolean => {
  return system.itemCategories[3];
};
