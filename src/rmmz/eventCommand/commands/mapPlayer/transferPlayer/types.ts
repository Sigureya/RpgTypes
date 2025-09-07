import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation, Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_TransferPlayer extends EventCommandLike<201> {
  parameters: ParamArray_TransferPlayer;
}

export type ParamArray_TransferPlayer =
  | ParamArray_TransferPlayerDirect
  | ParamArray_TransferPlayerVariable;

export type ParamArray_TransferPlayerDirect = [
  designation: Designation["DIRECT"],
  mapId: number,
  x: number,
  y: number,
  direction: Direction8,
  fadeType: number
];

export type ParamArray_TransferPlayerVariable = [
  designation: Designation["VARIABLE"],
  mapIdVariableId: number,
  xVariableId: number,
  yVariableId: number,
  direction: Direction8,
  fadeType: number
];
