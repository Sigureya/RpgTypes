import { Data_UsableItem } from '../../../rmmz/rpg';
import { Provider_Battlers, Targetable } from './types';
export declare const itemTargetCandidates: <T extends Targetable>(subject: T, item: Data_UsableItem, provider: Provider_Battlers<T>) => T[];
export declare const actionMakeTargets: <T extends Targetable, S extends Targetable>(item: Data_UsableItem, isItem: boolean, subject: S, targetIndex: number, provider: Provider_Battlers<T>, randomFn: () => number) => (T | S)[];
