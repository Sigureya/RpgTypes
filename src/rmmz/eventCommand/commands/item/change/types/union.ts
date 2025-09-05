import type { Command_ChangeArmors } from "./armor";
import type { Command_ChangeItems } from "./item";
import type { Command_ChangeWeapons } from "./weapon";

export type Command_ChangeAnyItem =
  | Command_ChangeItems
  | Command_ChangeWeapons
  | Command_ChangeArmors;
