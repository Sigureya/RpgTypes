export type {
  Command_ChangeArmors,
  ParamArray_ChangeArmors,
  ParamObject_ChangeArmors,
  ParamObject_GainArmor,
  ParamObject_GainArmorV,
} from "./types/armor";

export type {
  Command_ChangeItems,
  ParamArray_ChangeItems,
  ParamObject_ChangeItems,
  ParamObject_ChangeItemsFullset,
  ParamObject_ChangeItemsV,
} from "./types/item";

export type {
  Command_ChangeWeapons,
  ParamArray_ChangeWeapons,
  ParamObject_ChangeWeapons,
  ParamObject_ChangeWeaponsFullset,
  ParamObject_ChangeWeaponsV,
} from "./types/weapon";

export {
  fromArrayChangeArmors,
  makeCommandChangeArmors,
  makeCommandGainArmor,
  makeCommandGainArmorV,
  makeCommandLoseArmor,
  makeCommandLoseArmorV,
} from "./armor";

export {
  fromArrayChangeItems,
  makeCommandChangeItems,
  makeCommandGainItem,
  makeCommandGainItemV,
  makeCommandLoseItem,
  makeCommandLoseItemV,
} from "./item";

export {
  fromArrayChangeWeapons,
  makeCommandChangeWeapons,
  makeCommandGainWeapon,
  makeCommandGainWeaponV,
  makeCommandLoseWeapon,
  makeCommandLoseWeaponV,
} from "./weapon";
