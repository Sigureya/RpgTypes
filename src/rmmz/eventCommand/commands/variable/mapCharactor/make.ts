import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type { ValueOf } from "src/libs/templates/valueOf";
import type {
  Command_ControlVariables_FromMapCharactor,
  ParamArray_VariableFromMapCharactor,
  ParamObject_VariableFromMapCharactor,
  ParamObject_VariableFromMapPlayer,
} from "./types";
import { MAP_CHARACTOR_PARAM } from "./types";

export const makeCommandVariableFromMapCharactorX = (
  params: ParamObject_VariableFromMapCharactor,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, MAP_CHARACTOR_PARAM.X),
  };
};

export const makeCommandVariableFromMapCharactorY = (
  params: ParamObject_VariableFromMapCharactor,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, MAP_CHARACTOR_PARAM.Y),
  };
};

export const makeCommandVariableFromMapCharactorDirection = (
  params: ParamObject_VariableFromMapCharactor,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, MAP_CHARACTOR_PARAM.DIRECTION),
  };
};

export const makeCommandVariableFromMapCharactorScreenX = (
  params: ParamObject_VariableFromMapCharactor,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, MAP_CHARACTOR_PARAM.SCREEN_X),
  };
};

export const makeCommandVariableFromMapCharactorScreenY = (
  params: ParamObject_VariableFromMapCharactor,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, MAP_CHARACTOR_PARAM.SCREEN_Y),
  };
};

export const makeCommandVariableFromMapPlayerX = (
  params: ParamObject_VariableFromMapPlayer,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(
      {
        startId: params.startId,
        endId: params.endId,
        operation: params.operation,
        charactorId: 0,
      },
      MAP_CHARACTOR_PARAM.X,
    ),
  };
};

export const makeCommandVariableFromMapPlayerY = (
  params: ParamObject_VariableFromMapPlayer,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(
      {
        startId: params.startId,
        endId: params.endId,
        operation: params.operation,
        charactorId: -1,
      },
      MAP_CHARACTOR_PARAM.Y,
    ),
  };
};

export const makeCommandVariableFromMapPlayerDirection = (
  params: ParamObject_VariableFromMapPlayer,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(
      {
        startId: params.startId,
        endId: params.endId,
        operation: params.operation,
        charactorId: -1,
      },
      MAP_CHARACTOR_PARAM.DIRECTION,
    ),
  };
};

export const makeCommandVariableFromMapPlayerScreenX = (
  params: ParamObject_VariableFromMapPlayer,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(
      {
        startId: params.startId,
        endId: params.endId,
        operation: params.operation,
        charactorId: -1,
      },
      MAP_CHARACTOR_PARAM.SCREEN_X,
    ),
  };
};

export const makeCommandVariableFromMapPlayerScreenY = (
  params: ParamObject_VariableFromMapPlayer,
  indent: number = 0,
): Command_ControlVariables_FromMapCharactor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(
      {
        startId: params.startId,
        endId: params.endId,
        operation: params.operation,
        charactorId: -1,
      },
      MAP_CHARACTOR_PARAM.SCREEN_Y,
    ),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromMapCharactor,
  param: ValueOf<typeof MAP_CHARACTOR_PARAM>,
): ParamArray_VariableFromMapCharactor => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  5,
  params.charactorId ?? 0,
  param,
];
