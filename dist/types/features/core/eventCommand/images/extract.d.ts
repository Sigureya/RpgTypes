import { Command_ChangeActorImages, Command_ChangeBattleBackground, Command_ChangeParallax, Command_ShowPicture } from '../../../../rmmz';
import { ImageCommandParameter } from './types';
export declare const extractPictureImageCommand: (command: Command_ShowPicture) => ImageCommandParameter;
export declare const extractChangeBattlebackImageCommand: (command: Command_ChangeBattleBackground) => ImageCommandParameter[];
export declare const extractParalaxImageCommand: (command: Command_ChangeParallax) => ImageCommandParameter;
export declare const extractActorImageCommand: (command: Command_ChangeActorImages) => ImageCommandParameter[];
