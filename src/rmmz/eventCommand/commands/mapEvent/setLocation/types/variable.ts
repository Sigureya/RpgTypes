import type {
  EventCommandLike,
  SET_EVENT_LOCATION,
} from "@RpgTypes/libs/eventCommand";
import type { SetEventLocationDirection } from "./direct";

export interface Command_SetEventLocationVariable extends EventCommandLike<
  typeof SET_EVENT_LOCATION
> {
  parameters: ParamArray_SetEventLocationVariable;
}

export type ParamArray_SetEventLocationVariable = [
  targetCharacterId: number,
  modeVariable: 1,
  xVariableId: number,
  yVariableId: number,
  direction: SetEventLocationDirection,
];

export interface ParamObject_SetEventLocationVariable {
  targetCharacterId: number;
  xVariableId: number;
  yVariableId: number;
  direction: SetEventLocationDirection;
}
