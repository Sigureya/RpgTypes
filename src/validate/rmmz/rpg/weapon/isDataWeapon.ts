import type { Data_Weapon } from "@RpgTypes/rmmz";
import valdateWewapon from "./weaponValidate";

export const isDataWeapon = (data: unknown): data is Data_Weapon => {
  return valdateWewapon(data);
};
