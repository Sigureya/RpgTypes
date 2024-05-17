//=============================================================================
// rmmz_windows.js v1.7.0
//=============================================================================

import { Rectangle } from "src/types/rectangle";
import { Game_Actor, Game_Battler } from "../object/battler";
import { TextState } from "./types/textState";
import { Game_Action, Sprite } from "@niokasgami/rpg-maker-mz-typescript";
import { UsableItem } from "../data/item/usableItem";
import { ParamId } from "../object/battler/base/param";
import { ShopGoods } from "./types/goods";
import { Data_BaseItem } from "../data/item/baseItem";
import { Data_Equip } from "../object/battler/base/equip";
import { SaveFileInfo } from "../data/saveFileInfo";
import { Window_Selectable } from "./Window_Selectable";
import { Window_Gold } from "./Window_Gold";

interface Selectable<T> {
  itemAt(index: number): T;
  item(): T;
}

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.

export declare class Window_StatusBase {
  initialize(rect: Rectangle): void;

  loadFaceImages(): void;

  refresh(): void;

  hideAdditionalSprites(): void;

  placeActorName(actor: Game_Actor, x: number, y: number): string;

  placeStateIcon(actor: Game_Actor, x: number, y: number): void;

  placeGauge(actor: Game_Actor, type: string, x: number, y: number): void;

  createInnerSprite(key: string, spriteClass: typeof Sprite): void;

  placeTimeGauge(actor: Game_Actor, x: number, y: number): void;

  placeBasicGauges(actor: Game_Actor, x: number, y: number): void;

  gaugeLineHeight(): number;

  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;

  drawActorName(actor: Game_Actor, x: number, y: number, width: number): string;

  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;

  drawActorNickname(
    actor: Game_Actor,
    x: number,
    y: number,
    width: number
  ): void;

  drawActorLevel(actor: Game_Actor, x: number, y: number): void;

  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): void;

  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): void;

  actorSlotName(actor: Game_Actor, index: number): string;

  //-----------------------------------------------------------------------------
  // Window_MenuCommand
  //
  // The window for selecting a command on the menu screen.
}
declare class Window_MenuCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  addMainCommands(): void;

  addFormationCommand(): void;

  addOriginalCommands(): void;

  addOptionsCommand(): void;

  addSaveCommand(): void;

  addGameEndCommand(): void;

  needsCommand(name: string): void;

  areMainCommandsEnabled(): void;

  isFormationEnabled(): boolean;

  isOptionsEnabled(): boolean;

  isSaveEnabled(): boolean;

  isGameEndEnabled(): boolean;

  processOk(): void;

  selectLast(): void;

  //-----------------------------------------------------------------------------
  // Window_MenuStatus
  //
  // The window for displaying party member status on the menu screen.
}
declare class Window_MenuStatus {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  numVisibleRows(): boolean;

  itemHeight(): number;

  actor(index: number): void;

  drawItem(index: number): void;

  drawPendingItemBackground(index: number): void;

  drawItemImage(index: number): void;

  drawItemStatus(index: number): void;

  processOk(): void;

  isCurrentItemEnabled(): boolean;

  selectLast(): void;

  formationMode(): void;

  setFormationMode(formationMode: boolean): void;

  pendingindex(): number;

  setPendingIndex(index: number): void;

  //-----------------------------------------------------------------------------
  // Window_MenuActor
  //
  // The window for selecting a target actor on the item and skill screens.
}
declare class Window_MenuActor {
  initialize(rect: Rectangle): void;

  processOk(): void;

  selectLast(): void;

  selectForItem(item: UsableItem): void;

  //-----------------------------------------------------------------------------
  // Window_ItemCategory
  //
  // The window for selecting a category of items on the item and shop screens.
}
declare class Window_ItemCategory {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  update(): void;

  makeCommandList(): void;

  needsCommand(name: string): void;

  setItemWindow(itemWindow: Window_ItemList): void;

  needsSelection(): void;

  //-----------------------------------------------------------------------------
  // Window_ItemList
  //
  // The window for selecting an item on the item screen.
}
export declare class Window_ItemList
  extends Window_Selectable
  implements Selectable<Data_BaseItem>
{
  initialize(rect: Rectangle): void;

  setCategory(category: string): void;

  maxCols(): number;

  colSpacing(): number;

  maxItems(): number;

  item(): Data_BaseItem;

  itemAt(index: number): Data_BaseItem;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_BaseItem): void;

  needsNumber(): void;

  isEnabled(item: Data_BaseItem): boolean;

  makeItemList(): boolean;

  selectLast(): void;

  drawItem(index: number): void;

  numberWidth(): number;

  drawItemNumber(
    item: Data_BaseItem,
    x: number,
    y: number,
    width: number
  ): void;

  updateHelp(): void;

  refresh(): void;

  //-----------------------------------------------------------------------------
  // Window_SkillType
  //
  // The window for selecting a skill type on the skill screen.
}
export declare class Window_Status {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  refresh(): void;

