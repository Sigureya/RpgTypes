import type { Trait } from "./trait";
import type { Data_TraitContainer } from "./traitContatiner";

export interface Data_State extends Data_TraitContainer {
  name: string;
  id: number;
  iconIndex: number;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  traits: Trait[];
  note: string;

  restriction: number;
  priority: number;
  motion: number;
  overlay: number;
  removeAtBattleEnd: boolean;
  removeByRestriction: boolean;
  autoRemovalTiming: number;
  minTurns: number;
  maxTurns: number;
  removeByDamage: boolean;
  chanceByDamage: number;
  removeByWalking: boolean;
  stepsToRemove: number;
}
