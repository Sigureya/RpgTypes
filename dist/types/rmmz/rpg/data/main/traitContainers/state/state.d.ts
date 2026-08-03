import { Data_State } from './types';
export declare const stateIcons: (states: ReadonlyArray<Data_State>) => number[];
export declare const canMoveStates: (state: ReadonlyArray<Data_State>) => boolean;
export declare const isMoveableState: (state: Data_State) => boolean;
export declare const isConfusedState: (state: Data_State) => boolean;
export declare const hasConfusedState: (states: ReadonlyArray<Data_State>) => boolean;
export declare const confusionLevel: (states: ReadonlyArray<Data_State>) => number;
export declare const makeStateData: (data?: Partial<Data_State>) => Data_State;
