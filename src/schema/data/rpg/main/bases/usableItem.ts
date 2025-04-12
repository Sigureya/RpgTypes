import type { ItemEffect, Damage } from "./item";
import type { Data_NamedItem } from "./namedItem";

export interface Data_UsableItem extends Data_NamedItem {
  iconIndex: number;
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
