import type { Enemy_Action, DropItem } from "./enemyMembers";
import type { ParamArray } from "./members";
import type { Trait } from "./trait";
import type { Data_TraitContainer } from "./traitContatiner";

export interface Data_Enemy extends Data_TraitContainer {
  name: string;
  id: number;

  actions: Enemy_Action[];
  battlerHue: number;
  battlerName: string;
  dropItems: DropItem[];
  exp: number;
  gold: number;
  params: ParamArray;
  traits: Trait[];
  note: string;
}
