import { EventCommandLike } from '../../../frame';
import { CHANGE_TILESET } from '../../../../rpg';
export interface Command_ChangeTileset extends EventCommandLike<typeof CHANGE_TILESET, ParamArray_ChangeTileset> {
    parameters: ParamArray_ChangeTileset;
}
export type ParamArray_ChangeTileset = [tilesetId: number];
export interface ParamObject_ChangeTileset {
    tilesetId: number;
}
