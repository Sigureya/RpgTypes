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
import { ShopGoods } from "./types/goods";
import { Data_BaseItem } from "../data/item/baseItem";
import { Data_Equip } from "../object/battler/base/equip";
import { SaveFileInfo } from "../data/saveFileInfo";
import { Data_Skill } from "../data/item/skill";
import { TextAlign } from "./types/TextAlign";

interface Selectable<T> {
  itemAt(index: number): T;
  item(): T;
}

declare class Window_Base {
  initialize(rect: Rectangle): void;

  destroy(options: any): any;

  lineHeight(): number;

  itemWidth(): number;

  itemHeight(): number;

  itemPadding(): any;

  baseTextrect(): Rectangle;

  loadWindowskin(): any;

  updatePadding(): void;

  updateBackOpacity(): void;

  fittingHeight(numLines: number): any;

  updateTone(): void;

  createContents(): any;

  destroyContents(): any;

  contentsWidth(): number;

  contentsHeight(): number;

  resetFontSettings(): void;

  resetTextColor(): void;

  update(): void;

  updateOpen(): void;

  updateClose(): void;

  open(): any;

  close(): any;

  isOpening(): boolean;

  isClosing(): boolean;

  show(): any;

  hide(): any;

  activate(): any;

  deactivate(): any;

  systemColor(): any;

  translucentOpacity(): any;

  changeTextColor(color: string): any;

  changeOutlineColor(color: string): any;

  changePaintOpacity(enabled: boolean): any;

  drawrect(x: number, y: number, width: number, height: number): void;

  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    align: TextAlign
  ): any;

  textWidth(text: string): number;

  drawTextEx(text: string, x: number, y: number, width: number): void;

  textSizeEx(text: string): any;

  createTextState(text: string, x: number, y: number, width: number): any;

  processAllText(text: TextState): void;

  flushTextState(text: TextState): void;

  createTextBuffer(rtl: boolean): any;

  convertEscapeCharacters(text: string): any;

  actorName(actorId: number): string;

  partyMemberName(memberIndex: number): string;

  processCharacter(text: TextState): void;

  processControlCharacter(text: TextState, char: string): any;

  processNewLine(text: TextState): void;

  obtainEscapeCode(text: TextState): void;

  obtainEscapeParam(text: TextState): void;

  processEscapeCharacter(code: number, textState: TextState): any;

  processColorChange(colorIndex: number): any;

  processDrawIcon(iconIndex: number, textState: TextState): void;

  makeFontBigger(): any;

  makeFontSmaller(): any;

  calcTextHeight(text: TextState): void;

  maxFontSizeInLine(line: number): any;

  drawIcon(iconIndex: number, x: number, y: number): void;

  drawItemName(
    item: Data_NamedItem,
    x: number,
    y: number,
    width: number
  ): string;

  drawCurrencyValue(
    value: number,
    unit: string,
    x: number,
    y: number,
    width: number
  ): any;

  setBackgroundType(type: number): void;

  showBackgroundDimmer(): any;

  createDimmerSprite(): any;

  hideBackgroundDimmer(): any;

  updateBackgroundDimmer(): void;

  refreshDimmerBitmap(): any;

  playCursorSound(): any;

  playOkSound(): any;

  playBuzzerSound(): any;
}

//-----------------------------------------------------------------------------
// Window_Scrollable
//
// The window class with scroll functions.

declare class Window_Scrollable extends Window_Base {
  initialize(rect: Rectangle): void;

  clearScrollStatus(): any;

  scrollX(): number;

  scrollY(): number;

  scrollBaseX(): number;

  scrollBaseY(): number;

  scrollTo(x: number, y: number): any;

  scrollBy(x: number, y: number): any;

  smoothScrollTo(x: number, y: number): any;

  smoothScrollBy(x: number, y: number): any;

  setScrollAccel(x: number, y: number): void;

  overallWidth(): number;

  overallHeight(): number;

  maxScrollX(): number;

