//=============================================================================
// rmmz_windows.js v1.7.0
//=============================================================================

import { Rectangle } from "src/types/rectangle";
import { Game_Actor, Game_Battler } from "../object/battler";
import { TextState } from "./textState";
import { Game_Action, Sprite } from "@niokasgami/rpg-maker-mz-typescript";
import { UsableItem } from "../data/item/usableItem";
import { Data_NamedItem } from "../data/item/namedItem";
import { ParamId } from "../object/battler/base/param";
import { ShopGoods } from "./shopBy/goods";
import { Data_BaseItem } from "../data/item/baseItem";
import { Data_Equip } from "../object/battler/base/equip";
import { SaveFileInfo } from "../data/saveFileInfo";
import { Data_Skill } from "../data/item/skill";

//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.

declare class Window_Base {
  initialize(rect: Rectangle): any;

  destroy(options: any): any;

  lineHeight(): any;

  itemWidth(): any;

  itemHeight(): any;

  itemPadding(): any;

  baseTextrect(): Rectangle;

  loadWindowskin(): any;

  updatePadding(): any;

  updateBackOpacity(): any;

  fittingHeight(numLines: number): any;

  updateTone(): any;

  createContents(): any;

  destroyContents(): any;

  contentsWidth(): any;

  contentsHeight(): any;

  resetFontSettings(): void;

  resetTextColor(): void;

  update(): any;

  updateOpen(): any;

  updateClose(): any;

  open(): any;

  close(): any;

  isOpening(): any;

  isClosing(): any;

  show(): any;

  hide(): any;

  activate(): any;

  deactivate(): any;

  systemColor(): any;

  translucentOpacity(): any;

  changeTextColor(color: string): any;

  changeOutlineColor(color: string): any;

  changePaintOpacity(enabled: boolean): any;

  drawrect(x: number, y: number, width: number, height: number): any;

  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    align: string
  ): any;

  textWidth(text: string): any;

  drawTextEx(text: string, x: number, y: number, width: number): any;

  textSizeEx(text: string): any;

  createTextState(text: string, x: number, y: number, width: number): any;

  processAllText(text: TextState): any;

  flushTextState(text: TextState): any;

  createTextBuffer(rtl): any;

  convertEscapeCharacters(text: string): any;

  actorName(n): any;

  partyMemberName(n): any;

  processCharacter(text: TextState): any;

  processControlCharacter(text: TextState, char: string): any;

  processNewLine(text: TextState): any;

  obtainEscapeCode(text: TextState): any;

  obtainEscapeParam(text: TextState): any;

  processEscapeCharacter(code: number, textState: TextState): any;

  processColorChange(colorIndex: number): any;

  processDrawIcon(iconIndex: number, textState: TextState): any;

  makeFontBigger(): any;

  makeFontSmaller(): any;

  calcTextHeight(text: TextState): any;

  maxFontSizeInLine(line: number): any;

  drawIcon(iconIndex: number, x: number, y: number): any;

  drawItemName(item: Data_NamedItem, x: number, y: number, width: number): any;

  drawCurrencyValue(
    value: number,
    unit: string,
    x: number,
    y: number,
    width: number
  ): any;

  setBackgroundType(type): void;

  showBackgroundDimmer(): any;

  createDimmerSprite(): any;

  hideBackgroundDimmer(): any;

  updateBackgroundDimmer(): any;

  refreshDimmerBitmap(): any;

  playCursorSound(): any;

  playOkSound(): any;

  playBuzzerSound(): any;
}

//-----------------------------------------------------------------------------
// Window_Scrollable
//
// The window class with scroll functions.

declare class Window_Scrollable {
  initialize(rect: Rectangle): any;

  clearScrollStatus(): any;

  scrollX(): any;

  scrollY(): any;

  scrollBaseX(): any;

  scrollBaseY(): any;

  scrollTo(x: number, y: number): any;

  scrollBy(x: number, y: number): any;

  smoothScrollTo(x: number, y: number): any;

  smoothScrollBy(x: number, y: number): any;

  setScrollAccel(x: number, y: number): void;

  overallWidth(): any;

  overallHeight(): any;

  maxScrollX(): any;

  maxScrollY(): any;

  scrollBlockWidth(): any;

  scrollBlockHeight(): any;

  smoothScrollDown(n: number): any;

  smoothScrollUp(n: number): any;

  update(): any;

  processWheelScroll(): void;

  processTouchScroll(): void;

  isWheelScrollEnabled(): any;

  isTouchScrollEnabled(): any;

  isScrollEnabled(): any;

  isTouchedInsideFrame(): any;

  onTouchScrollStart(): any;

  onTouchScroll(): any;

  onTouchScrollEnd(): any;

  updateSmoothScroll(): any;

