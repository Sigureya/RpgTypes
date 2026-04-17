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
    Troop
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
  Troop
> => {
  return readers;
};
