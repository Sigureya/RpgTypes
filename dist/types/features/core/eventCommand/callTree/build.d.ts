import { Data_CommonEvent, EventCommand } from '../../../../rmmz';
import { CommonEventDependencies, CommonEventNode } from './types';
export declare const buildCommonEventDependencyMap: (events: ReadonlyArray<Data_CommonEvent>) => Map<number, CommonEventDependencies>;
export declare const extractCalledCommonEventNodes: (list: ReadonlyArray<EventCommand>, events: ReadonlyArray<Data_CommonEvent>) => CommonEventNode[];
