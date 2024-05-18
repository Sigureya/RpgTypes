//-----------------------------------------------------------------------------
// Game_Message
//
// The game object class for the state of the message window that displays text
// or selections, etc.
export declare class Game_Message {
  _texts: string[];
  _choices: never[];
  _speakerName: string;
  _faceName: string;
  _faceIndex: number;
  _background: number;
  _positionType: number;
  _choiceDefaultType: number;
  _choiceCancelType: number;
  _choiceBackground: number;
  _choicePositionType: number;
  _numInputVariableId: number;
  _numInputMaxDigits: number;
  _itemChoiceVariableId: number;
  _itemChoiceItypeId: number;
  _scrollMode: boolean;
  _scrollSpeed: number;
  _scrollNoFast: boolean;
  _choiceCallback: ((index: number) => void) | null;
  constructor();
  initialize(): void;
  clear(): void;
  choices(): void;
  speakerName(): string;
  faceName(): string;
  faceIndex(): number;
  background(): number;
  positionType(): number;
  choiceDefaultType(): number;
  choiceCancelType(): number;
  choiceBackground(): number;
  choicePositionType(): number;
  numInputVariableId(): number;
  numInputMaxDigits(): number;
  itemChoiceVariableId(): number;
  itemChoiceItypeId(): number;
  scrollMode(): boolean;
  scrollSpeed(): number;
  scrollNoFast(): boolean;
  add(text: string): void;
  setSpeakerName(speakerName: string): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBackground(background: number): void;
  setPositionType(positionType: number): void;
  setChoices(choices: never[], defaultType: number, cancelType: number): void;
  setChoiceBackground(background: number): void;
  setChoicePositionType(positionType: number): void;
  setNumberInput(variableId: number, maxDigits: number): void;
  setItemChoice(variableId: number, itemType: number): void;
  setScroll(speed: number, noFast: boolean): void;
  setChoiceCallback(callback: (index: number) => void): void;
  onChoice(n: number): void;
  hasText(): boolean;
  isChoice(): boolean;
  isNumberInput(): boolean;
  isItemChoice(): boolean;
  isBusy(): boolean;
  newPage(): void;
  allText(): string;
  isRTL(): boolean;
}