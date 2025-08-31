import { EventCommandLike2 } from '../../frame';
import { CHANGE_TILESET } from '../../../rpg';
export interface Command_ChangeTileset extends EventCommandLike2<typeof CHANGE_TILESET, ParamArray_ChangeTileset> {
    parameters: ParamArray_ChangeTileset;
}
export type ParamArray_ChangeTileset = [tilesetId: number];
