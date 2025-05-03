import type { Data_TraitContainer, Trait } from "src/libs";

export interface Data_State extends Data_TraitContainer {
  name: string;
  id: number;
  iconIndex: number;
  message1: string;
  message2: string;
  message3: string;
  message4: string;

  restriction: number;
  priority: number;
  motion: number;
  overlay: number;
  removeAtBattleEnd: boolean;
  removeByRestriction: boolean;
  removeByDamage: boolean;
  removeByWalking: boolean;

  autoRemovalTiming: number;
  minTurns: number;
  maxTurns: number;
  chanceByDamage: number;
  stepsToRemove: number;
  note: string;
  traits: Trait[];
}