  updateScrollAccel(): any;

  updateArrows(): any;

  updateOrigin(): any;

  updateScrollBase(baseX: number, baseY: number): any;

  paint(): any;

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //
  // The window class with cursor movement functions.
}
declare class Window_Selectable {
  initialize(rect: Rectangle): any;

  index(): number;

  cursorFixed(): any;

  setCursorFixed(cursorFixed: boolean): void;

  cursorAll(): any;

  setCursorAll(cursorAll: boolean): void;

  maxCols(): any;

  maxItems(): any;

  colSpacing(): any;

  rowSpacing(): any;

  itemWidth(): any;

  itemHeight(): any;

  contentsHeight(): any;

  maxRows(): any;

  overallHeight(): any;

  activate(): any;

  deactivate(): any;

  select(index: number): any;

  forceSelect(index: number): any;

  smoothSelect(index: number): any;

  deselect(): any;

  reselect(): any;

  row(): any;

  topRow(): any;

  maxTopRow(): any;

  setTopRow(row: number): void;

  maxPageRows(): any;

  maxPageItems(): any;

  maxVisibleItems(): any;

  isHorizontal(): any;

  topindex(): number;

  itemRect(index: number): Rectangle;

  itemRectWithPadding(index: number): Rectangle;

  itemLineRect(index: number): Rectangle;

  setHelpWindow(helpWindow: Window_Help): void;

  showHelpWindow(): any;

  hideHelpWindow(): any;

  setHandler(symbol: string, method: () => void): void;

  isHandled(symbol: string): any;

  callHandler(symbol: string): any;

  isOpenAndActive(): any;

  isCursorMovable(): any;

  cursorDown(wrap: boolean): any;

  cursorUp(wrap: boolean): any;

  cursorRight(wrap: boolean): any;

  cursorLeft(wrap: boolean): any;

  cursorPagedown(): any;

  cursorPageup(): any;

  isScrollEnabled(): any;

  update(): any;

  processCursorMove(): void;

  processHandling(): void;

  processTouch(): void;

  isHoverEnabled(): any;

  onTouchSelect(trigger: boolean): any;

  onTouchOk(): any;

  onTouchCancel(): any;

  hitindex(): number;

  hitTest(x: number, y: number): any;

  isTouchOkEnabled(): any;

  isOkEnabled(): any;

  isCancelEnabled(): any;

  isOkTriggered(): any;

  isCancelTriggered(): any;

  processOk(): void;

  callOkHandler(): any;

  processCancel(): void;

  callCancelHandler(): any;

  processPageup(): void;

  processPagedown(): void;

  updateInputData(): any;

  ensureCursorVisible(smooth: boolean): any;

  callUpdateHelp(): any;

  updateHelp(): any;

  setHelpWindowItem(item: Data_NamedItem): void;

  isCurrentItemEnabled(): any;

  drawAllItems(): any;

  drawItem(/*index*/): any;

  clearItem(index: number): any;

  drawItemBackground(index: number): any;

  drawBackgroundRect(rect: Rectangle): void;

  redrawItem(index: number): any;

  redrawCurrentItem(): any;

  refresh(): any;

  paint(): any;

  refreshCursor(): any;

  refreshCursorForAll(): any;

  //-----------------------------------------------------------------------------
  // Window_Command
  //
  // The superclass of windows for selecting a command.
}
declare class Window_Command {
  initialize(rect: Rectangle): any;

  maxItems(): any;

  clearCommandList(): any;

  makeCommandList(): void;

  commandName(index: number): any;

  commandSymbol(index: number): any;

  isCommandEnabled(index: number): any;

  currentData(): any;

  isCurrentItemEnabled(): any;

  currentSymbol(): any;

  currentExt(): any;

  findSymbol(symbol: string): any;

  selectSymbol(symbol: string): any;

  findExt(ext: any): any;

  selectExt(ext: any): any;

  drawItem(index: number): any;

  itemTextAlign(): any;

  isOkEnabled(): any;

  callOkHandler(): any;

  refresh(): any;

  //-----------------------------------------------------------------------------
  // Window_HorzCommand
  //
  // The command window for the horizontal selection format.
}
declare class Window_HorzCommand {
  initialize(rect: Rectangle): any;

  maxCols(): any;

  itemTextAlign(): any;

  //-----------------------------------------------------------------------------
  // Window_Help
  //
  // The window for displaying the description of the selected item.
}
declare class Window_Help {
  initialize(rect: Rectangle): any;

  setText(text: string): void;

  clear(): any;

  setItem(item: Data_NamedItem): void;

  refresh(): any;
}

//-----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.

declare class Window_Gold {
  initialize(rect: Rectangle): any;

  colSpacing(): any;

  refresh(): any;

  value(): any;

