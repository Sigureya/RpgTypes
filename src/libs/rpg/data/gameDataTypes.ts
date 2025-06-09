import type {
  Data_Actor,
  Data_Item,
  Data_Enemy,
  Data_Armor,
  Data_Weapon,
  Data_Class,
  Data_Skill,
  Data_State,
  Data_CommonEvent,
} from ".";

export interface GameData {
  items: Data_Item[];
  actors: Data_Actor[];
  enemies: Data_Enemy[];
  armors: Data_Armor[];
  weapons: Data_Weapon[];
  classes: Data_Class[];
  skills: Data_Skill[];
  states: Data_State[];
  commonEvents: Data_CommonEvent[];
}
