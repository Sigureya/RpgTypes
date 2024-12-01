import type { Data_NamedItem } from "./namedItem";
export interface ItemEffect {
  code: number;
  value1: number;
  value2: number;
  dataId: number;
}

export interface Damage {}

export interface Data_UsableItem extends Data_NamedItem {
  effects: ItemEffect[];
  damage: Damage;
  animationId: number;
  hitType: number;
  occasion: number;
  repeats: number;
  scope: number;
  speed: number;
  successRate: number;
  tpGain: number;
  description: string;
  note: string;
}