  currencyUnit(): any;

  open(): any;
}

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.

declare class Window_StatusBase {
  initialize(rect: Rectangle): any;

  loadFaceImages(): any;

  refresh(): any;

  hideAdditionalSprites(): any;

  placeActorName(actor: Game_Actor, x: number, y: number): any;

  placeStateIcon(actor: Game_Actor, x: number, y: number): any;

  placeGauge(actor: Game_Actor, type: string, x: number, y: number): any;

  createInnerSprite(key: string, spriteClass: typeof Sprite): any;

  placeTimeGauge(actor: Game_Actor, x: number, y: number): any;

  placeBasicGauges(actor: Game_Actor, x: number, y: number): any;

  gaugeLineHeight(): any;

  drawActorCharacter(actor: Game_Actor, x: number, y: number): any;

  drawActorName(actor: Game_Actor, x: number, y: number, width: number): any;

  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): any;

  drawActorNickname(
    actor: Game_Actor,
    x: number,
    y: number,
    width: number
  ): any;

  drawActorLevel(actor: Game_Actor, x: number, y: number): any;

  drawActorIcons(actor: Game_Actor, x: number, y: number, width: number): any;

  drawActorSimpleStatus(actor: Game_Actor, x: number, y: number): any;

  actorSlotName(actor: Game_Actor, index: number): any;

  //-----------------------------------------------------------------------------
  // Window_MenuCommand
  //
  // The window for selecting a command on the menu screen.
}
declare class Window_MenuCommand {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  addMainCommands(): any;

  addFormationCommand(): any;

  addOriginalCommands(): any;

  addOptionsCommand(): any;

  addSaveCommand(): any;

  addGameEndCommand(): any;

  needsCommand(name: string): any;

  areMainCommandsEnabled(): any;

  isFormationEnabled(): any;

  isOptionsEnabled(): any;

  isSaveEnabled(): any;

  isGameEndEnabled(): any;

  processOk(): void;

  selectLast(): any;

  //-----------------------------------------------------------------------------
  // Window_MenuStatus
  //
  // The window for displaying party member status on the menu screen.
}
declare class Window_MenuStatus {
  initialize(rect: Rectangle): any;

  maxItems(): any;

  numVisibleRows(): any;

  itemHeight(): any;

  actor(index: number): any;

  drawItem(index: number): any;

  drawPendingItemBackground(index: number): any;

  drawItemImage(index: number): any;

  drawItemStatus(index: number): any;

  processOk(): void;

  isCurrentItemEnabled(): any;

  selectLast(): any;

  formationMode(): any;

  setFormationMode(formationMode): void;

  pendingindex(): number;

  setPendingIndex(index: number): void;

  //-----------------------------------------------------------------------------
  // Window_MenuActor
  //
  // The window for selecting a target actor on the item and skill screens.
}
declare class Window_MenuActor {
  initialize(rect: Rectangle): any;

  processOk(): void;

  selectLast(): any;

  selectForItem(item: UsableItem): any;

  //-----------------------------------------------------------------------------
  // Window_ItemCategory
  //
  // The window for selecting a category of items on the item and shop screens.
}
declare class Window_ItemCategory {
  initialize(rect: Rectangle): any;

  maxCols(): any;

  update(): any;

  makeCommandList(): void;

  needsCommand(name: string): any;

  setItemWindow(itemWindow: Window_ItemList): void;

  needsSelection(): any;

  //-----------------------------------------------------------------------------
  // Window_ItemList
  //
  // The window for selecting an item on the item screen.
}
declare class Window_ItemList {
  initialize(rect: Rectangle): any;

  setCategory(category: string): void;

  maxCols(): any;

  colSpacing(): any;

  maxItems(): any;

  item(): any;

  itemAt(index: number): any;

  isCurrentItemEnabled(): any;

  includes(item: Data_BaseItem): any;

  needsNumber(): any;

  isEnabled(item: Data_BaseItem): any;

  makeItemList(): any;

  selectLast(): any;

  drawItem(index: number): any;

  numberWidth(): any;

  drawItemNumber(item: Data_BaseItem, x: number, y: number, width: number): any;

  updateHelp(): any;

  refresh(): any;

  //-----------------------------------------------------------------------------
  // Window_SkillType
  //
  // The window for selecting a skill type on the skill screen.
}
declare class Window_SkillType {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  makeCommandList(): void;

  update(): void;

  setSkillWindow(skillWindow: Window_SkillList): void;

  selectLast(): any;

  //-----------------------------------------------------------------------------
  // Window_SkillStatus
  //
  // The window for displaying the skill user's status on the skill screen.
}
declare class Window_SkillStatus {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  refresh(): void;

