import type { MenuCommandsEnabledArray } from "./types";
import type { MenuCommandsEnabled } from "./types";

export const makeMenuCommandsEnabled = (
  param: Partial<MenuCommandsEnabled> = {}
): MenuCommandsEnabledArray => {
  return [
    param.item ?? true,
    param.skill ?? true,
    param.equip ?? true,
    param.status ?? true,
    param.formation ?? true,
    param.save ?? true,
  ];
};

export const makeMenuCommandsEnabledFromArray = (
  array: MenuCommandsEnabledArray
): MenuCommandsEnabled => {
  return {
    item: array[0],
    skill: array[1],
    equip: array[2],
    status: array[3],
    formation: array[4],
    save: array[5],
  };
};
