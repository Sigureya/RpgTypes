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

export interface Enemy_Action {
  conditionParam1: number;
  conditionParam2: number;
  conditionType: number;
  skillId: number;
  rating: number;
}
export interface DropItem {
  dataId: number;
  denominator: number;
  kind: number;
}
export interface EnemyLabels {
  dropItems: string;
  battlerHue: string;
  battlerName: string;
  gold: string;
}