  drawBlock1(): void;

  block1Y(): number;

  drawBlock2(): void;

  block2Y(): number;

  drawBasicInfo(x: number, y: number): void;

  drawExpInfo(x: number, y: number): void;

  expTotalValue(): void;

  expNextValue(): void;

  //-----------------------------------------------------------------------------
  // Window_StatusParams
  //
  // The window for displaying parameters on the status screen.
}
declare class Window_StatusParams {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  maxItems(): number;

  itemHeight(): number;

  drawItem(index: number): void;

  drawItemBackground(/*index*/): void;

  //-----------------------------------------------------------------------------
  // Window_StatusEquip
  //
  // The window for displaying equipment items on the status screen.
}
declare class Window_StatusEquip {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  maxItems(): number;

  itemHeight(): number;

  drawItem(index: number): void;

  drawItemBackground(/*index*/): void;

  //-----------------------------------------------------------------------------
  // Window_Options
  //
  // The window for changing various settings on the options screen.
}
declare class Window_Options {
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

  //-----------------------------------------------------------------------------
  // Window_SavefileList
  //
  // The window for selecting a save file on the save and load screens.
}
declare class Window_SavefileList {
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

  //-----------------------------------------------------------------------------
  // Window_ShopCommand
  //
  // The window for selecting buy/sell on the shop screen.
}
declare class Window_ShopCommand {
  initialize(rect: Rectangle): void;

  setPurchaseOnly(purchaseOnly: boolean): void;

  maxCols(): number;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_ShopBuy
  //
  // The window for selecting an item to buy on the shop screen.
}
declare class Window_ShopBuy implements Selectable<Data_BaseItem> {
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
// Window_ShopSell
//
// The window for selecting an item to sell on the shop screen.
declare class Window_ShopSell {
  initialize(rect: Rectangle): void;

  isEnabled(item: Data_BaseItem): boolean;
}
//-----------------------------------------------------------------------------
// Window_ShopNumber
//
// The window for inputting quantity of items to buy or sell on the shop
// screen.
declare class Window_ShopNumber {
  initialize(rect: Rectangle): void;

  isScrollEnabled(): boolean;

  number(): void;

  setup(item: Data_BaseItem, max: number, price: number): void;

  setCurrencyUnit(currencyUnit: string): void;

  createButtons(): void;

  placeButtons(): void;

  totalButtonWidth(): number;

  buttonSpacing(): void;

  refresh(): void;

  drawCurrentItemName(): string;

  drawMultiplicationSign(): void;

  multiplicationSign(): void;

  multiplicationSignX(): number;

  drawNumber(): void;

  drawHorzLine(): void;

  drawTotalPrice(): void;

  itemNameY(): number;

  totalPriceY(): number;

  buttonY(): number;

  cursorWidth(): number;

  cursorX(): number;

  maxDigits(): void;

  update(): void;

  playOkSound(): void;

  processNumberChange(): void;

  changeNumber(amount: number): void;

  itemRect(): Rectangle;

  isTouchOkEnabled(): boolean;

  onButtonUp(): void;

  onButtonUp2(): void;

  onButtonDown(): void;

  onButtonDown2(): void;

  onButtonOk(): void;
}
//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
declare class Window_ShopStatus {
  initialize(rect: Rectangle): void;

  refresh(): void;

  setItem(item: Data_Equip): void;

  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;

  drawEquipInfo(x: number, y: number): void;

  statusMembers(): void;

  pageSize(): number;

  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;

  paramId(): number;

  currentEquippedItem(actor: Game_Actor, etypeId: number): Data_Equip | null;

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
declare class Window_NameEdit {
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
// Window_NameBox
//
// The window for displaying a speaker name above the message window.
declare class Window_NameBox {
  initialize(): void;

  setMessageWindow(messageWindow: Window_Message): void;

  setName(name: string): void;

  clear(): void;

  start(): void;

  updatePlacement(): void;

  updateBackground(): void;

  windowWidth(): number;

  windowHeight(): number;

  refresh(): void;
}
//-----------------------------------------------------------------------------
// Window_ChoiceList
//
// The window used for the event command [Show Choices].
declare class Window_ChoiceList {
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
// Window_NumberInput
//
// The window used for the event command [Input Number].
declare class Window_NumberInput {
  initialize(): void;