  //-----------------------------------------------------------------------------
  // Window_SkillList
  //
  // The window for selecting a skill on the skill screen.
}
declare class Window_SkillList {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  setStypeId(stypeId: number): void;

  maxCols(): any;

  colSpacing(): any;

  maxItems(): any;

  item(): any;

  itemAt(index: number): any;

  isCurrentItemEnabled(): any;

  includes(item: Data_Skill): any;

  isEnabled(item: Data_Skill): any;

  makeItemList(): any;

  selectLast(): any;

  drawItem(index: number): any;

  costWidth(): any;

  drawSkillCost(skill: Data_Skill, x: number, y: number, width: number): any;

  updateHelp(): any;

  refresh(): any;

  //-----------------------------------------------------------------------------
  // Window_EquipStatus
  //
  // The window for displaying parameter changes on the equipment screen.
}
declare class Window_EquipStatus {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  colSpacing(): any;

  refresh(): any;

  setTempActor(tempActor: Game_Actor): void;

  drawAllParams(): any;

  drawItem(x: number, y: number, paramId: ParamId): any;

  drawParamName(x: number, y: number, paramId: ParamId): any;

  drawCurrentParam(x: number, y: number, paramId: ParamId): any;

  drawRightArrow(x: number, y: number): any;

  drawNewParam(x: number, y: number, paramId: ParamId): any;

  rightArrowWidth(): any;

  paramWidth(): any;

  paramX(): any;

  paramY(index: number): any;

  //-----------------------------------------------------------------------------
  // Window_EquipCommand
  //
  // The window for selecting a command on the equipment screen.
}
declare class Window_EquipCommand {
  initialize(rect: Rectangle): any;

  maxCols(): any;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_EquipSlot
  //
  // The window for selecting an equipment slot on the equipment screen.
}
declare class Window_EquipSlot {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  update(): any;

  maxItems(): any;

  item(): any;

  itemAt(index: number): any;

  drawItem(index: number): any;

  slotNameWidth(): any;

  isEnabled(index: number): any;

  isCurrentItemEnabled(): any;

  setStatusWindow(statusWindow: Window_Status): void;

  setItemWindow(itemWindow: Window_EquipItem): void;

  updateHelp(): any;

  //-----------------------------------------------------------------------------
  // Window_EquipItem
  //
  // The window for selecting an equipment item on the equipment screen.
}
declare class Window_EquipItem {
  initialize(rect: Rectangle): any;

  maxCols(): any;

  colSpacing(): any;

  setActor(actor: Game_Actor): void;

  setSlotId(slotId: number): void;

  includes(item: Data_Equip): any;

  etypeId(): any;

  isEnabled(/*item*/): any;

  selectLast(): any;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): any;

  playOkSound(): any;

  //-----------------------------------------------------------------------------
  // Window_Status
  //
  // The window for displaying full status on the status screen.
}
declare class Window_Status {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  refresh(): any;

  drawBlock1(): any;

  block1Y(): any;

  drawBlock2(): any;

  block2Y(): any;

  drawBasicInfo(x: number, y: number): any;

  drawExpInfo(x: number, y: number): any;

  expTotalValue(): any;

  expNextValue(): any;

  //-----------------------------------------------------------------------------
  // Window_StatusParams
  //
  // The window for displaying parameters on the status screen.
}
declare class Window_StatusParams {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  maxItems(): any;

  itemHeight(): any;

  drawItem(index: number): any;

  drawItemBackground(/*index*/): any;

  //-----------------------------------------------------------------------------
  // Window_StatusEquip
  //
  // The window for displaying equipment items on the status screen.
}
declare class Window_StatusEquip {
  initialize(rect: Rectangle): any;

  setActor(actor: Game_Actor): void;

  maxItems(): any;

  itemHeight(): any;

  drawItem(index: number): any;

  drawItemBackground(/*index*/): any;

  //-----------------------------------------------------------------------------
  // Window_Options
  //
  // The window for changing various settings on the options screen.
}
declare class Window_Options {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  addGeneralOptions(): any;

  addVolumeOptions(): any;

  drawItem(index: number): any;

  statusWidth(): any;

  statusText(index: number): any;

  isVolumeSymbol(symbol: symbol): any;

  booleanStatusText(value: boolean): any;

  volumeStatusText(value: number): string;

  processOk(): void;

  cursorRight(): any;

  cursorLeft(): any;

  changeVolume(symbol: string, forward: number, wrap: boolean): any;

  volumeOffset(): void;

  changeValue(symbol: string, value: number): any;

  getConfigValue(symbol: string): any;

  setConfigValue(symbol: string, volume: number): void;

  //-----------------------------------------------------------------------------
  // Window_SavefileList
  //
  // The window for selecting a save file on the save and load screens.
}
declare class Window_SavefileList {
  initialize(rect: Rectangle): any;

