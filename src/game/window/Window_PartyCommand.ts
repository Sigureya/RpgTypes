import { Rectangle } from "src/types/rectangle";
import { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_PartyCommand
//
// The window for selecting whether to fight or escape on the battle screen.
export declare class Window_PartyCommand extends Window_Command {
  initialize(rect: Rectangle): void;

  makeCommandList(): void;

  setup(): void;
}