  maxScrollY(): number;

  scrollBlockWidth(): number;

  scrollBlockHeight(): number;

  smoothScrollDown(n: number): any;

  smoothScrollUp(n: number): any;

  update(): void;

  processWheelScroll(): void;

  processTouchScroll(): void;

  isWheelScrollEnabled(): boolean;

  isTouchScrollEnabled(): boolean;

  isScrollEnabled(): boolean;

  isTouchedInsideFrame(): boolean;

  onTouchScrollStart(): void;

  onTouchScroll(): void;

  onTouchScrollEnd(): void;

  updateSmoothScroll(): void;

  updateScrollAccel(): void;

  updateArrows(): void;

  updateOrigin(): void;

  updateScrollBase(baseX: number, baseY: number): void;

  paint(): any;

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //
  // The window class with cursor movement functions.
}
export declare class Window_Selectable extends Window_Scrollable {
  initialize(rect: Rectangle): void;

  index(): number;

  cursorFixed(): any;

  setCursorFixed(cursorFixed: boolean): void;

  cursorAll(): any;

  setCursorAll(cursorAll: boolean): void;

  maxCols(): number;

  maxItems(): number;

  colSpacing(): any;

  rowSpacing(): any;

  itemWidth(): number;

  itemHeight(): number;

  contentsHeight(): number;

  maxRows(): any;

  overallHeight(): number;

  activate(): any;

  deactivate(): any;

  select(index: number): void;

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

  maxVisibleItems(): boolean;

  isHorizontal(): boolean;

  topindex(): number;

  itemRect(index: number): Rectangle;

  itemRectWithPadding(index: number): Rectangle;

  itemLineRect(index: number): Rectangle;

  setHelpWindow(helpWindow: Window_Help): void;

  showHelpWindow(): any;

  hideHelpWindow(): any;

  setHandler(symbol: string, method: () => void): void;

  isHandled(symbol: string): boolean;

  callHandler(symbol: string): any;

  isOpenAndActive(): boolean;

  isCursorMovable(): boolean;

  cursorDown(wrap: boolean): any;

  cursorUp(wrap: boolean): any;

  cursorRight(wrap: boolean): any;

  cursorLeft(wrap: boolean): any;

  cursorPagedown(): any;

  cursorPageup(): any;

  isScrollEnabled(): boolean;

  update(): void;

  processCursorMove(): void;

  processHandling(): void;

  processTouch(): void;

  isHoverEnabled(): boolean;

  onTouchSelect(trigger: boolean): void;

  onTouchOk(): void;

  onTouchCancel(): void;

  hitindex(): number;

  hitTest(x: number, y: number): any;

  isTouchOkEnabled(): boolean;

  isOkEnabled(): boolean;

  isCancelEnabled(): boolean;

  isOkTriggered(): boolean;

  isCancelTriggered(): boolean;

  processOk(): void;

  callOkHandler(): any;

  processCancel(): void;

  callCancelHandler(): any;

  processPageup(): void;

  processPagedown(): void;

  updateInputData(): void;

  ensureCursorVisible(smooth: boolean): boolean;

  callUpdateHelp(): void;

  updateHelp(): void;

  setHelpWindowItem(item: Data_NamedItem): void;

  isCurrentItemEnabled(): boolean;

  drawAllItems(): void;

  drawItem(index: number): void;

  clearItem(index: number): any;

  drawItemBackground(index: number): void;

  drawBackgroundRect(rect: Rectangle): void;

  redrawItem(index: number): void;

  redrawCurrentItem(): void;

  refresh(): void;

  paint(): any;

  refreshCursor(): any;

  refreshCursorForAll(): any;

  //-----------------------------------------------------------------------------
  // Window_Command
  //
  // The superclass of windows for selecting a command.
}
declare class Window_Command<ExtType> {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  clearCommandList(): boolean;

  makeCommandList(): void;

  commandName(index: number): string;

  commandSymbol(index: number): any;

