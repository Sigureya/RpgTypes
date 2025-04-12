import type { ItemCodeLabels, TraitLabels } from "./data";
import type { GlobalLabel } from "./globalLabels";

export interface EditorLabels {
  global: GlobalLabel;
  trait: TraitLabels;
  itemEffect: ItemCodeLabels;
  actor: DataLabels;
  enemy: DataLabels;
}
// 詳細が未定な型のためのプレースホルダ
export interface DataLabels {
  domainName: string;
}
