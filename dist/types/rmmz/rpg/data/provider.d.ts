import { Data_Armor, Data_Item, Data_State, Data_Weapon } from './main';
export interface Provider_RpgItems {
    dataItem(itemId: number): Data_Item | undefined | null;
    dataWeapon(weaponId: number): Data_Weapon | undefined | null;
    dataArmor(armorId: number): Data_Armor | undefined | null;
}
export interface Provider_RpgState {
    dataState(stateId: number): Data_State | undefined | null;
}
export interface Provider_RpgData extends Provider_RpgItems, Provider_RpgState {
}
