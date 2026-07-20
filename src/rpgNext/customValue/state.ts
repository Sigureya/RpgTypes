import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type {
  BooleanParam,
  NumberParam,
  PluginParamEx,
  RpgDataIdParam,
} from "@sigureya/rmmz-plugin-schema";
import { createVariables } from "./customVariable/make";
import type { CustomVariables } from "./customVariable/types";
import type { StateInstanceItemArg } from "./state/types";

export interface StateInstanceItem extends StateInstanceItemArg {
  startTurn: number;
  stateId: number;
  turnLimit: number;
  sourceBattlerId: number;
  variables: CustomVariables;
}

export interface StateSchema {
  pluginName: string;
  params: (NumberParam | RpgDataIdParam)[];
  variables: {
    numbers: PluginParamEx<NumberParam>[];
    booleans: PluginParamEx<BooleanParam>[];
  };
}

export const createStateInstance = (
  arg: StateInstanceItemArg,
  schema: ReadonlyArray<StateSchema>,
): StateInstanceItem => {
  return {
    stateId: arg.stateId,
    startTurn: arg.startTurn,
    turnLimit: arg.turnLimit,
    sourceBattlerId: arg.sourceBattlerId,
    variables: createVariables(schema),
  };
};

export const isStateEnd = (
  instance: StateInstanceItem,
  battler: Rmmz_Battler,
): boolean => {
  const turn: number = battler.turnCount();
  return turn > instance.startTurn + instance.turnLimit;
};
