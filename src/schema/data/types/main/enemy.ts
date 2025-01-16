import type {
  Data_NamedItem,
  Data_TraitContainer,
  DropItem,
  Enemy_Action,
  ParamArray,
  Trait,
} from "./bases";

export interface Data_Enemy extends Data_TraitContainer, Data_NamedItem {
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
