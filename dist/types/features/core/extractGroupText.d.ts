import { EventCommandGroup_Message, EventCommandGroup_Script } from './eventCommand/commandGroup';
import { TextCommandParameter } from './extract/text/eventCommand';
export declare const extractTextParamFromMessage: (messageCommand: EventCommandGroup_Message) => Required<TextCommandParameter>;
export declare const extractTextParamFromScript: (group: EventCommandGroup_Script) => TextCommandParameter;
