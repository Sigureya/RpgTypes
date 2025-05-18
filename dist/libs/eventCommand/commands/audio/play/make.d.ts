import { AudioFileParams } from '../../../../utils';
import { Command_PlayBGM, Command_PlayBGS, Command_PlayME, Command_PlaySE, Command_ChangeDefeatME, Command_ChangeVictoryME, Command_ChangeBattleBGM, CommandUnion_AnyAudio } from './types';
export declare const makeAudioCommand: <Code extends CommandUnion_AnyAudio["code"]>(code: Code, filename: string) => {
    code: Code;
    parameters: [AudioFileParams];
    indent: number;
};
export declare const makeCommandAudioAny: <Code extends CommandUnion_AnyAudio["code"]>(code: Code, audio: AudioFileParams, indent?: number) => {
    code: Code;
    parameters: [AudioFileParams];
    indent: number;
};
export declare const makeCommandPlayBGM: (audio: AudioFileParams, indent?: number) => Command_PlayBGM;
export declare const makeCommandPlayBGS: (audio: AudioFileParams, indent?: number) => Command_PlayBGS;
export declare const makeCommandPlayME: (audio: AudioFileParams, indent?: number) => Command_PlayME;
export declare const makeCommandPlaySE: (audio: AudioFileParams, indent?: number) => Command_PlaySE;
export declare const makeCommandChangeBattleBGM: (audio: AudioFileParams, indent?: number) => Command_ChangeBattleBGM;
export declare const makeCommandChangeVictoryME: (audio: AudioFileParams, indent?: number) => Command_ChangeVictoryME;
export declare const makeCommandChangeDefeatME: (audio: AudioFileParams, indent?: number) => Command_ChangeDefeatME;
