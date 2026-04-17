import type { RpgDataReadHandlers } from "./handlers";

export const defineGameDataReadHandlers = <
  Common,
  Map,
  System,
  Actor,
  Skill,
  Item,
  Weapon,
  Armor,
  Enemy,
  Class,
  State,
  Troop,
  Animation,
  Tileset,
>(
  readers: RpgDataReadHandlers<
    Common,
    Map,
    System,
    Actor,
    Skill,
    Item,
    Weapon,
    Armor,
    Enemy,
    Class,
    State,
    Troop,
    Animation,
    Tileset
  >,
): RpgDataReadHandlers<
  Common,
  Map,
  System,
  Actor,
  Skill,
  Item,
  Weapon,
  Armor,
  Enemy,
  Class,
  State,
  Troop,
  Animation,
  Tileset
> => {
  return readers;
};
