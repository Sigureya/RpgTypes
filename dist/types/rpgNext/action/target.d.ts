import { Rmmz_Battler } from '../../rmmzRuntime';
export declare const battlresRandomTarget: <T extends Rmmz_Battler>(battlers: ReadonlyArray<T>, randomValue: number) => T | null;
export declare const battlersRandomDeadTarget: <T extends Rmmz_Battler>(battlers: ReadonlyArray<T>, randomValue: number) => T | null;
export declare const battlersRandomAliveTarget: <T extends Rmmz_Battler>(battlers: ReadonlyArray<T>, randomValue: number) => T | null;
export declare const smoothTarget: <T>(battlers: ReadonlyArray<T>, index: number, fn: (battler: T) => boolean) => T | undefined;
export declare const smoothAliveTarget: <T extends Rmmz_Battler>(battlers: ReadonlyArray<T>, index: number) => T | undefined;
export declare const smoothDeadTarget: <T extends Rmmz_Battler>(battlers: ReadonlyArray<T>, index: number) => T | undefined;
