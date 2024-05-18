import { IUnit } from "../unit";
import { IBattlerBase } from "./base";
import { TimeProgressBattle } from "./timeProgressBattle";

export interface IBattler extends IBattlerBase, TimeProgressBattle {
  isEnemy(): boolean;
  isActor(): boolean;
  friendsUnit(): IUnit<IBattler>;
  opponentsUnit(): IUnit<IBattler>;
}
