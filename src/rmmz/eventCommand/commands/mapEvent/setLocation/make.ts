import { SET_EVENT_LOCATION } from "@RpgTypes/libs/eventCommand";
import type {
  Command_SetEventLocationDirect,
  Command_SetEventLocationExchange,
  Command_SetEventLocationVariable,
  ParamObject_SetEventLocationDirect,
  ParamObject_SetEventLocationExchange,
  ParamObject_SetEventLocationVariable,
} from "./types";

export const makeCommandSetEventLocationDirect = (
  param: ParamObject_SetEventLocationDirect,
  indent: number = 0,
): Command_SetEventLocationDirect => ({
  code: SET_EVENT_LOCATION,
  indent,
  parameters: [param.targetCharacterId, 0, param.x, param.y, param.direction],
});

export const makeCommandSetEventLocationVariable = (
  param: ParamObject_SetEventLocationVariable,
  indent: number = 0,
): Command_SetEventLocationVariable => ({
  code: SET_EVENT_LOCATION,
  indent,
  parameters: [
    param.targetCharacterId,
    1,
    param.xVariableId,
    param.yVariableId,
    param.direction,
  ],
});

export const makeCommandSetEventLocationExchange = (
  param: ParamObject_SetEventLocationExchange,
  indent: number = 0,
): Command_SetEventLocationExchange => ({
  code: SET_EVENT_LOCATION,
  indent,
  parameters: [
    param.targetCharacterId,
    2,
    param.exchangeCharacterId,
    0,
    param.direction,
  ],
});
