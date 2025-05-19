import type { MenuCommandsEnabledArray } from "./types";
import type { MenuCommandsEnabled } from "./types";

export const makeMenuCommandsEnabled = (
  param: Partial<MenuCommandsEnabled>
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
