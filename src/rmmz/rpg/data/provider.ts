import type { EventCommandUnknown } from "@RpgTypes/libs";
import type { Data_CommonEventUnknown } from "./event";
import type {
  Data_Armor,
  Data_Class,
  Data_Item,
  Data_State,
  Data_Weapon,
} from "./main";

export interface Provider_RpgItems {
  dataItem(itemId: number): Data_Item | undefined | null;
  dataWeapon(weaponId: number): Data_Weapon | undefined | null;
  dataArmor(armorId: number): Data_Armor | undefined | null;
}

export interface Provider_CommonEvents<
  Comand extends EventCommandUnknown = EventCommandUnknown,
> {
  isValidCommonEvent(commonEventId: number): boolean;
  commonEvent(
    commonEventId: number,
  ): Data_CommonEventUnknown<Comand> | undefined | null;
}
export interface Provider_RpgState {
  dataState(stateId: number): Data_State | undefined | null;
}

export interface Provider_RpgData extends Provider_RpgItems, Provider_RpgState {
  classData(classId: number): Data_Class | undefined | null;
}
