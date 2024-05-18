//=============================================================================
// rmmz_windows.js v1.7.0
//=============================================================================

import { Rectangle } from "src/types/rectangle";
import { Game_Actor, Game_Battler } from "../object/battler";
import { Game_Action } from "src/game/object/Game_Action";
import { UsableItem } from "../data/item/usableItem";
import { ParamId } from "../object/battler/base/param";
import { ShopGoods } from "./types/goods";
import { Data_BaseItem } from "../data/item/baseItem";
import { Equip } from "../object/battler/base/equip";
import { SaveFileInfo } from "../data/saveFileInfo";
import { Window_Message } from "./Window_Message";
import { Window_Base } from "./Window_Base";
import { Window_ItemList } from "./Window_ItemList";
import { Window_Command } from "./Window_Command";
import { Window_MenuStatus } from "./Window_MenuStatus";
import { Window_Status } from "./Window_Status";
import { Window_StatusBase } from "./Window_StatusBase";
import { Window_Selectable } from "./Window_Selectable";
import { Window_HorzCommand } from "./Window_HorzCommand";

export interface Selectable<T> {
  itemAt(index: number): T;
  item(): T;
}

//-----------------------------------------------------------------------------
// Window_MenuActor
//
// The window for selecting a target actor on the item and skill screens.
export declare class Window_MenuActor extends Window_MenuStatus {
  initialize(rect: Rectangle): void;

  processOk(): void;

  selectLast(): void;

  selectForItem(item: UsableItem): void;
}
//-----------------------------------------------------------------------------
// Window_StatusEquip
//
// The window for displaying equipment items on the status screen.
export declare class Window_StatusEquip extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  maxItems(): number;

  itemHeight(): number;

  drawItem(index: number): void;

  drawItemBackground(/*index*/): void;
}
//-----------------------------------------------------------------------------
// Window_Options
//
// The window for changing various settings on the options screen.
export declare class Window_Options extends Window_Command {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  addGeneralOptions(): void;

  addVolumeOptions(): void;

  drawItem(index: number): void;

  statusWidth(): number;

  statusText(index: number): void;

  isVolumeSymbol(symbol: symbol): boolean;

  booleanStatusText(value: boolean): void;

  volumeStatusText(value: number): string;

  processOk(): void;

  cursorRight(): void;

  cursorLeft(): void;

  changeVolume(symbol: string, forward: number, wrap: boolean): void;

  volumeOffset(): void;

  changeValue(symbol: string, value: number): void;

  getConfigValue(symbol: string): void;

  setConfigValue(symbol: string, volume: number): void;
}
//-----------------------------------------------------------------------------
// Window_SavefileList
//
// The window for selecting a save file on the save and load screens.
export declare class Window_SavefileList extends Window_Selectable {
  initialize(rect: Rectangle): void;

  setMode(mode: string, autosave: boolean): void;

  maxItems(): number;

  numVisibleRows(): boolean;

  itemHeight(): number;

  drawItem(index: number): void;

  indexToSavefileId(index: number): void;

  savefileIdToIndex(savefileId: number): void;

  isEnabled(savefileId: number): boolean;

  savefileId(): void;

  selectSavefile(savefileId: number): void;

  drawTitle(savefileId: number, x: number, y: number): void;

  drawContents(info: SaveFileInfo, rect: Rectangle): void;

  drawPartyCharacters(info: SaveFileInfo, x: number, y: number): void;

  drawPlaytime(info: SaveFileInfo, x: number, y: number, width: number): void;

  playOkSound(): void;
}
//-----------------------------------------------------------------------------
// Window_ShopCommand
//
// The window for selecting buy/sell on the shop screen.
export declare class Window_ShopCommand extends Window_HorzCommand {
  initialize(rect: Rectangle): void;

  setPurchaseOnly(purchaseOnly: boolean): void;

  maxCols(): number;

  makeCommandList(): void;
}
//-----------------------------------------------------------------------------
// Window_ShopBuy
//
// The window for selecting an item to buy on the shop screen.
export declare class Window_ShopBuy
  extends Window_Selectable
  implements Selectable<Data_BaseItem>
{
  initialize(rect: Rectangle): void;

  setupGoods(shopGoods: ShopGoods[]): void;

  maxItems(): number;

  item(): Data_BaseItem;

  itemAt(index: number): Data_BaseItem;

  setMoney(money: number): void;

  isCurrentItemEnabled(): boolean;

  price(item: Data_BaseItem): number;

  isEnabled(item: Data_BaseItem): boolean;

  refresh(): void;

  makeItemList(): boolean;

  goodsToItem(goods: ShopGoods): Data_BaseItem;

  drawItem(index: number): void;

  priceWidth(): number;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;
}
//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
declare class Window_ShopStatus {
  initialize(rect: Rectangle): void;

  refresh(): void;

  setItem(item: Equip): void;

  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;

  drawEquipInfo(x: number, y: number): void;

  statusMembers(): void;

  pageSize(): number;

  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;

  paramId(): number;

  currentEquippedItem(actor: Game_Actor, etypeId: number): Equip | null;

  update(): void;

  updatePage(): void;

  isPageChangeEnabled(): boolean;

  isPageChangeRequested(): boolean;

  changePage(): void;
}
//-----------------------------------------------------------------------------
// Window_NameEdit
//
// The window for editing an actor's name on the name input screen.
export declare class Window_NameEdit {
  initialize(rect: Rectangle): void;

  setup(actor: Game_Actor, maxLength: number): void;

  name(): string;

  restoreDefault(): void;

  add(ch: string): void;

  back(): void;

  faceWidth(): number;

  charWidth(): number;

  left(): void;

  itemRect(index: number): Rectangle;

  underlineColor(): void;

  drawUnderline(index: number): void;

