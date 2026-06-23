import type {
  Data_Armor,
  Data_Item,
  Data_Skill,
  Data_Weapon,
} from "@RpgTypes/rmmz/rpg";

export interface Rmmz_Item<T = unknown> {
  object(): T | null | undefined;
  itemId(): number;
  setObject(object: Data_Skill): asserts this is Rmmz_Item<Data_Skill>;
  setObject(object: Data_Weapon): asserts this is Rmmz_Item<Data_Weapon>;
  setObject(object: Data_Armor): asserts this is Rmmz_Item<Data_Armor>;
  setObject(object: Data_Item): asserts this is Rmmz_Item<Data_Item>;
  setObject(object: null): asserts this is Rmmz_Item<null>;
  isSkill(): this is Rmmz_Item<Data_Skill>;
  isWeapon(): this is Rmmz_Item<Data_Weapon>;
  isArmor(): this is Rmmz_Item<Data_Armor>;
  isItem(): this is Rmmz_Item<Data_Item>;
  isNull(): this is Rmmz_Item<null>;
  setEquip(
    isWeapon: boolean,
    itemId: number,
  ): asserts this is Rmmz_Item<Data_Weapon> | Rmmz_Item<Data_Armor>;
}
