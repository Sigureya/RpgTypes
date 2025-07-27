import { EventCommand } from '../../../rmmz';
import { TextCommandMapper } from './textCommandMapper';
export declare const handlerDispatch: <T>(array: ReadonlyArray<EventCommand>, index: number, table: TextCommandMapper<T>) => T;
export declare const mapTextCommand: <T>(list: ReadonlyArray<EventCommand>, table: TextCommandMapper<T>) => T[];
