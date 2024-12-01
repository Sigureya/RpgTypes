import type { Data_NamedItem, Data_TraitContainer } from "./bases";
import type { ParamArray, Action, DropItem } from "./members";

export interface Data_Enemy extends Data_TraitContainer, Data_NamedItem {
  actions: Action[];
  battlerHue: number;
  battlerName: string;
  dropItems: DropItem[];
  exp: number;
  gold: number;
  params: ParamArray;
}