  setMode(mode: string, autosave: boolean): void;

  maxItems(): any;

  numVisibleRows(): any;

  itemHeight(): any;

  drawItem(index: number): any;

  indexToSavefileId(index: number): any;

  savefileIdToIndex(savefileId: number): any;

  isEnabled(savefileId: number): any;

  savefileId(): any;

  selectSavefile(savefileId: number): any;

  drawTitle(savefileId: number, x: number, y: number): any;

  drawContents(info: SaveFileInfo, rect: Rectangle): any;

  drawPartyCharacters(info: SaveFileInfo, x: number, y: number): any;

  drawPlaytime(info: SaveFileInfo, x: number, y: number, width: number): any;

  playOkSound(): any;

  //-----------------------------------------------------------------------------
  // Window_ShopCommand
  //
  // The window for selecting buy/sell on the shop screen.
}
declare class Window_ShopCommand {
  initialize(rect: Rectangle): any;

  setPurchaseOnly(purchaseOnly: boolean): void;

  maxCols(): any;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_ShopBuy
  //
  // The window for selecting an item to buy on the shop screen.
}
declare class Window_ShopBuy {
  initialize(rect: Rectangle): any;

  setupGoods(shopGoods: ShopGoods[]): void;

  maxItems(): any;

  item(): any;

  itemAt(index: number): any;

  setMoney(money: number): void;

  isCurrentItemEnabled(): any;

  price(item: Data_BaseItem): any;

  isEnabled(item: Data_BaseItem): any;

  refresh(): any;

  makeItemList(): any;

  goodsToItem(goods: ShopGoods): any;

  drawItem(index: number): any;

  priceWidth(): any;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): any;

  //-----------------------------------------------------------------------------
  // Window_ShopSell
  //
  // The window for selecting an item to sell on the shop screen.
}
declare class Window_ShopSell {
  initialize(rect: Rectangle): void;

  isEnabled(item: Data_BaseItem): boolean;

  //-----------------------------------------------------------------------------
  // Window_ShopNumber
  //
  // The window for inputting quantity of items to buy or sell on the shop
  // screen.
}
declare class Window_ShopNumber {
  initialize(rect: Rectangle): any;

  isScrollEnabled(): any;

  number(): any;

  setup(item: Data_BaseItem, max: number, price: number): void;

  setCurrencyUnit(currencyUnit: string): void;

  createButtons(): any;

  placeButtons(): any;

  totalButtonWidth(): any;

  buttonSpacing(): any;

  refresh(): any;

  drawCurrentItemName(): any;

  drawMultiplicationSign(): any;

  multiplicationSign(): any;

  multiplicationSignX(): any;

  drawNumber(): any;

  drawHorzLine(): any;

  drawTotalPrice(): any;

  itemNameY(): any;

  totalPriceY(): any;

  buttonY(): any;

  cursorWidth(): any;

  cursorX(): any;

  maxDigits(): any;

  update(): any;

  playOkSound(): any;

  processNumberChange(): void;

  changeNumber(amount: number): any;

  itemRect(): Rectangle;

  isTouchOkEnabled(): any;

  onButtonUp(): any;

  onButtonUp2(): any;

  onButtonDown(): any;

  onButtonDown2(): any;

  onButtonOk(): any;

  //-----------------------------------------------------------------------------
  // Window_ShopStatus
  //
  // The window for displaying number of items in possession and the actor's
  // equipment on the shop screen.
}
declare class Window_ShopStatus {
  initialize(rect: Rectangle): any;

  refresh(): any;

  setItem(item: Data_Equip): void;

  isEquipItem(): any;

  drawPossession(x: number, y: number): any;

  drawEquipInfo(x: number, y: number): any;

  statusMembers(): any;

  pageSize(): any;

  maxPages(): any;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): any;

  paramId(): any;

  currentEquippedItem(actor: Game_Actor, etypeId: number): any;

  update(): any;

  updatePage(): any;

  isPageChangeEnabled(): any;

  isPageChangeRequested(): any;

  changePage(): any;

  //-----------------------------------------------------------------------------
  // Window_NameEdit
  //
  // The window for editing an actor's name on the name input screen.
}
declare class Window_NameEdit {
  initialize(rect: Rectangle): any;

  setup(actor: Game_Actor, maxLength: number): void;

  name(): any;

  restoreDefault(): any;

  add(ch: string): any;

  back(): any;

  faceWidth(): any;

  charWidth(): any;

  left(): any;

  itemRect(index: number): Rectangle;

  underlineColor(): any;

  drawUnderline(index: number): any;

  drawChar(index: number): any;

  refresh(): any;
}

declare class Window_NameInput {
  initialize(rect: Rectangle): any;

