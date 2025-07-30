import { EventCommandGroup_Comment, EventCommandGroup_Message, EventCommandGroup_Script, EventCommandGroup_ScrollingText } from './eventCommand/commandGroup';
import { TextCommandParameter } from './extract/text/eventCommand';
export declare const extractTextParamFromMessage: (messageCommand: EventCommandGroup_Message) => Required<TextCommandParameter>;
export declare const extractTextParamFromScript: (group: EventCommandGroup_Script) => TextCommandParameter;
export declare const extractTextParamFromShowScrollingText: (group: EventCommandGroup_ScrollingText) => TextCommandParameter;
export declare const extractTextParamFromComment: (group: EventCommandGroup_Comment) => TextCommandParameter;
