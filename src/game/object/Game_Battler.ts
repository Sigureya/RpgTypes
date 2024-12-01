import type { IUnit, IBattler } from "./types/";
import type { Game_BattlerBase } from "./Game_BattlerBase";

export declare class Game_Battler extends Game_BattlerBase implements IBattler {
  isEnemy(): boolean;
  isActor(): boolean;
  friendsUnit(): IUnit<IBattler>;
  opponentsUnit(): IUnit<IBattler>;
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