  isCommandEnabled(index: number): boolean;

  currentData(): any;

  isCurrentItemEnabled(): boolean;

  currentSymbol(): string;

  currentExt(): ExtType;

  findSymbol(symbol: string): any;

  selectSymbol(symbol: string): any;

  findExt(ext: ExtType): number;

  selectExt(ext: any): any;

  drawItem(index: number): void;

  itemTextAlign(): TextAlign;

  isOkEnabled(): boolean;

  callOkHandler(): any;

  refresh(): void;

  //-----------------------------------------------------------------------------
  // Window_HorzCommand
  //
  // The command window for the horizontal selection format.
}
declare class Window_HorzCommand {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  itemTextAlign(): TextAlign;

  //-----------------------------------------------------------------------------
  // Window_Help
  //
  // The window for displaying the description of the selected item.
}
declare class Window_Help {
  initialize(rect: Rectangle): void;

  setText(text: string): void;

  clear(): any;

  setItem(item: Data_NamedItem): void;

  refresh(): void;
}

//-----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.

declare class Window_Gold {
  initialize(rect: Rectangle): void;

  colSpacing(): any;

  refresh(): void;

  value(): any;

  currencyUnit(): any;

  open(): any;
}

//-----------------------------------------------------------------------------
// Window_StatusBase
//
// The superclass of windows for displaying actor status.

declare class Window_StatusBase {
  initialize(rect: Rectangle): void;

  loadFaceImages(): any;

  refresh(): void;

  hideAdditionalSprites(): any;

  placeActorName(actor: Game_Actor, x: number, y: number): string;

  placeStateIcon(actor: Game_Actor, x: number, y: number): any;

  placeGauge(actor: Game_Actor, type: string, x: number, y: number): any;

  createInnerSprite(key: string, spriteClass: typeof Sprite): any;

  placeTimeGauge(actor: Game_Actor, x: number, y: number): any;

  placeBasicGauges(actor: Game_Actor, x: number, y: number): any;

  gaugeLineHeight(): number;

  drawActorCharacter(actor: Game_Actor, x: number, y: number): void;

  drawActorName(actor: Game_Actor, x: number, y: number, width: number): string;

  drawActorClass(actor: Game_Actor, x: number, y: number, width: number): void;

  drawActorNickname(
    actor: Game_Actor,
    x: number,
    y: number,
    width: number
  ): any;

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

  addMainCommands(): any;

  addFormationCommand(): any;

  addOriginalCommands(): any;

  addOptionsCommand(): any;

  addSaveCommand(): any;

  addGameEndCommand(): any;

  needsCommand(name: string): any;

  areMainCommandsEnabled(): any;

  isFormationEnabled(): boolean;

  isOptionsEnabled(): boolean;

  isSaveEnabled(): boolean;

  isGameEndEnabled(): boolean;

  processOk(): void;

  selectLast(): any;

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

  actor(index: number): any;

  drawItem(index: number): void;

  drawPendingItemBackground(index: number): void;

  drawItemImage(index: number): void;

  drawItemStatus(index: number): void;

  processOk(): void;

  isCurrentItemEnabled(): boolean;

  selectLast(): any;

  formationMode(): any;

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

  selectLast(): any;

  selectForItem(item: UsableItem): any;

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

  needsCommand(name: string): any;

  setItemWindow(itemWindow: Window_ItemList): void;

  needsSelection(): any;

  //-----------------------------------------------------------------------------
  // Window_ItemList
  //
  // The window for selecting an item on the item screen.
}
declare class Window_ItemList
  extends Window_Selectable
  implements Selectable<Data_BaseItem>
{
  initialize(rect: Rectangle): void;

  setCategory(category: string): void;

  maxCols(): number;

  colSpacing(): any;

  maxItems(): number;

  item(): Data_BaseItem;

  itemAt(index: number): Data_BaseItem;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_BaseItem): any;

  needsNumber(): any;

  isEnabled(item: Data_BaseItem): boolean;

  makeItemList(): boolean;

  selectLast(): any;

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
declare class Window_SkillList extends Window_Selectable {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  setStypeId(stypeId: number): void;

