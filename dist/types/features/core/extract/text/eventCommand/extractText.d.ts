import { CHANGE_NICKNAME, CHANGE_PROFILE, CHANGE_NAME, SHOW_CHOICES } from '../../../../../libs/eventCommand';
import { ExtractCommandByCode, Command_ShowChoices } from '../../../../../rmmz';
import { CommandParameter } from '../../../../../rmmz/eventCommand/pickCommandParam';
export declare const extractTextFromActorCommand: (command: ExtractCommandByCode<typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME>) => CommandParameter<string, typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME>;
export declare const extractTextParamsFromChoice: (command: Readonly<Command_ShowChoices>) => CommandParameter<string, typeof SHOW_CHOICES>[];
