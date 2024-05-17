import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { CommandItem } from "./types/commandItem";
import { Window_Command } from "./Window_Command";
import { Window_SkillList } from "./Window_SkillList";

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
