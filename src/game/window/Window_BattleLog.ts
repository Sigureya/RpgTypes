import { Rectangle } from "src/types/rectangle";
import { Game_Battler } from "../object/battler";
import { Game_Action } from "src/game/object/Game_Action";
import { UsableItem } from "../data/item/usableItem";
import { ParamId } from "../object/battler/base/param";
import { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_BattleLog
//
// The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.
export declare class Window_BattleLog extends Window_Base {
  initialize(rect: Rectangle): void;

  setSpriteset(spriteset: Spriteset_Battle): void;

  maxLines(): void;

  numLines(): void;

  messageSpeed(): void;

  isBusy(): boolean;

  update(): void;

  updateWait(): void;

  updateWaitCount(): void;

  updateWaitMode(): void;

  setWaitMode(waitMode: string): void;

  callNextMethod(): void;

  isFastForward(): boolean;

  push(methodName: string): void;

  clear(): void;

  wait(): void;

  waitForEffect(): void;

  waitForMovement(): void;

  addText(text: string): void;

  pushBaseLine(): void;

  popBaseLine(): void;

  waitForNewLine(): void;

  popupDamage(target: Game_Battler): void;

  performActionStart(subject: Game_Battler, action: Game_Action): void;

  performAction(subject: Game_Battler, action: Game_Action): void;

  performActionEnd(subject: Game_Battler): void;

  performDamage(target: Game_Battler): void;

  performMiss(target: Game_Battler): boolean;

  performRecovery(target: Game_Battler): void;

  performEvasion(target: Game_Battler): void;

  performMagicEvasion(target: Game_Battler): void;

  performCounter(target: Game_Battler): void;

  performReflection(target: Game_Battler): void;

  performSubstitute(substitute: Game_Battler, target: Game_Battler): void;

  performCollapse(target: Game_Battler): void;

  showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): void;

  refresh(): void;

  drawBackground(): void;

  backRect(): Rectangle;

  lineRect(index: number): Rectangle;

  backColor(): void;

  backPaintOpacity(): void;

  drawLineText(index: number): void;

  startTurn(): void;

  startAction(
    subject: Game_Battler,
    action: Game_Action,
    targets: Game_Battler[]
  ): void;

  endAction(subject: Game_Battler): void;

  displayCurrentState(subject: Game_Battler): boolean;

  displayRegeneration(subject: Game_Battler): boolean;

  displayAction(subject: Game_Battler, item: UsableItem): boolean;

  displayItemMessage(
    fmt: string,
    subject: Game_Battler,
    item: UsableItem
  ): boolean;

  displayCounter(target: Game_Battler): boolean;

  displayReflection(target: Game_Battler): boolean;

  displaySubstitute(substitute: Game_Battler, target: Game_Battler): boolean;

  displayActionResults(subject: Game_Battler, target: Game_Battler): boolean;

  displayFailure(target: Game_Battler): boolean;

  displayCritical(target: Game_Battler): boolean;

  displayDamage(target: Game_Battler): boolean;

  displayMiss(target: Game_Battler): boolean;

  displayEvasion(target: Game_Battler): boolean;

  displayHpDamage(target: Game_Battler): boolean;

  displayMpDamage(target: Game_Battler): boolean;

  displayTpDamage(target: Game_Battler): boolean;

  displayAffectedStatus(target: Game_Battler): boolean;

  displayAutoAffectedStatus(target: Game_Battler): boolean;

  displayChangedStates(target: Game_Battler): boolean;

  displayAddedStates(target: Game_Battler): boolean;

  displayRemovedStates(target: Game_Battler): boolean;

  displayChangedBuffs(target: Game_Battler): boolean;

  displayBuffs(target: Game_Battler, buffs: ParamId[], fmt: string): boolean;

  makeHpDamageText(target: Game_Battler): void;

  makeMpDamageText(target: Game_Battler): void;

  makeTpDamageText(target: Game_Battler): void;
}