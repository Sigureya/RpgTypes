import { ItemEffect } from '../../../rmmz';
export declare const makeEffectSetBoolean: (switchId: number, value: boolean) => ItemEffect;
export declare const makeEffectFlipBoolean: (switchId: number) => ItemEffect;
export declare const makeEffectSetNumber: (variableId: number, value: number) => ItemEffect;
export declare const makeEffectAddNumber: (variableId: number, value: number) => ItemEffect;
export declare const makeEffectSubNumber: (variableId: number, value: number) => ItemEffect;
export declare const makeEffectMulNumber: (variableId: number, value: number) => ItemEffect;
export declare const makeEffectDivNumber: (variableId: number, value: number) => ItemEffect;
export declare const makeEffectResetNumber: (variableId: number) => ItemEffect;
