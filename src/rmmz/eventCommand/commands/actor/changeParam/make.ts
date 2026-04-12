import { CHANGE_PARAMETER } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ChangeParam,
  ParamArray_ChangeParam,
  ParamObject_ChangeParam,
} from "./types";

export const makeCommandIncreaseActorParam = (
  parameters: ParamObject_ChangeParam,
  indent: number = 0,
): Command_ChangeParam => ({
  code: CHANGE_PARAMETER,
  indent,
  parameters: paramArray(parameters, 0),
});

export const makeCommandDecreaseActorParam = (
  parameters: ParamObject_ChangeParam,
  indent: number = 0,
): Command_ChangeParam => ({
  code: CHANGE_PARAMETER,
  indent,
  parameters: paramArray(parameters, 1),
});

const paramArray = (
  parameters: ParamObject_ChangeParam,
  operation: number,
): ParamArray_ChangeParam => {
  return [parameters.actorId, parameters.paramId, operation, parameters.value];
};
