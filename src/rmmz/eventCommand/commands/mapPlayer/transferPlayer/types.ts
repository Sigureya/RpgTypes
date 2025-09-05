import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation } from "@RpgTypes/rmmz/rpg";
import type { Direction8 } from "@RpgTypes/rmmz/utils";

export interface Command_TransferPlayer extends EventCommandLike2<201> {
  parameters: ParamArray_TransferPlayer;
}

export type ParamArray_TransferPlayer = [
  designation: ValueOf<Designation>,
  mapId: number,
  x: number,
  y: number,
  direction: Direction8,
  fadeType: number
];