  maxCols(): number;

  colSpacing(): any;

  maxItems(): number;

  item(): any;

  itemAt(index: number): any;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_Skill): any;

  isEnabled(item: Data_Skill): boolean;

  makeItemList(): boolean;

  selectLast(): any;

  drawItem(index: number): void;

  costWidth(): number;

  drawSkillCost(skill: Data_Skill, x: number, y: number, width: number): void;

  updateHelp(): void;

  refresh(): void;

  //-----------------------------------------------------------------------------
  // Window_EquipStatus
  //
  // The window for displaying parameter changes on the equipment screen.
}
declare class Window_EquipStatus {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  colSpacing(): any;

  refresh(): void;

  setTempActor(tempActor: Game_Actor): void;

  drawAllParams(): void;

  drawItem(x: number, y: number, paramId: ParamId): void;

  drawParamName(x: number, y: number, paramId: ParamId): string;

  drawCurrentParam(x: number, y: number, paramId: ParamId): void;

  drawRightArrow(x: number, y: number): void;

  drawNewParam(x: number, y: number, paramId: ParamId): void;

  rightArrowWidth(): number;

  paramWidth(): number;

  paramX(): number;

  paramY(index: number): any;

  //-----------------------------------------------------------------------------
  // Window_EquipCommand
  //
  // The window for selecting a command on the equipment screen.
}
declare class Window_EquipCommand {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_EquipSlot
  //
  // The window for selecting an equipment slot on the equipment screen.
}
declare class Window_EquipSlot {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  update(): void;

  maxItems(): number;

  item(): any;

  itemAt(index: number): any;

  drawItem(index: number): void;

  slotNameWidth(): number;

  isEnabled(index: number): boolean;

  isCurrentItemEnabled(): boolean;

  setStatusWindow(statusWindow: Window_Status): void;

  setItemWindow(itemWindow: Window_EquipItem): void;

  updateHelp(): void;

  //-----------------------------------------------------------------------------
  // Window_EquipItem
  //
  // The window for selecting an equipment item on the equipment screen.
}
declare class Window_EquipItem {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  colSpacing(): any;

  setActor(actor: Game_Actor): void;

  setSlotId(slotId: number): void;

  includes(item: Data_Equip): any;

  etypeId(): any;

  isEnabled(/*item*/): boolean;

  selectLast(): any;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;

  playOkSound(): any;

  //-----------------------------------------------------------------------------
  // Window_Status
  //
  // The window for displaying full status on the status screen.
}
declare class Window_Status {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  refresh(): void;

  drawBlock1(): void;

  block1Y(): number;

  drawBlock2(): void;

  block2Y(): number;

  drawBasicInfo(x: number, y: number): void;

  drawExpInfo(x: number, y: number): void;

  expTotalValue(): any;

  expNextValue(): any;

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

  addGeneralOptions(): any;

  addVolumeOptions(): any;

  drawItem(index: number): void;

  statusWidth(): number;

  statusText(index: number): any;

  isVolumeSymbol(symbol: symbol): boolean;

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
  initialize(rect: Rectangle): void;

  setMode(mode: string, autosave: boolean): void;

  maxItems(): number;

  numVisibleRows(): boolean;

  itemHeight(): number;

  drawItem(index: number): void;

  indexToSavefileId(index: number): any;

  savefileIdToIndex(savefileId: number): any;

  isEnabled(savefileId: number): boolean;

  savefileId(): any;

  selectSavefile(savefileId: number): any;

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
declare class Window_ShopBuy {
  initialize(rect: Rectangle): void;

  setupGoods(shopGoods: ShopGoods[]): void;

  maxItems(): number;

  item(): any;

  itemAt(index: number): any;

  setMoney(money: number): void;

