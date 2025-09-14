import type { Rmmz_Actor } from "./core";
import type { Rmmz_Unit } from "./core/unit/unit";
import { Game_Unit } from "./unit";

export declare class Game_Party
  extends Game_Unit<Rmmz_Actor>
  implements Partial<Rmmz_Unit<Rmmz_Actor>>
{
  _actors: number[];
}
