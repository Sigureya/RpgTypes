import type { Rmmz_Enemy } from "./battler/enemy";
import type { Rmmz_Unit } from "./unit/unit";

export interface Rmmz_Troop extends Rmmz_Unit<Rmmz_Enemy> {}
