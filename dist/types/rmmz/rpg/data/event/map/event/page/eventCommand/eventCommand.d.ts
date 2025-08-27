import { ValueOf } from 'src/libs/templates/valueOf';
import { IndexOfParameter } from './types';
import type * as EventCommandCodes from "./eventCommandCodes";
export type EventCode = ValueOf<typeof EventCommandCodes>;
export type IndexOfCommandParameter<Command extends {
    parameters: unknown[];
}, T> = IndexOfParameter<Command["parameters"], T>;