  setEditWindow(editWindow: Window_NameEdit): void;

  table(): any;

  maxCols(): any;

  maxItems(): any;

  itemWidth(): any;

  groupSpacing(): any;

  character(): any;

  isPageChange(): any;

  isOk(): any;

  itemRect(index: number): Rectangle;

  drawItem(index: number): any;

  updateCursor(): any;

  isCursorMovable(): any;

  cursorDown(wrap: boolean): any;

  cursorUp(wrap: boolean): any;

  cursorRight(wrap: boolean): any;

  cursorLeft(wrap: boolean): any;

  cursorPagedown(): void;

  cursorPageup(): void;

  processCursorMove(): void;

  processHandling(): void;

  isCancelEnabled(): any;

  processCancel(): void;

  processJump(): void;

  processBack(): void;

  processOk(): void;

  onNameAdd(): any;

  onNameOk(): any;

  //-----------------------------------------------------------------------------
  // Window_NameBox
  //
  // The window for displaying a speaker name above the message window.
}
declare class Window_NameBox {
  initialize(): any;

  setMessageWindow(messageWindow: Window_Message): void;

  setName(name: string): void;

  clear(): any;

  start(): any;

  updatePlacement(): any;

  updateBackground(): any;

  windowWidth(): any;

  windowHeight(): any;

  refresh(): any;

  //-----------------------------------------------------------------------------
  // Window_ChoiceList
  //
  // The window used for the event command [Show Choices].
}
declare class Window_ChoiceList {
  initialize(): any;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): any;

  start(): any;

  update(): any;

  updateCancelButton(): any;

  selectDefault(): any;

  updatePlacement(): any;

  updateBackground(): any;

  placeCancelButton(): any;

  windowX(): any;

  windowY(): any;

  windowWidth(): any;

  windowHeight(): any;

  numVisibleRows(): any;

  maxLines(): any;

  maxChoiceWidth(): any;

  makeCommandList(): void;

  drawItem(index: number): any;

  isCancelEnabled(): any;

  needsCancelButton(): any;

  callOkHandler(): any;

  callCancelHandler(): any;

  //-----------------------------------------------------------------------------
  // Window_NumberInput
  //
  // The window used for the event command [Input Number].
}
declare class Window_NumberInput {
  initialize(): any;

  setMessageWindow(messageWindow: Window_Message): void;

  start(): any;

  updatePlacement(): any;

  windowWidth(): any;

  windowHeight(): any;

  maxCols(): any;

  maxItems(): any;

  itemWidth(): any;

  itemRect(index: number): Rectangle;

  isScrollEnabled(): any;

  isHoverEnabled(): any;

  createButtons(): any;

  placeButtons(): any;

  totalButtonWidth(): any;

  buttonSpacing(): any;

  buttonY(): any;

  update(): any;

  processDigitChange(): void;

  changeDigit(up: boolean): any;

  isTouchOkEnabled(): any;

  isOkEnabled(): any;

  isCancelEnabled(): any;

  processOk(): void;

  drawItem(index: number): any;

  onButtonUp(): any;

  onButtonDown(): any;

  onButtonOk(): any;

  //-----------------------------------------------------------------------------
  // Window_EventItem
  //
  // The window used for the event command [Select Item].
}
declare class Window_EventItem {
  initialize(rect: Rectangle): any;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): any;

  start(): any;

  update(): any;

  updateCancelButton(): any;

  updatePlacement(): any;

  placeCancelButton(): any;

  includes(item): any;

  needsNumber(): any;

  isEnabled(/*item*/): any;

  onOk(): any;

  onCancel(): any;

  //-----------------------------------------------------------------------------
  // Window_Message
  //
  // The window for displaying text messages.
}
declare class Window_Message {
  initialize(rect: Rectangle): any;

  initMembers(): any;

  setGoldWindow(goldWindow: Window_Gold): void;

  setNameBoxWindow(nameBoxWindow: Window_NameBox): void;

  setChoiceListWindow(choiceListWindow: Window_ChoiceList): void;

  setNumberInputWindow(numberInputWindow: Window_NumberInput): void;

  setEventItemWindow(eventItemWindow: Window_EventItem): void;

  clearFlags(): any;

  update(): any;

  checkToNotClose(): any;

  synchronizeNameBox(): any;

  canStart(): any;

  startMessage(): any;

  newLineX(text: TextState): any;

  updatePlacement(): any;

  updateBackground(): any;

  terminateMessage(): any;

  updateWait(): any;

  updateLoading(): any;

  updateInput(): any;

  isAnySubWindowActive(): any;

  updateMessage(): any;

  shouldBreakHere(text: TextState): any;

  canBreakHere(text: TextState): any;

  onEndOfText(): any;

  startInput(): any;

  isTriggered(): any;