  isCurrentItemEnabled(): boolean;

  price(item: Data_BaseItem): any;

  isEnabled(item: Data_BaseItem): boolean;

  refresh(): void;

  makeItemList(): boolean;

  goodsToItem(goods: ShopGoods): any;

  drawItem(index: number): void;

  priceWidth(): number;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;

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
  initialize(rect: Rectangle): void;

  isScrollEnabled(): boolean;

  number(): any;

  setup(item: Data_BaseItem, max: number, price: number): void;

  setCurrencyUnit(currencyUnit: string): void;

  createButtons(): any;

  placeButtons(): any;

  totalButtonWidth(): number;

  buttonSpacing(): any;

  refresh(): void;

  drawCurrentItemName(): string;

  drawMultiplicationSign(): void;

  multiplicationSign(): any;

  multiplicationSignX(): number;

  drawNumber(): void;

  drawHorzLine(): void;

  drawTotalPrice(): void;

  itemNameY(): number;

  totalPriceY(): number;

  buttonY(): number;

  cursorWidth(): number;

  cursorX(): number;

  maxDigits(): any;

  update(): void;

  playOkSound(): void;

  processNumberChange(): void;

  changeNumber(amount: number): any;

  itemRect(): Rectangle;

  isTouchOkEnabled(): boolean;

  onButtonUp(): void;

  onButtonUp2(): void;

  onButtonDown(): void;

  onButtonDown2(): void;

  onButtonOk(): void;

  //-----------------------------------------------------------------------------
  // Window_ShopStatus
  //
  // The window for displaying number of items in possession and the actor's
  // equipment on the shop screen.
}
declare class Window_ShopStatus {
  initialize(rect: Rectangle): void;

  refresh(): void;

  setItem(item: Data_Equip): void;

  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;

  drawEquipInfo(x: number, y: number): void;

  statusMembers(): any;

  pageSize(): number;

  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;

  paramId(): number;

  currentEquippedItem(actor: Game_Actor, etypeId: number): Data_Equip | null;

  update(): void;

  updatePage(): void;

  isPageChangeEnabled(): boolean;

  isPageChangeRequested(): boolean;

  changePage(): any;

  //-----------------------------------------------------------------------------
  // Window_NameEdit
  //
  // The window for editing an actor's name on the name input screen.
}
declare class Window_NameEdit {
  initialize(rect: Rectangle): void;

  setup(actor: Game_Actor, maxLength: number): void;

  name(): string;

  restoreDefault(): any;

  add(ch: string): any;

  back(): any;

  faceWidth(): number;

  charWidth(): number;

  left(): any;

  itemRect(index: number): Rectangle;

  underlineColor(): any;

  drawUnderline(index: number): void;

  drawChar(index: number): void;

  refresh(): void;
}

declare class Window_NameInput {
  initialize(rect: Rectangle): void;

  setEditWindow(editWindow: Window_NameEdit): void;

  table(): any;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  groupSpacing(): any;

  character(): any;

  isPageChange(): boolean;

  isOk(): boolean;

  itemRect(index: number): Rectangle;

  drawItem(index: number): void;

  updateCursor(): void;

  isCursorMovable(): boolean;

  cursorDown(wrap: boolean): any;

  cursorUp(wrap: boolean): any;

  cursorRight(wrap: boolean): any;

  cursorLeft(wrap: boolean): any;

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

  updatePlacement(): void;

  updateBackground(): void;

  windowWidth(): number;

  windowHeight(): number;

  refresh(): void;

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

  update(): void;

  updateCancelButton(): void;

  selectDefault(): any;

  updatePlacement(): void;

  updateBackground(): void;

  placeCancelButton(): any;

  windowX(): number;

  windowY(): number;

  windowWidth(): number;

  windowHeight(): number;

  numVisibleRows(): boolean;

  maxLines(): any;

  maxChoiceWidth(): number;

  makeCommandList(): void;

  drawItem(index: number): void;

