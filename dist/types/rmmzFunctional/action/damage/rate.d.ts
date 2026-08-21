import { Data_Skill } from '../../../rmmz/rpg';
import { Rmmz_BattlerBase } from '../../../rmmzRuntime';
export declare const actionElementMaxRate: (target: Rmmz_BattlerBase, elements: ReadonlyArray<number>) => number;
export declare const actionCalcElementRate: (skill: Data_Skill, target: Rmmz_BattlerBase) => number;
