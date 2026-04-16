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

export interface ReadHandledResult<T, N = T extends unknown[] ? [] : null> {
  succcess: boolean;
  fileName: string;
  data: T | N;
  error: string;
}

export type ReadHandledArrayResult<T> = ReadHandledResult<T[]>;

export interface ReadAllDataResultFields {
  actor: unknown;
  armor: unknown;
  classes: unknown;
  commonEvent: unknown;
  enemies: unknown;
  item: unknown;
  mapInfo: unknown;
  skill: unknown;
  state: unknown;
  troop: unknown;
  weapon: unknown;
}

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
> extends ReadAllDataResultFields {
  actor: ReadHandledResult<Actor>;
  armor: ReadHandledResult<Armor>;
  classes: ReadHandledResult<Class>;
  commonEvent: ReadHandledResult<Commmon>;
  enemies: ReadHandledResult<Enemy>;
  item: ReadHandledResult<Item>;
  mapInfo: ReadArrayResult<Data_MapInfo>;
  skill: ReadHandledResult<Skill>;
  state: ReadHandledResult<State>;
  system: ReadSystemResult<System>;
  troop: ReadHandledResult<Troop>;
  weapon: ReadHandledResult<Weapon>;
}

export interface ReadAllGameDataResultWithNullFallback<
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
> extends ReadAllDataResultFields {
  actor: ReadHandledResult<Actor, null>;
  armor: ReadHandledResult<Armor, null>;
  classes: ReadHandledResult<Class, null>;
  commonEvent: ReadHandledResult<Commmon, null>;
  enemies: ReadHandledResult<Enemy, null>;
  item: ReadHandledResult<Item, null>;
  mapInfo: ReadArrayResult<Data_MapInfo>;
  skill: ReadHandledResult<Skill, null>;
  state: ReadHandledResult<State, null>;
  system: ReadSystemResult<System>;
  troop: ReadHandledResult<Troop, null>;
  weapon: ReadHandledResult<Weapon, null>;
}

export interface ReadAllArrayDataResult extends ReadAllDataResultFields {
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
