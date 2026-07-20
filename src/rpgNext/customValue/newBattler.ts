import type {
  BooleanParam,
  NumberParam,
  PluginParamEx,
  RpgDataIdParam,
} from "@sigureya/rmmz-plugin-schema";
import { createVariables } from "./customVariable/make";
import type { CustomVariables } from "./customVariable/types";

export interface StateInstanceItem extends StateInstanceItemArg {
  startTurn: number;
  stateId: number;
  extendsTurn: number;
  sourceBattlerId: number;
  variables: CustomVariables;
}

export interface StateInstanceItemArg {
  startTurn: number;
  stateId: number;
  extendsTurn: number;
  sourceBattlerId: number;
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
    extendsTurn: arg.extendsTurn,
    sourceBattlerId: arg.sourceBattlerId,
    variables: createVariables(schema),
  };
};
