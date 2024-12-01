import type { Data_Armor, Data_Weapon } from "../../schema/";

type VariantItem = Data_Weapon | Data_Armor;

export declare class Game_Item {
  object(): VariantItem;
  isSkill(): boolean;
  isItem(): boolean;
  isUsableItem(): boolean;
  isWeapon(): boolean;
  isArmor(): boolean;
  isEquipItem(): boolean;
  isNull(): boolean;
  itemId(): number;

  static readonly EFFECT_RECOVER_HP = 11;
  static readonly EFFECT_RECOVER_MP = 12;
  static readonly EFFECT_GAIN_TP = 13;
  static readonly EFFECT_ADD_STATE = 21;
  static readonly EFFECT_REMOVE_STATE = 22;
  static readonly EFFECT_ADD_BUFF = 31;
  static readonly EFFECT_ADD_DEBUFF = 32;
  static readonly EFFECT_REMOVE_BUFF = 33;
  static readonly EFFECT_REMOVE_DEBUFF = 34;
  static readonly EFFECT_SPECIAL = 41;
  static readonly EFFECT_GROW = 42;
  static readonly EFFECT_LEARN_SKILL = 43;
  static readonly EFFECT_COMMON_EVENT = 44;
  static readonly SPECIAL_EFFECT_ESCAPE = 0;
  static readonly HITTYPE_CERTAIN = 0;
  static readonly HITTYPE_PHYSICAL = 1;
  static readonly HITTYPE_MAGICAL = 2;
}
