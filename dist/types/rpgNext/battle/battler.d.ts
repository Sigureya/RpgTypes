import { Provider_RpgData } from '../../rmmz';
import { NewState } from './state/types';
import { BattlerVariables, NewBattler } from './types';
interface ResultOfOnTurnEnd {
    hpRegen: number;
    mpRegen: number;
    tpRegen: number;
    removedStates: NewState[];
}
interface ResultOfOnTurnEnd2 {
    nextVariables: BattlerVariables;
    log: ResultOfOnTurnEnd;
}
export declare const onTurnEndXX2: (battler: NewBattler, provider: Provider_RpgData) => ResultOfOnTurnEnd2;
export {};
