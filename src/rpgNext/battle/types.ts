import type { StatusParamObject } from "@RpgTypes/rmmz";
import type { NewState } from "./state/types";

export interface NewBattler {
  name: string;
  baseParams: StatusParamObject;
  paramRates: StatusParamObject;
  variables: BattlerVariables;
  armors: number[];
}

export interface BattlerVariables {
  hp: number;
  mp: number;
  tp: number;
  states: NewState[];
  buffPlus: BuffItem[];
  buffRate: BuffItem[];
  turnCount: number;
  custom: {
    booleans: Record<string, boolean>;
    numbers: Record<string, number>;
    objects: Record<string, object>;
  };
}

export interface BuffItem {
  startTurn: number;
  paramId: number;
  sourceBattlerId: number;
  value: number;
}
