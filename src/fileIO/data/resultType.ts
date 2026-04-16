import type {
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_CommonEvent,
  Data_Enemy,
  Data_Item,
  Data_MapInfo,
  Data_Skill,
  Data_State,
  Data_Troop,
  Data_Weapon,
} from "@RpgTypes/rmmz";
import type { ReadArrayResult } from "./arrayData";
import type { ReadSystemResult } from "./system";

export interface ReadHandledResult<T> {
  succcess: boolean;
  fileName: string;
  data: T | (T extends unknown[] ? [] : null);
  error: string;
}

export type ReadHandledArrayResult<T> = ReadHandledResult<T[]>;

export interface ReadAllGameDataResult<
  Commmon,
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
> {
  actor: ReadHandledArrayResult<Actor>;
  armor: ReadHandledArrayResult<Armor>;
  classes: ReadHandledArrayResult<Class>;
  commonEvent: ReadHandledArrayResult<Commmon>;
  enemies: ReadHandledArrayResult<Enemy>;
  item: ReadHandledArrayResult<Item>;
  mapInfo: ReadArrayResult<Data_MapInfo>;
  skill: ReadHandledArrayResult<Skill>;
  state: ReadHandledArrayResult<State>;
  system: ReadSystemResult<System>;
  troop: ReadHandledArrayResult<Troop>;
  weapon: ReadHandledArrayResult<Weapon>;
}

export interface ReadAllArrayDataResult {
  actor: ReadArrayResult<Data_Actor>;
  armor: ReadArrayResult<Data_Armor>;
  classes: ReadArrayResult<Data_Class>;
  commonEvent: ReadArrayResult<Data_CommonEvent>;
  enemies: ReadArrayResult<Data_Enemy>;
  item: ReadArrayResult<Data_Item>;
  mapInfo: ReadArrayResult<Data_MapInfo>;
  skill: ReadArrayResult<Data_Skill>;
  state: ReadArrayResult<Data_State>;
  system: ReadSystemResult;
  troop: ReadArrayResult<Data_Troop>;
  weapon: ReadArrayResult<Data_Weapon>;
}
