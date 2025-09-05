import { Command_ChangeArmors } from './armor';
import { Command_ChangeItems } from './item';
import { Command_ChangeWeapons } from './weapon';
export type Command_ChangeAnyItem = Command_ChangeItems | Command_ChangeWeapons | Command_ChangeArmors;
