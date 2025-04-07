import type { ItemCodeLabels, TraitLabels } from "./data";
import type { GlobalLabel } from "./globalLables";

export interface EditorLabels {
  global: GlobalLabel;
  trait: TraitLabels;
  itemEffect: ItemCodeLabels;
}
