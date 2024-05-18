import { Game_BattlerBase } from "./Game_BattlerBase";
import { IBattler } from "./types/battler";
import { Data_Equipment, Data_Weapon, Data_Armor } from "../data/item";
import { ParamId } from "./types/battler/base/param";

export declare class Game_Battler extends Game_BattlerBase implements IBattler {
  canEquip(item: Data_Equipment): boolean;
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
  paramMin(paramId: ParamId): number;
  paramMax(paramId: ParamId): number;
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
