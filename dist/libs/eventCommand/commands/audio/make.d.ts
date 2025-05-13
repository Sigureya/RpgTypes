import { AudioFileParams } from '../../../utils';
import { Command2_PlayBGM, Command2_PlayBGS, Command2_PlayME, Command2_PlaySE, Command2_ChangeDefeatME, Command2_ChangeVictoryME, Command2_ChangeBattleBGM, CommandUnion_AnyAudio } from './types';
export declare const makeCommandAudioAny: <Code extends CommandUnion_AnyAudio["code"]>(code: Code, audio: AudioFileParams, indent?: number) => {
    code: Code;
    parameters: [AudioFileParams];
    indent: number;
};
export declare const makeCommandPlayBGM: (audio: AudioFileParams, indent?: number) => Command2_PlayBGM;
export declare const makeCommandPlayBGS: (audio: AudioFileParams, indent?: number) => Command2_PlayBGS;
export declare const makeCommandPlayME: (audio: AudioFileParams, indent?: number) => Command2_PlayME;
export declare const makeCommandPlaySE: (audio: AudioFileParams, indent?: number) => Command2_PlaySE;
export declare const makeCommandChangeBattleBGM: (audio: AudioFileParams, indent?: number) => Command2_ChangeBattleBGM;
export declare const makeCommandChangeVictoryME: (audio: AudioFileParams, indent?: number) => Command2_ChangeVictoryME;
export declare const makeCommandChangeDefeatME: (audio: AudioFileParams, indent?: number) => Command2_ChangeDefeatME;
