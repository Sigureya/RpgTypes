import { Data_State } from '../../../rmmz';
import { BattleOperation_RemoveState, NewState } from './types';
export declare const cloneStateInstance: (state: NewState) => NewState;
export declare const xxxx: (states: readonly NewState[], stateFn: (id: number) => Data_State | undefined, chanceFn: (data: Data_State, instance: NewState) => boolean) => BattleOperation_RemoveState[];
export declare const createRemoveStateOperation: (states: NewState) => BattleOperation_RemoveState;
export declare const isDamageRemovable: (states: NewState, stateFn: (id: number) => Data_State | undefined, chanceFn: (data: Data_State, instance: NewState) => boolean) => boolean;
export declare const createRemoveStateByTurnEndOperation: (states: NewState) => BattleOperation_RemoveState;
