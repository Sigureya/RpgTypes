import {
  Data_Armor,
  Data_Equipment,
  Data_Weapon,
} from "src/game/data/item/equipment";

export interface Equip {
  canEquip(item: Data_Equipment): boolean;
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
}
