import { EventCommandLike2 } from '../../../frame';
import { FADEOUT_BGM, FADEOUT_BGS, RESUME_BGM, SAVE_BGM } from '../../../../rpg';
export interface Command_FadeOutBGM extends EventCommandLike2<typeof FADEOUT_BGM, [duration: number]> {
}
export interface Command_SaveBGM extends EventCommandLike2<typeof SAVE_BGM, []> {
}
export interface Command_ResumeBGM extends EventCommandLike2<typeof RESUME_BGM, []> {
}
export interface Command_FadeOutBGS extends EventCommandLike2<typeof FADEOUT_BGS> {
    parameters: ParamArray_FadeOutAudio;
}
export type ParamArray_FadeOutAudio = [duration: number];
