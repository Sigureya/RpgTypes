import { EventCommandGroup_Message, EventCommandGroup_Script } from '../../../eventCommand/commandGroup';
import { ExtractCommandByParam } from '../../../../../rmmz';
import { TextCommandParameter } from './types';
export declare const extractTextFromActorCommand: (command: ExtractCommandByParam<[number, string]>) => TextCommandParameter;
export declare const extractTextParamFromMessage: (messageCommand: EventCommandGroup_Message) => Required<TextCommandParameter>;
export declare const extractTextParamFromScript: (group: EventCommandGroup_Script) => TextCommandParameter;
