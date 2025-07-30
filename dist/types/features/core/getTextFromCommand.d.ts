import { EventCommand } from '../../rmmz';
import { TextCommandParameter } from './extract/text/eventCommand';
export declare const extractTextFromEventCommands: (list: ReadonlyArray<EventCommand>) => TextCommandParameter[];
