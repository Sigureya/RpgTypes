import { TraitContainer } from "./item/trait";
import { ParamArray } from "./paramArray";
import { Action } from "./members/enemy/action";
import { DropItem } from "./members/enemy/dropItem";

interface Data_Enemy extends TraitContainer {
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
