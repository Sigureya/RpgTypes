import { Data_NamedItem } from "./namedItem";
export interface ItemEffect {
  code: number;
  value1: number;
  value2: number;
  dataId: number;
}

export interface Data_UsableItem extends Data_NamedItem {
  effect: ItemEffect[];
}
