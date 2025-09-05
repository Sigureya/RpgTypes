import { Data_CommonEvent, EventCommand } from '../../../../rmmz';
export declare const extractCalledCommonEventIds: (list: ReadonlyArray<EventCommand>) => number[];
export declare const findCallerCommonEvents: (commonEvents: ReadonlyArray<Data_CommonEvent>, ddEventIdSet: ReadonlySet<number>) => Data_CommonEvent[];
