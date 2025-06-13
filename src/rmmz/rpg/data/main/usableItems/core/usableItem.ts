import type { Damage } from "../../members";
import type { ItemEffect } from "./itemEffect";

export interface Data_UsableItem {
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