  doesContinue(): any;

  areSettingsChanged(): void;

  updateShowFast(): any;

  newPage(text: TextState): any;

  updateSpeakerName(): any;

  loadMessageFace(): any;

  drawMessageFace(): any;

  processControlCharacter(text: TextState, c: string): any;

  processNewLine(text: TextState): any;

  processNewPage(text: TextState): any;

  isEndOfText(text: TextState): any;

  needsNewPage(text: TextState): any;

  processEscapeCharacter(code: number, textState: TextState): any;

  startWait(count: number): any;

  startPause(): any;

  isWaiting(): any;

  //-----------------------------------------------------------------------------
  // Window_ScrollText
  //
  // The window for displaying scrolling text. No frame is displayed, but it
  // is handled as a window for convenience.
}
declare class Window_ScrollText {
  initialize(rect: Rectangle): any;

  update(): any;

  startMessage(): any;

  refresh(): any;

  updatePlacement(): any;

  contentsHeight(): any;

  updateMessage(): any;

  scrollSpeed(): any;

  isFastForward(): any;

  fastForwardRate(): any;

  terminateMessage(): any;

  //-----------------------------------------------------------------------------
  // Window_MapName
  //
  // The window for displaying the map name on the map screen.
}
declare class Window_MapName {
  initialize(rect: Rectangle): any;

  update(): any;

  updateFadeIn(): any;

  updateFadeOut(): any;

  open(): any;

  close(): any;

  refresh(): any;

  drawBackground(x: number, y: number, width: number, height: number): any;

  //-----------------------------------------------------------------------------
  // Window_BattleLog
  //
  // The window for displaying battle progress. No frame is displayed, but it is
  // handled as a window for convenience.
}
declare class Window_BattleLog {
  initialize(rect: Rectangle): any;

  setSpriteset(spriteset: Spriteset_Battle): void;

  maxLines(): any;

  numLines(): any;

  messageSpeed(): any;

  isBusy(): any;

  update(): any;

  updateWait(): any;

  updateWaitCount(): any;

  updateWaitMode(): any;

  setWaitMode(waitMode: string): void;

  callNextMethod(): any;

  isFastForward(): any;

  push(methodName: string): any;

  clear(): any;

  wait(): any;

  waitForEffect(): any;

  waitForMovement(): any;

  addText(text: string): any;

  pushBaseLine(): any;

  popBaseLine(): any;

  waitForNewLine(): any;

  popupDamage(target: Game_Battler): any;

  performActionStart(subject: Game_Battler, action: Game_Action): any;

  performAction(subject: Game_Battler, action: Game_Action): any;

  performActionEnd(subject: Game_Battler): any;

  performDamage(target: Game_Battler): any;

  performMiss(target: Game_Battler): any;

  performRecovery(target: Game_Battler): any;

  performEvasion(target: Game_Battler): any;

  performMagicEvasion(target: Game_Battler): any;

  performCounter(target: Game_Battler): any;

  performReflection(target: Game_Battler): any;

  performSubstitute(substitute: Game_Battler, target: Game_Battler): any;

  performCollapse(target: Game_Battler): any;

  showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): any;

  refresh(): any;

  drawBackground(): any;

  backRect(): Rectangle;

  lineRect(index: number): Rectangle;

  backColor(): any;

  backPaintOpacity(): any;

  drawLineText(index: number): any;

  startTurn(): any;

  startAction(
    subject: Game_Battler,
    action: Game_Action,
    targets: Game_Battler[]
  ): any;

  endAction(subject: Game_Battler): any;

  displayCurrentState(subject: Game_Battler): any;

  displayRegeneration(subject: Game_Battler): any;

  displayAction(subject: Game_Battler, item: UsableItem): any;

  displayItemMessage(fmt: string, subject: Game_Battler, item: UsableItem): any;

  displayCounter(target: Game_Battler): any;

  displayReflection(target: Game_Battler): any;

  displaySubstitute(substitute: Game_Battler, target: Game_Battler): any;

  displayActionResults(subject: Game_Battler, target: Game_Battler): any;

  displayFailure(target: Game_Battler): any;

  displayCritical(target: Game_Battler): any;

  displayDamage(target: Game_Battler): any;

  displayMiss(target: Game_Battler): any;

  displayEvasion(target: Game_Battler): any;

  displayHpDamage(target: Game_Battler): any;

  displayMpDamage(target: Game_Battler): any;

  displayTpDamage(target: Game_Battler): any;

  displayAffectedStatus(target: Game_Battler): any;

  displayAutoAffectedStatus(target: Game_Battler): any;

  displayChangedStates(target: Game_Battler): any;

  displayAddedStates(target: Game_Battler): any;

  displayRemovedStates(target: Game_Battler): any;

  displayChangedBuffs(target: Game_Battler): any;

  displayBuffs(target: Game_Battler, buffs: ParamId[], fmt: string): any;

  makeHpDamageText(target: Game_Battler): any;

  makeMpDamageText(target: Game_Battler): any;

  makeTpDamageText(target: Game_Battler): any;

  //-----------------------------------------------------------------------------
  // Window_PartyCommand
  //
  // The window for selecting whether to fight or escape on the battle screen.
}
declare class Window_PartyCommand {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  setup(): void;

