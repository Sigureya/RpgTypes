import { IBattlerBase } from "./base";
import { TimeProgressBattle } from "./timeProgressBattle";

export interface IBattler extends IBattlerBase, TimeProgressBattle {
  isEnemy(): boolean;
  isActor(): boolean;
}
