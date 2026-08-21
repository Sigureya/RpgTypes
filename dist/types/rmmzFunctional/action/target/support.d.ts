import { Targetable } from './types';
export declare const battlerIsAlive: (battler: Targetable) => boolean;
export declare const battlerIsDead: (battler: Targetable) => boolean;
export declare const repeatTargets: <T>(battlers: ReadonlyArray<T>, repeat: number) => T[];
export declare const smoothTarget: <T>(battlers: ReadonlyArray<T>, targetIndex: number, fn: (battler: T) => boolean) => T | undefined;
export declare const smoothAliveTarget: <T extends Targetable>(battlers: ReadonlyArray<T>, index: number) => T | undefined;
export declare const smoothDeadTarget: <T extends Targetable>(battlers: ReadonlyArray<T>, index: number) => T | undefined;
