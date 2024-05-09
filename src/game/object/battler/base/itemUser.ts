import { DataSkill } from "src/game/data/item/skill";

export interface ItemUser {
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): boolean;
  isSkillWtypeOk(skill: DataSkill): boolean;
}
