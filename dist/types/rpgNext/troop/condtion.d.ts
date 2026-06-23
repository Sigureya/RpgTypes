import { Troop_EventConditions } from '../../rmmz';
import { Rmmz_ActorsReadonly } from '../../rmmzRuntime';
import { Rmmz_BattleManager_State } from '../../rmmzRuntime/managers/battle/interface';
import { Rmmz_Switches } from '../../rmmzRuntime/objects/core/variables';
export interface TroopMM {
    members(): ReadonlyArray<{
        hpRate(): number;
    }>;
    turnCount(): number;
}
export declare const meetsBattleEventConditions: (troop: TroopMM, conditions: Troop_EventConditions, battleState: Rmmz_BattleManager_State, actors: Rmmz_ActorsReadonly<{
    hpRate(): number;
}>, switches: Rmmz_Switches) => boolean;
