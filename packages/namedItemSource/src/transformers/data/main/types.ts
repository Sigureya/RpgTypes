import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_NamedItem,
  Data_Skill,
  Data_State,
  Data_Troop,
  Data_Weapon,
  NamedItem,
} from "@sigureya/rpgtypes";

export interface GlobalGameData {
  actors: Data_Actor[];
  classes: Data_Class[];
  skills: Data_Skill[];
  items: Data_Item[];
  weapons: Data_Weapon[];
  armors: Data_Armor[];
  enemies: Data_Enemy[];
  troops: Data_Troop[];
  states: Data_State[];
  commonEvents: Data_CommonEvent[];
}

export type GlobalGameDataNamedItems = {
  [K in keyof GlobalGameData]: GlobalGameData[K] extends Array<
    infer T extends Data_NamedItem
  >
    ? NamedItem<T>[]
    : never;
};
