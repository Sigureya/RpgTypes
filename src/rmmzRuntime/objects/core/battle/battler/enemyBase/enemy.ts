// friendsUnitは別の場所で定義する

import type { DropItem, Trait } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_EnemyBase {
  isEnemy(): boolean;
  enemyId(): number;
  traitObjects(): Trait[];
  paramBase(paramId: number): number;
  exp(): number;
  gold(): number;
  dropItems(): DropItem[];
}
