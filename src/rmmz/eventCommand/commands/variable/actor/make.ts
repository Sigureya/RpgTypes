import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type { ValueOf } from "src/libs/templates/valueOf";
import type { ACTOR_STATUS } from "./dataSource";
import type {
  Command_ControlVariables_FromActor,
  ParamArray_VariableFromActorStatus,
  ParamObject_VariableFromActor,
} from "./types";

export const makeCommandVariableFromActorCurrentLevel = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromActorCurrentExp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromActorCurrentHp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromActorCurrentMp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

export const makeCommandVariableFromActorCurrentTp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 12),
  };
};

export const makeCommandVariableFromActorMaxHp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromActorMaxMp = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 5),
  };
};

export const makeCommandVariableFromActorAtk = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 6),
  };
};

export const makeCommandVariableFromActorDef = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 7),
  };
};

export const makeCommandVariableFromActorMat = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 8),
  };
};

export const makeCommandVariableFromActorMdf = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 9),
  };
};

export const makeCommandVariableFromActorAgi = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 10),
  };
};

export const makeCommandVariableFromActorLuk = (
  params: ParamObject_VariableFromActor,
  indent: number = 0,
): Command_ControlVariables_FromActor => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 11),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromActor,
  actorParamId: ValueOf<typeof ACTOR_STATUS>,
): ParamArray_VariableFromActorStatus => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  3,
  params.actorId,
  actorParamId,
];
