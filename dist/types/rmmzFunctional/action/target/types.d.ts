import { Rmmz_Battler } from '../../../rmmzRuntime';
export interface Provider_Battlers<T extends Targetable = Targetable> {
    opponentsUnit(): ReadonlyArray<T>;
    friendsUnit(): ReadonlyArray<T>;
}
export type Targetable = Pick<Rmmz_Battler, "states" | "tgr" | "isAlive" | "isDead" | "allTraits">;
