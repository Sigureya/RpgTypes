import { Command_ShowChoices, ExtractCommandByParam } from '../../../../../rmmz';
import { TextCommandParameter } from './types';
export declare const extractTextFromActorCommand: (command: ExtractCommandByParam<[number, string]>) => TextCommandParameter;
export declare const extractTextParamsFromChoice: (command: Readonly<Command_ShowChoices>) => TextCommandParameter[];
