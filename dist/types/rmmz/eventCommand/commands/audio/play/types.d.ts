import { CHANGE_BATTLE_BGM, CHANGE_DEFEAT_ME, CHANGE_VICTORY_ME, EventCommandLike, PLAY_BGM, PLAY_BGS, PLAY_ME, PLAY_SE } from '../../../../../libs/eventCommand';
import { AudioFileParams } from 'src/libs/utils';
export interface AudioCommandBase<Code extends number> extends EventCommandLike<Code> {
    code: Code;
    parameters: [AudioFileParams];
}
export interface CommandUnion_AnyAudio extends AudioCommandBase<132 | 133 | 139 | 241 | 245 | 249 | 250> {
}
export interface Command_ChangeBattleBGM extends AudioCommandBase<typeof CHANGE_BATTLE_BGM> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeVictoryME extends AudioCommandBase<typeof CHANGE_VICTORY_ME> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeDefeatME extends AudioCommandBase<typeof CHANGE_DEFEAT_ME> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayBGM extends EventCommandLike<typeof PLAY_BGM> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayBGS extends EventCommandLike<typeof PLAY_BGS> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayME extends EventCommandLike<typeof PLAY_ME> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlaySE extends EventCommandLike<typeof PLAY_SE> {
    parameters: [value: AudioFileParams];
}
