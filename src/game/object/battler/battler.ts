import { IUnit } from "../unit/interface";
import { Game_BattlerBase } from "./base";
import { TimeProgressBattle } from "./method/timeProgressBattle";

export declare class Game_Battler
  extends Game_BattlerBase
  implements TimeProgressBattle
{
  clearTpbChargeTime(): void;
  applyTpbPenalty(): void;
  initTpbChargeTime(advantageous: boolean): void;
  tpbChargeTime(): number;
  startTpbCasting(): void;
  startTpbAction(): void;
  isTpbCharged(): boolean;
  isTpbReady(): boolean;
  isTpbTimeout(): boolean;
  updateTpb(): void;
  updateTpbChargeTime(): void;
  updateTpbCastTime(): void;
  updateTpbAutoBattle(): void;
  updateTpbIdleTime(): void;
  tpbAcceleration(): void;
  tpbRelativeSpeed(): number;
  tpbSpeed(): number;
  tpbBaseSpeed(): number;
  tpbRequiredCastTime(): number;
  onTpbCharged(): void;
  shouldDelayTpbCharge(): boolean;
  finishTpbCharge(): void;
  isTpbTurnEnd(): boolean;
  initTpbTurn(): void;
  startTpbTurn(): void;
  makeTpbActions(): void;
  onTpbTimeout(): void;
}
