import type { Damage } from "./damage";
import type { ItemEffect } from "./itemEffect";
import type { Data_UsableItem } from "./usableItem";

export interface Data_Skill extends Data_UsableItem {
  name: string;
  id: number;
  description: string;
  iconIndex: number;
  message1: string;
  message2: string;
  messageType: number;
  mpCost: number;
  requiredWtypeId1: number;
  requiredWtypeId2: number;
  stypeId: number;
  tpCost: number;

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
  note: string;
}
