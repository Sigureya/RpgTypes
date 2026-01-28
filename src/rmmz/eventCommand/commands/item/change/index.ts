export type {
  Command_ChangeArmors,
  ParamArray_ChangeArmors,
  ParamObject_ChangeArmors,
} from "./types/armor";

export type {
  Command_ChangeItems,
  Command_ChangeItemsByVariable,
  Command_ChangeItemsDirect,
  ParamArray_ChangeItems,
  ParamArray_ChangeItemsTemplate,
  ParamArray_GainItemsDirect,
  ParamArray_GainItemsVariable,
  ParamArray_LoseItemVariable,
  ParamArray_LoseItemsDirect,
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
  fromArrayChangeItems,
  isUsingVaribleCommandChangingItems,
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

export { isUsingVariableItemCommand } from "./utils";

export {
  makeCommandGainArmor,
  makeCommandGainArmorByVariable,
  makeCommandLoseArmor,
  makeCommandLoseArmorByVariable,
} from "./armor";