  drawChar(index: number): void;

  refresh(): void;
}

declare class Window_NameInput {
  initialize(rect: Rectangle): void;

  setEditWindow(editWindow: Window_NameEdit): void;

  table(): void;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  groupSpacing(): void;

  character(): void;

  isPageChange(): boolean;

  isOk(): boolean;

  itemRect(index: number): Rectangle;

  drawItem(index: number): void;

  updateCursor(): void;

  isCursorMovable(): boolean;

  cursorDown(wrap: boolean): void;

  cursorUp(wrap: boolean): void;

  cursorRight(wrap: boolean): void;

  cursorLeft(wrap: boolean): void;

  cursorPagedown(): void;

  cursorPageup(): void;

  processCursorMove(): void;

  processHandling(): void;

  isCancelEnabled(): boolean;

  processCancel(): void;

  processJump(): void;

  processBack(): void;

  processOk(): void;

  onNameAdd(): void;

  onNameOk(): void;
}
//-----------------------------------------------------------------------------
// Window_ChoiceList
//
// The window used for the event command [Show Choices].
export declare class Window_ChoiceList extends Window_Command {
  initialize(): void;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): void;

  start(): void;

  update(): void;

  updateCancelButton(): void;

  selectDefault(): void;

  updatePlacement(): void;

  updateBackground(): void;

  placeCancelButton(): void;

  windowX(): number;

  windowY(): number;

  windowWidth(): number;

  windowHeight(): number;

  numVisibleRows(): boolean;

  maxLines(): void;

  maxChoiceWidth(): number;

  makeCommandList(): void;

  drawItem(index: number): void;

  isCancelEnabled(): boolean;

  needsCancelButton(): void;

  callOkHandler(): void;

  callCancelHandler(): void;
}
//-----------------------------------------------------------------------------
// Window_EventItem
//
// The window used for the event command [Select Item].
export declare class Window_EventItem extends Window_ItemList {
  initialize(rect: Rectangle): void;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): void;

  start(): void;

  update(): void;

  updateCancelButton(): void;

  updatePlacement(): void;

  placeCancelButton(): void;

  includes(item: Data_BaseItem): void;

  needsNumber(): void;

  isEnabled(/*item*/): boolean;

  onOk(): void;

  onCancel(): void;
}
//-----------------------------------------------------------------------------
// Window_ScrollText
//
// The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.
export declare class Window_ScrollText extends Window_Base {
  initialize(rect: Rectangle): void;

  update(): void;

  startMessage(): void;

  refresh(): void;

  updatePlacement(): void;

  contentsHeight(): number;

  updateMessage(): void;

  scrollSpeed(): void;

  isFastForward(): boolean;

  fastForwardRate(): void;

  terminateMessage(): void;
}
//-----------------------------------------------------------------------------
// Window_MapName
//
// The window for displaying the map name on the map screen.
export declare class Window_MapName extends Window_Base {
  initialize(rect: Rectangle): void;

  update(): void;

  updateFadeIn(): void;

  updateFadeOut(): void;

  open(): void;

  close(): void;

  refresh(): void;

  drawBackground(x: number, y: number, width: number, height: number): void;
}
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
//-----------------------------------------------------------------------------
// Window_PartyCommand
//
// The window for selecting whether to fight or escape on the battle screen.
declare class Window_PartyCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  setup(): void;
}
//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.
declare class Window_ActorCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  addAttackCommand(): void;

  addSkillCommands(): void;

  addGuardCommand(): void;

  addItemCommand(): void;

  setup(actor: Game_Actor): void;

  actor(): void;

  processOk(): void;

  selectLast(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleStatus
//
// The window for displaying the status of party members on the battle screen.
declare class Window_BattleStatus {
  initialize(rect: Rectangle): void;

  extraHeight(): number;

  maxCols(): number;

  itemHeight(): number;

  maxItems(): number;

  rowSpacing(): void;

  updatePadding(): void;

  actor(index: number): Game_Actor;

  selectActor(actor: Game_Actor): void;

  update(): void;

  preparePartyrefresh(): void;

  performPartyrefresh(): void;

  drawItem(index: number): void;

  drawItemImage(index: number): void;

  drawItemStatus(index: number): void;

  faceRect(index: number): Rectangle;

  nameX(rect: Rectangle): number;

  nameY(rect: Rectangle): number;

  stateIconX(rect: Rectangle): number;

  stateIconY(rect: Rectangle): number;

  basicGaugesX(rect: Rectangle): number;

  basicGaugesY(rect: Rectangle): number;
}
//-----------------------------------------------------------------------------
// Window_BattleActor
//
// The window for selecting a target actor on the battle screen.
declare class Window_BattleActor {
  initialize(rect: Rectangle): void;

  show(): void;

  hide(): void;

  select(index: number): void;

  processTouch(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleEnemy
//
// The window for selecting a target enemy on the battle screen.
declare class Window_BattleEnemy {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  maxItems(): number;

  enemy(): void;

  enemyindex(): number;

  drawItem(index: number): void;

  show(): void;

  hide(): void;

  refresh(): void;

  select(index: number): void;

  processTouch(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleSkill
//
// The window for selecting a skill to use on the battle screen.
export declare class Window_BattleSkill {
  initialize(rect: Rectangle): void;

  show(): void;

  hide(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleItem
//
// The window for selecting an item to use on the battle screen.
export declare class Window_BattleItem {
  initialize(rect: Rectangle): void;

  includes(item: UsableItem): void;

  show(): void;

  hide(): void;

  //-----------------------------------------------------------------------------
  // Window_TitleCommand
  //
  // The window for selecting New Game/Continue on the title screen.
}
export declare class Window_TitleCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  isContinueEnabled(): boolean;

  processOk(): void;

  selectLast(): void;
}