  //-----------------------------------------------------------------------------
  // Window_ActorCommand
  //
  // The window for selecting an actor's action on the battle screen.
}
declare class Window_ActorCommand {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  addAttackCommand(): any;

  addSkillCommands(): any;

  addGuardCommand(): any;

  addItemCommand(): any;

  setup(actor: Game_Actor): void;

  actor(): any;

  processOk(): void;

  selectLast(): any;

  //-----------------------------------------------------------------------------
  // Window_BattleStatus
  //
  // The window for displaying the status of party members on the battle screen.
}
declare class Window_BattleStatus {
  initialize(rect: Rectangle): any;

  extraHeight(): any;

  maxCols(): any;

  itemHeight(): any;

  maxItems(): any;

  rowSpacing(): any;

  updatePadding(): any;

  actor(index: number): any;

  selectActor(actor: Game_Actor): any;

  update(): any;

  preparePartyRefresh(): any;

  performPartyRefresh(): any;

  drawItem(index: number): any;

  drawItemImage(index: number): any;

  drawItemStatus(index: number): any;

  faceRect(index: number): Rectangle;

  nameX(rect: Rectangle): any;

  nameY(rect: Rectangle): any;

  stateIconX(rect: Rectangle): any;

  stateIconY(rect: Rectangle): any;

  basicGaugesX(rect: Rectangle): any;

  basicGaugesY(rect: Rectangle): any;

  //-----------------------------------------------------------------------------
  // Window_BattleActor
  //
  // The window for selecting a target actor on the battle screen.
}
declare class Window_BattleActor {
  initialize(rect: Rectangle): any;

  show(): any;

  hide(): any;

  select(index: number): any;

  processTouch(): void;

  //-----------------------------------------------------------------------------
  // Window_BattleEnemy
  //
  // The window for selecting a target enemy on the battle screen.
}
declare class Window_BattleEnemy {
  initialize(rect: Rectangle): any;

  maxCols(): any;

  maxItems(): any;

  enemy(): any;

  enemyindex(): number;

  drawItem(index: number): any;

  show(): any;

  hide(): any;

  refresh(): any;

  select(index: number): any;

  processTouch(): void;

  //-----------------------------------------------------------------------------
  // Window_BattleSkill
  //
  // The window for selecting a skill to use on the battle screen.
}
declare class Window_BattleSkill {
  initialize(rect: Rectangle): any;

  show(): any;

  hide(): any;

  //-----------------------------------------------------------------------------
  // Window_BattleItem
  //
  // The window for selecting an item to use on the battle screen.
}
declare class Window_BattleItem {
  initialize(rect: Rectangle): any;

  includes(item: UsableItem): any;

  show(): any;

  hide(): any;

  //-----------------------------------------------------------------------------
  // Window_TitleCommand
  //
  // The window for selecting New Game/Continue on the title screen.
}
declare class Window_TitleCommand {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  isContinueEnabled(): any;

  processOk(): void;

  selectLast(): any;

  //-----------------------------------------------------------------------------
  // Window_GameEnd
  //
  // The window for selecting "Go to Title" on the game end screen.
}
declare class Window_GameEnd {
  initialize(rect: Rectangle): any;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_DebugRange
  //
  // The window for selecting a block of switches/variables on the debug screen.
}
declare class Window_DebugRange {
  initialize(rect: Rectangle): any;

  maxItems(): any;

  update(): any;

  mode(index: number): any;

  topId(index: number): any;

  isSwitchMode(index: number): any;

  drawItem(index: number): any;

  isCancelTriggered(): any;

  processCancel(): void;

  setEditWindow(editWindow: Window_NameEdit): void;

  //-----------------------------------------------------------------------------
  // Window_DebugEdit
  //
  // The window for displaying switches and variables on the debug screen.
}
declare class Window_DebugEdit {
  initialize(rect: Rectangle): any;

  maxItems(): any;

  drawItem(index: number): any;

  itemName(dataId: number): any;

  itemStatus(dataId: number): any;

  setMode(mode: string): void;

  setTopId(id: number): void;

  currentId(): any;

  update(): any;

  updateSwitch(): any;

  updateVariable(): any;

  deltaForVariable(): any;
}

//-----------------------------------------------------------------------------
