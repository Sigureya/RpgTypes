import type { Data_Equipment, Data_Weapon, Data_Armor } from "../../../../../../schema";
export interface IEquipable {
    canEquip(item: Data_Equipment): boolean;
    canEquipWeapon(weapon: Data_Weapon): boolean;
    canEquipArmor(armor: Data_Armor): boolean;
}
