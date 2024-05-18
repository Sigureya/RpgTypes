import { Action, DropItem, TraitContainer } from "./members";
import { ParamArray } from "./members/paramArray";

export interface Data_Enemy extends TraitContainer {
  id: number;
  actions: Action[];
  battlerHue: number;
  battlerName: string;
  dropItems: DropItem[];
  exp: number;
  gold: number;
  name: string;
  note: string;
  params: ParamArray;
}
