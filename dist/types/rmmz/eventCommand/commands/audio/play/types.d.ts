import { EventCommandLike } from '../../..';
import { AudioFileParams } from 'src/libs/utils';
export interface AudioCommandBase<Code extends number> extends EventCommandLike<Code> {
    code: Code;
    parameters: [AudioFileParams];
}
export interface CommandUnion_AnyAudio extends AudioCommandBase<132 | 133 | 139 | 241 | 245 | 249 | 250> {
}
export interface Command_ChangeBattleBGM extends AudioCommandBase<132> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeVictoryME extends AudioCommandBase<133> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeDefeatME extends AudioCommandBase<139> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayBGM extends EventCommandLike<241> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayBGS extends EventCommandLike<245> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlayME extends EventCommandLike<249> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlaySE extends EventCommandLike<250> {
    parameters: [value: AudioFileParams];
}