  isCancelEnabled(): boolean;

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

  updatePlacement(): void;

  windowWidth(): number;

  windowHeight(): number;

  maxCols(): number;

  maxItems(): number;

  itemWidth(): number;

  itemRect(index: number): Rectangle;

  isScrollEnabled(): boolean;

  isHoverEnabled(): boolean;

  createButtons(): any;

  placeButtons(): any;

  totalButtonWidth(): number;

  buttonSpacing(): any;

  buttonY(): number;

  update(): void;

  processDigitChange(): void;

  changeDigit(up: boolean): any;

  isTouchOkEnabled(): boolean;

  isOkEnabled(): boolean;

  isCancelEnabled(): boolean;

  processOk(): void;

  drawItem(index: number): void;

  onButtonUp(): void;

  onButtonDown(): void;

  onButtonOk(): void;

  //-----------------------------------------------------------------------------
  // Window_EventItem
  //
  // The window used for the event command [Select Item].
}
declare class Window_EventItem {
  initialize(rect: Rectangle): void;

  setMessageWindow(messageWindow: Window_Message): void;

  createCancelButton(): any;

  start(): any;

  update(): void;

  updateCancelButton(): void;

  updatePlacement(): void;

  placeCancelButton(): any;

  includes(item: Data_BaseItem): any;

  needsNumber(): any;

  isEnabled(/*item*/): boolean;

  onOk(): void;

  onCancel(): void;

  //-----------------------------------------------------------------------------
  // Window_Message
  //
  // The window for displaying text messages.
}
declare class Window_Message {
  initialize(rect: Rectangle): void;

  initMembers(): any;

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

  isAnySubWindowActive(): boolean;

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

  loadMessageFace(): any;

  drawMessageFace(): void;

  processControlCharacter(text: TextState, c: string): void;

  processNewLine(text: TextState): void;

  processNewPage(text: TextState): void;

  isEndOfText(text: TextState): boolean;

  needsNewPage(text: TextState): void;

  processEscapeCharacter(code: number, textState: TextState): void;

  startWait(count: number): any;

  startPause(): any;

  isWaiting(): boolean;

  //-----------------------------------------------------------------------------
  // Window_ScrollText
  //
  // The window for displaying scrolling text. No frame is displayed, but it
  // is handled as a window for convenience.
}
declare class Window_ScrollText {
  initialize(rect: Rectangle): void;

  update(): void;

  startMessage(): void;

  refresh(): void;

  updatePlacement(): void;

  contentsHeight(): number;

  updateMessage(): void;

  scrollSpeed(): any;

  isFastForward(): boolean;

  fastForwardRate(): any;

  terminateMessage(): void;

  //-----------------------------------------------------------------------------
  // Window_MapName
  //
  // The window for displaying the map name on the map screen.
}
declare class Window_MapName {
  initialize(rect: Rectangle): void;

  update(): void;

  updateFadeIn(): void;

  updateFadeOut(): void;

  open(): any;

  close(): any;

  refresh(): void;

  drawBackground(x: number, y: number, width: number, height: number): void;

  //-----------------------------------------------------------------------------
  // Window_BattleLog
  //
  // The window for displaying battle progress. No frame is displayed, but it is
  // handled as a window for convenience.
}
declare class Window_BattleLog {
  initialize(rect: Rectangle): void;

  setSpriteset(spriteset: Spriteset_Battle): void;

  maxLines(): any;

  numLines(): any;

  messageSpeed(): any;

  isBusy(): boolean;

  update(): void;

  updateWait(): void;

  updateWaitCount(): void;

  updateWaitMode(): void;

  setWaitMode(waitMode: string): void;

  callNextMethod(): any;

  isFastForward(): boolean;

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

  performMiss(target: Game_Battler): boolean;

  performRecovery(target: Game_Battler): any;

  performEvasion(target: Game_Battler): any;

  performMagicEvasion(target: Game_Battler): any;

  performCounter(target: Game_Battler): any;

