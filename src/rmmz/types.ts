import type { Data_Troop, Data_CommonEvent } from "./events";
import type {
  Data_MapInfo,
  Data_Actor,
  Data_Enemy,
  Data_Weapon,
  Data_Armor,
  Data_Class,
  Data_Item,
  Data_Skill,
  Data_State,
  Data_Animation,
  Data_Tileset,
} from "./rpg";
import type { Data_System } from "./system";

export interface RpgDataBundle {
  mapInfos: Data_MapInfo[];
  actors: Data_Actor[];
  enemies: Data_Enemy[];
  weapons: Data_Weapon[];
  armors: Data_Armor[];
  classes: Data_Class[];
  items: Data_Item[];
  troops: Data_Troop[];
  commonEvents: Data_CommonEvent[];
  skills: Data_Skill[];
  states: Data_State[];
  animations: Data_Animation[];
  tilesets: Data_Tileset[];
  system: Data_System;
}
