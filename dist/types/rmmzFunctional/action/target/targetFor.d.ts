import { Data_UsableItem } from '../../../rmmz/rpg';
import { Targetable } from './types';
export declare const actionTargetsForOpponents: <T extends Targetable>(item: Data_UsableItem, opponentsUnit: ReadonlyArray<T>, targetIndex: number, randomFn: () => number) => T[];
export declare const actionTargetsForFriends: <T extends Targetable, S extends Targetable>(subject: S, item: Data_UsableItem, friendsUnit: ReadonlyArray<T>, targetIndex: number) => (S | T)[];
export declare const actionTargetsForDeadAndAlive: <T extends Targetable>(item: Data_UsableItem, unit: ReadonlyArray<T>, targetIndex: number) => T[];
export declare const actionTargetsForAlive: <T extends Targetable>(item: Data_UsableItem, unit: ReadonlyArray<T>, targetIndex: number) => T[];
export declare const actionTargetsForDead: <T extends Targetable>(item: Data_UsableItem, unit: ReadonlyArray<T>, targetIndex: number) => T[];
