import type { StatusParamObject } from "@RpgTypes/rmmz";

export interface NewBattler {
  name: string;
  baseParams: StatusParamObject;
  paramRates: StatusParamObject;
  variables: BattlerVariables;
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

export interface NewState {
  stateId: number;
  startTurn: number;
  turnLimit: number;
  sourceBattlerId: number;
}
