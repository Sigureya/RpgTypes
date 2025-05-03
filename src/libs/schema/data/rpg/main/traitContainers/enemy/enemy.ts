import type { Enemy_Action, DropItem } from "./enemyMembers";
import type { ParamArray } from "../members";
import type { Data_TraitContainer, Trait } from "../trait";

export interface Data_Enemy extends Data_TraitContainer {
  name: string;
  id: number;
  battlerName: string;
  battlerHue: number;
  exp: number;
  gold: number;
  note: string;

  params: ParamArray;
  actions: Enemy_Action[];
  traits: Trait[];
  dropItems: DropItem[];
}
