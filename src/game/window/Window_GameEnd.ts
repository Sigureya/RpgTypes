import { Rectangle } from "src/types/rectangle";
import { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_GameEnd
//
// The window for selecting "Go to Title" on the game end screen.
export declare class Window_GameEnd extends Window_Command {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;
}
