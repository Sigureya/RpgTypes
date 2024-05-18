import { Data_Skill } from "src/game/data/item/skill";

export interface ItemUser {
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): boolean;
  isSkillWtypeOk(skill: Data_Skill): boolean;
  attackSkillId(): number;
  guardSkillId(): number;
}
