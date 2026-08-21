import { ItemEffect, Data_UsableItem } from '../../../rmmz/rpg';
import { Rmmz_BattlerBase } from '../../../rmmzRuntime';
export declare const lukEffectRate: (subject: Rmmz_BattlerBase, target: Rmmz_BattlerBase) => number;
export declare const actionCalcAttackStateRate: (stateId: number, subject: Rmmz_BattlerBase, target: Rmmz_BattlerBase, effect: ItemEffect) => number;
export declare const actionCalcNormalStateRate: (subject: Rmmz_BattlerBase, target: Rmmz_BattlerBase, effect: ItemEffect) => number;
export declare const actionItemMrf: (data: Data_UsableItem, target: Rmmz_BattlerBase) => number;
export declare const actionItemHit: (data: Data_UsableItem, subject: Rmmz_BattlerBase) => number;
export declare const actionItemEva: (data: Data_UsableItem, target: Rmmz_BattlerBase) => number;
export declare const actionItemCri: (data: Data_UsableItem, subject: Rmmz_BattlerBase, target: Rmmz_BattlerBase) => number;
