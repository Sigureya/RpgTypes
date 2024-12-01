import type { Game_Interpreter } from "./Game_Interpreter";

export declare class Game_CommonEvent {
  _commonEventId: number;
  _interpreter: Game_Interpreter | null;
  constructor(commonEventId: number);
  initialize(commonEventId: number): void;
  event(): any;
  list(): any[];
  refresh(): void;
  isActive(): boolean;
  update(): void;
}
