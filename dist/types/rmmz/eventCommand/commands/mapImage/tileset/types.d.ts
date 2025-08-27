import { EventCommandLike2 } from '../../../frame';
import { CHANGE_TILESET } from '../../../../rpg';
export interface Command_ChangeTileset extends EventCommandLike2<typeof CHANGE_TILESET> {
}
