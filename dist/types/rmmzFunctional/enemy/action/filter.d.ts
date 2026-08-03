import { Data_Skill, Enemy_Action } from '../../../rmmz';
import { Rmmz_Party, Rmmz_Switches } from '../../../rmmzRuntime';
import { Rmmz_EnemyActionConditionType } from './types';
type Rmmz_Party_highestLevel = Pick<Rmmz_Party, "highestLevel">;
export declare const filterUsableEnemyActions: (actions: ReadonlyArray<Enemy_Action>, battler: Rmmz_EnemyActionConditionType, party: Rmmz_Party_highestLevel, switches: Rmmz_Switches, skillFn: (action: Enemy_Action) => Data_Skill | null | undefined) => Enemy_Action[];
export declare const filterEnemyActionByRating: (actions: ReadonlyArray<Enemy_Action>, ratingDistance?: number) => Enemy_Action[];
export declare const enemyActionMeetsCondition: (action: Enemy_Action, enemy: Rmmz_EnemyActionConditionType, party: Rmmz_Party_highestLevel, switches: Rmmz_Switches) => boolean;
export {};
