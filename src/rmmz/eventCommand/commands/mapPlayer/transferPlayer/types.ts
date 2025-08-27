import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation, Direction8 } from "@RpgTypes/rmmz/rpg";

export interface Command_TransferPlayer extends EventCommandLike2<201> {
  parameters: [
    designation: ValueOf<Designation>,
    mapId: number,
    x: number,
    y: number,
    direction: Direction8,
    fadeType: number
  ];
}
