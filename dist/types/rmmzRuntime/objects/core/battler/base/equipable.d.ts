import { Data_Equipment, Data_Weapon, Data_Armor } from '../../../../../rmmz/rpg';
export interface Rmmz_Equipable {
    canEquip(item: Data_Equipment): boolean;
    canEquipWeapon(weapon: Data_Weapon): boolean;
    canEquipArmor(armor: Data_Armor): boolean;
}
