export interface Rmmz_Message {
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
  setChoices(
    choices: ReadonlyArray<string>,
    defaultType: number,
    cancelType: number
  ): void;
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
