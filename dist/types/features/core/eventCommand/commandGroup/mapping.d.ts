import { EventCommand } from '../../../../rmmz';
import { GroopMapper } from './core';
export declare const getGroupHandlingFunc: (n: number) => undefined | (<T>(array: ReadonlyArray<EventCommand>, index: number, mapper: GroopMapper<T>) => T);
