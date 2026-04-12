import type { EventCommandLike } from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeParam extends EventCommandLike<317> {
  parameters: ParamArray_ChangeParam;
}

export interface ParamObject_ChangeParam {
  actorId: number;
  paramId: number;
  operation: number;
  value: number;
}

export type ParamArray_ChangeParam = [
  actorId: number,
  paramId: number,
  operation: number,
  value: number,
];
