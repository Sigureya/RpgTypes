import { EventCommand } from '../../rmmz';
import { TextCommandParameter } from './extract/text/eventCommand';
type CommandParam = TextCommandParameter;
export declare const extractTextFromEventCommands: (list: ReadonlyArray<EventCommand>) => TextCommandParameter[][];
export declare const extractTextFromEventPages: (event: {
    pages: {
        list: EventCommand[];
    }[];
}) => CommandParam[][][];
export {};
