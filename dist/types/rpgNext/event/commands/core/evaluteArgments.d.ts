import { Argment } from './types/argment';
import { FunctionsTable } from './types/functions';
import { EventState } from './types/state';
export declare const evaluteArgments: (state: EventState, args: ReadonlyArray<Argment>, table: FunctionsTable) => Record<string, string | number>;