  performReflection(target: Game_Battler): any;

  performSubstitute(substitute: Game_Battler, target: Game_Battler): any;

  performCollapse(target: Game_Battler): any;

  showAttackAnimation(subject: Game_Battler, targets: Game_Battler[]): any;

  refresh(): void;

  drawBackground(): void;

  backRect(): Rectangle;

  lineRect(index: number): Rectangle;

  backColor(): any;

  backPaintOpacity(): any;

  drawLineText(index: number): void;

  startTurn(): any;

  startAction(
    subject: Game_Battler,
    action: Game_Action,
    targets: Game_Battler[]
  ): any;

  endAction(subject: Game_Battler): any;

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

  makeHpDamageText(target: Game_Battler): any;

  makeMpDamageText(target: Game_Battler): any;

  makeTpDamageText(target: Game_Battler): any;

  //-----------------------------------------------------------------------------
  // Window_PartyCommand
  //
  // The window for selecting whether to fight or escape on the battle screen.
}
declare class Window_PartyCommand {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  setup(): void;

  //-----------------------------------------------------------------------------
  // Window_ActorCommand
  //
  // The window for selecting an actor's action on the battle screen.
}
declare class Window_ActorCommand {
  initialize(rect: Rectangle): void;

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
  initialize(rect: Rectangle): void;

  extraHeight(): number;

  maxCols(): number;

  itemHeight(): number;

  maxItems(): number;

  rowSpacing(): any;

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

  //-----------------------------------------------------------------------------
  // Window_BattleActor
  //
  // The window for selecting a target actor on the battle screen.
}
declare class Window_BattleActor {
  initialize(rect: Rectangle): void;

  show(): any;

  hide(): any;

  select(index: number): void;

  processTouch(): void;

  //-----------------------------------------------------------------------------
  // Window_BattleEnemy
  //
  // The window for selecting a target enemy on the battle screen.
}
declare class Window_BattleEnemy {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  maxItems(): number;

  enemy(): any;

  enemyindex(): number;

  drawItem(index: number): void;

  show(): any;

  hide(): any;

  refresh(): void;

  select(index: number): void;

  processTouch(): void;

  //-----------------------------------------------------------------------------
  // Window_BattleSkill
  //
  // The window for selecting a skill to use on the battle screen.
}
declare class Window_BattleSkill {
  initialize(rect: Rectangle): void;

  show(): any;

  hide(): any;

  //-----------------------------------------------------------------------------
  // Window_BattleItem
  //
  // The window for selecting an item to use on the battle screen.
}
declare class Window_BattleItem {
  initialize(rect: Rectangle): void;

  includes(item: UsableItem): any;

  show(): any;

  hide(): any;

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

  selectLast(): any;

  //-----------------------------------------------------------------------------
  // Window_GameEnd
  //
  // The window for selecting "Go to Title" on the game end screen.
}
declare class Window_GameEnd {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  //-----------------------------------------------------------------------------
  // Window_DebugRange
  //
  // The window for selecting a block of switches/variables on the debug screen.
}
declare class Window_DebugRange {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  update(): void;

  mode(index: number): any;

  topId(index: number): any;

  isSwitchMode(index: number): boolean;

  drawItem(index: number): void;

  isCancelTriggered(): boolean;

  processCancel(): void;

  setEditWindow(editWindow: Window_NameEdit): void;

  //-----------------------------------------------------------------------------
  // Window_DebugEdit
  //
  // The window for displaying switches and variables on the debug screen.
}
declare class Window_DebugEdit {
  initialize(rect: Rectangle): void;

  maxItems(): number;

  drawItem(index: number): void;

  itemName(dataId: number): string;

  itemStatus(dataId: number): any;

  setMode(mode: string): void;

  setTopId(id: number): void;

  currentId(): any;

  update(): void;

  updateSwitch(): void;

  updateVariable(): void;

  deltaForVariable(): any;
}

//-----------------------------------------------------------------------------
