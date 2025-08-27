import { EventState } from './state';
import { WaitXXX } from './types';
export interface FunctionsTable {
    callBoolean(state: EventState, name: string, arg: object): boolean;
    callNumber(state: EventState, name: string, arg: object): number;
    callString(state: EventState, name: string, arg: object): string;
    callObject(state: EventState, name: string, arg: object, requiredResultType: string): object;
    wait(wait: WaitXXX): boolean;
}
export interface FunctionArg {
    name: string;
    args: object;
}
