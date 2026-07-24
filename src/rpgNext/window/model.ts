import type { Rmmz_Actor, Rmmz_UnitPlayer } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorEquiper } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/actorBase/equipments";

export interface WindowModelXX<T, Arg> {
  name(data: T): string;
  helpText(data: T): string;
  iconIndex(data: T): number;
  isEnabled(data: T): boolean;
  makeItemList(arg: Arg): T[];
}

// const xxx = (party: Rmmz_UnitPlayer, actor: Rmmz_ActorEquiper) => {
//   const weapons = party.weapons();
// };
