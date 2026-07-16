import type { Rmmz_Unit, Rmmz_Troop, Rmmz_Party } from "./core";

export interface Rmmz_Unit_Constructor<Battler> {
  new (): Rmmz_Unit<Battler>;
}

export interface Rmmz_Party_Constructor {
  new (): Rmmz_Party;
}
export interface Rmmz_Troop_Constructor {
  new (): Rmmz_Troop;
}
