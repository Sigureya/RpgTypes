import type { Damage } from "../../members";
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

  animationId: number;
  hitType: number;
  occasion: number;
  repeats: number;
  scope: number;
  speed: number;
  successRate: number;
  tpGain: number;

  note: string;

  effects: ItemEffect[];
  damage: Damage;
}
