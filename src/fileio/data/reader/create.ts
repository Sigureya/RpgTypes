import type { RpgDataReadHandlers } from "./handlers";

export const createGameDataReadHandlers = <
  Commmon,
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
    Commmon,
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
  Commmon,
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
