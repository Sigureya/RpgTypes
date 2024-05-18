import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { Data_Skill } from "../data/skill";
import { Window_Selectable } from "./Window_Selectable";
import { ISelectable } from "./types/ISelctable";

export declare class Window_SkillList
  extends Window_Selectable
  implements ISelectable<Data_Skill>
{
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  setStypeId(stypeId: number): void;

  maxCols(): number;

  colSpacing(): number;

  maxItems(): number;

  item(): Data_Skill;

  itemAt(index: number): Data_Skill;

  isCurrentItemEnabled(): boolean;

  includes(item: Data_Skill): void;

  isEnabled(item: Data_Skill): boolean;

  makeItemList(): boolean;

  selectLast(): void;

  drawItem(index: number): void;

  costWidth(): number;

  drawSkillCost(skill: Data_Skill, x: number, y: number, width: number): void;

  updateHelp(): void;

  refresh(): void;
}
