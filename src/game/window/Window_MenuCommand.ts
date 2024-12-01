import type { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_MenuCommand
//
// The window for selecting a command on the menu screen.

export declare class Window_MenuCommand extends Window_Command {
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
}
