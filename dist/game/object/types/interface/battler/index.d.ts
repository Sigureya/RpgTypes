import type { IUnit } from "../unit";
import type { IBattlerBase } from "./base";
import type { TimeProgressBattle } from "./timeProgressBattle";
export interface IBattler extends IBattlerBase, TimeProgressBattle {
    isEnemy(): boolean;
    isActor(): boolean;
    friendsUnit(): IUnit<IBattler>;
    opponentsUnit(): IUnit<IBattler>;
}
