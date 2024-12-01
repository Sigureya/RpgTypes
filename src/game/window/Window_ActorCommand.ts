import type { Game_Actor } from "../../game/object";
import type { Window_Command } from "./Window_Command";

//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.
export declare class Window_ActorCommand extends Window_Command<number> {
  makeCommandList(): void;

  addAttackCommand(): void;

  addSkillCommands(): void;

  addGuardCommand(): void;

  addItemCommand(): void;

  setup(actor: Game_Actor): void;

  actor(): void;

  processOk(): void;

  selectLast(): void;
}
