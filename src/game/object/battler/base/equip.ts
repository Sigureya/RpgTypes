import { DataArmor, DataEquipment, DataWeapon } from "src/game/data/item";

export interface Data_Equip {
  canEquip(item: DataEquipment): boolean;
  canEquipWeapon(weapon: DataWeapon): boolean;
  canEquipArmor(armor: DataArmor): boolean;
}
