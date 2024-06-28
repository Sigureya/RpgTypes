import { TextState } from "./types/textState";
import { Window_Gold } from "./Window_Gold";
import { Window_Base } from "./Window_Base";
import { Window_NameBox } from "./Window_NameBox";
import { Window_EventItem } from "./Window_EventItem";
import { Window_ChoiceList } from "./Window_ChoiceList";
import { Window_NumberInput } from "./Window_NumberInput";

//-----------------------------------------------------------------------------
// Window_Message
//
// The window for displaying text messages.
export declare class Window_Message extends Window_Base {
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
