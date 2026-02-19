import { EventCommandLike, PLAY_MOVIE } from '../../../../libs/eventCommand';
export interface Command_PlayMovie extends EventCommandLike<typeof PLAY_MOVIE> {
    parameters: ParamArray_PlayMovie;
}
export type ParamArray_PlayMovie = [filename: string];
export interface ParamObject_PlayMovie {
    filename: string;
}