  setMessageWindow(messageWindow: Window_Message): void;

  start(): void;

  updatePlacement(): void;

  windowWidth(): number;

  windowHeight(): number;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  itemRect(index: number): Rectangle;

  isScrollEnabled(): boolean;

  isHoverEnabled(): boolean;

  createButtons(): void;

  placeButtons(): void;

  totalButtonWidth(): number;

  buttonSpacing(): void;

  buttonY(): number;

  update(): void;

  processDigitChange(): void;

  changeDigit(up: boolean): void;

  isTouchOkEnabled(): boolean;

  isOkEnabled(): boolean;

  isCancelEnabled(): boolean;

  processOk(): void;

  drawItem(index: number): void;

  onButtonUp(): void;

  onButtonDown(): void;

  onButtonOk(): void;
}
//-----------------------------------------------------------------------------
// Window_EventItem
//
// The window used for the event command [Select Item].
declare class Window_EventItem {
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
// Window_Message
//
// The window for displaying text messages.
declare class Window_Message {
  initialize(rect: Rectangle): void;

  initMembers(): void;

  setGoldWindow(goldWindow: Window_Gold): void;

  setNameBoxWindow(nameBoxWindow: Window_NameBox): void;

  setChoiceListWindow(choiceListWindow: Window_ChoiceList): void;

  setNumberInputWindow(numberInputWindow: Window_NumberInput): void;

  setEventItemWindow(eventItemWindow: Window_EventItem): void;

  clearFlags(): void;

  update(): void;

  checkToNotClose(): void;

  synchronizeNameBox(): void;

  canStart(): boolean;

  startMessage(): void;

  newLineX(text: TextState): void;

  updatePlacement(): void;

  updateBackground(): void;

  terminateMessage(): void;

  updateWait(): void;

  updateLoading(): void;

  updateInput(): void;

  isvoidSubWindowActive(): boolean;

  updateMessage(): void;

  shouldBreakHere(text: TextState): void;

  canBreakHere(text: TextState): boolean;

  onEndOfText(): void;

  startInput(): boolean;

  isTriggered(): boolean;

  doesContinue(): boolean;

  areSettingsChanged(): void;

  updateShowFast(): void;

  newPage(text: TextState): void;

  updateSpeakerName(): string;

  loadMessageFace(): void;

  drawMessageFace(): void;

  processControlCharacter(text: TextState, c: string): void;

  processNewLine(text: TextState): void;

  processNewPage(text: TextState): void;

  isEndOfText(text: TextState): boolean;

  needsNewPage(text: TextState): void;

  processEscapeCharacter(code: number, textState: TextState): void;

  startWait(count: number): void;

  startPause(): void;

  isWaiting(): boolean;
}
//-----------------------------------------------------------------------------
// Window_ScrollText
//
// The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.
declare class Window_ScrollText {
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
declare class Window_MapName {
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
declare class Window_BattleLog {
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
declare class Window_BattleSkill {
  initialize(rect: Rectangle): void;

  show(): void;

  hide(): void;
}
//-----------------------------------------------------------------------------
// Window_BattleItem
//
// The window for selecting an item to use on the battle screen.
declare class Window_BattleItem {
  initialize(rect: Rectangle): void;

  includes(item: UsableItem): void;

  show(): void;

  hide(): void;

  //-----------------------------------------------------------------------------
  // Window_TitleCommand
  //
  // The window for selecting New Game/Continue on the title screen.
}
declare class Window_TitleCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  isContinueEnabled(): boolean;

  processOk(): void;

  selectLast(): void;
}
//-----------------------------------------------------------------------------
// Window_GameEnd
//
// The window for selecting "Go to Title" on the game end screen.
declare class Window_GameEnd {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;
}
//-----------------------------------------------------------------------------
// Window_DebugRange
//
// The window for selecting a block of switches/variables on the debug screen.
declare class Window_DebugRange {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  update(): void;

  mode(index: number): void;

  topId(index: number): void;

  isSwitchMode(index: number): boolean;

  drawItem(index: number): void;

  isCancelTriggered(): boolean;

  processCancel(): void;

  setEditWindow(editWindow: Window_NameEdit): void;
}
//-----------------------------------------------------------------------------
// Window_DebugEdit
//
// The window for displaying switches and variables on the debug screen.
declare class Window_DebugEdit {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  drawItem(index: number): void;

  itemName(dataId: number): string;

  itemStatus(dataId: number): void;

  setMode(mode: string): void;

  setTopId(id: number): void;

  currentId(): number;

  update(): void;

  updateSwitch(): void;

  updateVariable(): void;

  deltaForVariable(): number;
}

//-----------------------------------------------------------------------------
