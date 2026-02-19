import type {
  EventCommandLike,
  CHANGE_TILESET,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ChangeTileset extends EventCommandLike<
  typeof CHANGE_TILESET,
  ParamArray_ChangeTileset
> {
  parameters: ParamArray_ChangeTileset;
}

export type ParamArray_ChangeTileset = [tilesetId: number];

export interface ParamObject_ChangeTileset {
  tilesetId: number;
}
