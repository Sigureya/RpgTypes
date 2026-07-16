import type { Data_Armor, Data_Weapon } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_ActorEquiper {
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
  canEquip(item: Data_Weapon | Data_Armor): boolean;
}
