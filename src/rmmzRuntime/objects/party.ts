import type { Rmmz_Actor } from "./core";
import type { Rmmz_Unit } from "./core/unit/unit";

export declare class Game_Party implements Partial<Rmmz_Unit<Rmmz_Actor>> {
  members(): Rmmz_Actor[];
}
