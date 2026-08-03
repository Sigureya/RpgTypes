import { Rmmz_BattlerBase } from '../../../rmmzRuntime';
import { ActionCost, ActionTotalCost } from './types';
export declare const calcTotalActionCost: (cost: ReadonlyArray<ActionCost>) => ActionTotalCost;
interface BattlerVVV {
    hp: number;
    mp: number;
    tp: number;
}
export declare const canPayActionCost2: (battler: BattlerVVV, cost: ActionTotalCost) => boolean;
export declare const canPayActionCost: (battler: Rmmz_BattlerBase, cost: ActionCost) => boolean;
export {};
