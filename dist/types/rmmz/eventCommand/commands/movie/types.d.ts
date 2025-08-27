import { PLAY_MOVIE } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_PlayMovie extends EventCommandLike2<typeof PLAY_MOVIE> {
    parameters: ParamArray_PlayMovie;
}
export type ParamArray_PlayMovie = [filename: string];
export interface ParamObject_PlayMovie {
    filename: string;
}
