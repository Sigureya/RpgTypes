import { Rectangle } from "./rectangle";
import { Game_Actor } from "../object";
import { CommandItem } from "./types/commandItem";
import { Window_Command } from "./Window_Command";
import { Window_SkillList } from "./Window_SkillList";
//-----------------------------------------------------------------------------
// Window_SkillType
//
// The window for selecting a skill type on the skill screen.

export declare class Window_SkillType extends Window_Command<number> {
  currentExt(): number | null;
  currentData(): CommandItem<number> | null;
  findExt(ext: number): number;
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  makeCommandList(): void;

  update(): void;

  setSkillWindow(skillWindow: Window_SkillList): void;

  selectLast(): void;
}
