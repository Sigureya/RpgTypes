import { Data_UsableItem } from '../../../rmmz/rpg';
import { Provider_Battlers, Targetable } from './types';
export declare const battlersDecideRandomTarget: <T extends Targetable>(item: Data_UsableItem, units: Provider_Battlers<T>, randomValue: number) => T[];
export declare const battlersRandomTarget: <T extends Targetable>(battlers: ReadonlyArray<T>, randomFn: () => number, repeat?: number) => T[];
export declare const battlersRandomDeadTarget: <T extends Targetable>(battlers: ReadonlyArray<T>, randomValue: number) => T[];
export declare const battlersRandomAliveTarget: <T extends Targetable>(battlers: ReadonlyArray<T>, randomValue: number) => T[];
export declare const actionDecideRandomTarget: <B1 extends Targetable, B2 extends Targetable>(item: Data_UsableItem, friendsUnit: ReadonlyArray<B1>, opponentsUnit: ReadonlyArray<B2>, randomValue: number) => (B1 | B2)[];
