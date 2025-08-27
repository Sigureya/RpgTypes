import { EvaluteResult } from './evaluteResult';
import { EventState } from './state';
import { SideEffect, WaitXXX } from './types';
export interface CommandExecuteResult {
    sideEffect?: SideEffect;
    wait?: WaitXXX;
    result?: EvaluteResult;
}
export interface CommandExecuteResult2 {
    sideEffect?: SideEffect;
    newState: EventState;
}
