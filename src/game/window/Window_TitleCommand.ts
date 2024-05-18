import { Rectangle } from "src/types/rectangle";
import { Window_Command } from "./Window_Command";

export declare class Window_TitleCommand extends Window_Command {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  isContinueEnabled(): boolean;

  processOk(): void;

  selectLast(): void;
}
