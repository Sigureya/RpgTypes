import type { Audio, Display, Facade, Process } from "./interface";
import type { Battle_Reward } from "./interface/reward";

export interface Manager_Battle extends Audio, Display, Process, Facade {
  _rewards: Battle_Reward;
}

declare class T implements Manager_Battle {
  _rewards: Battle_Reward;
  saveBgmAndBgs(): void;
  playBattleBgm(): void;
  playDefeatMe(): void;
  playVictoryMe(): void;
  replayBgmAndBgs(): void;
  displayVictoryMessage(): void;
  displayDefeatMessage(): void;
  displayEscapeSuccessMessage(): void;
  displayEscapeFailureMessage(): void;
  processAbort(): void;
  rocessPartyEscape(): void;
  onEscapeFailure(): void;
  processDefeat(): void;
  onEscapeSuccess(): void;
  processEscape(): void;
  processVictory(): void;
  canEscape(): boolean;
  isTurnEnd(): boolean;
  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  abort(): void;
  onEncounter(): void;
  isActionForced(): boolean;
}
