import { EventCommand } from '../../../../rmmz';
import { GroopMapper } from './core';
export declare const getGroupHandlingFunc: (eventCode: number) => undefined | (<T>(array: ReadonlyArray<EventCommand>, index: number, mapper: GroopMapper<T>) => T);
