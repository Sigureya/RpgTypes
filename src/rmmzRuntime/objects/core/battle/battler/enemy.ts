import type { Data_AnyGoodsUnion, Data_Enemy } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "./battler";
import type { Rmmz_EnemyBase } from "./enemyBase/enemy";

export interface Rmmz_Enemy extends Rmmz_Battler, Rmmz_EnemyBase {
  makeDropItems(): Data_AnyGoodsUnion[];
  name(): string;
  battlerHue(): number;
  battlerName(): string;
  originalName(): string;
  enemy(): Data_Enemy;
}
