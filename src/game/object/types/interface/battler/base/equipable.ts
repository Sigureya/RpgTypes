import { Data_Armor, Data_Equipment, Data_Weapon } from "@schema/data";

export interface IEquipable {
  canEquip(item: Data_Equipment): boolean;
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
}
