import type { Data_Skill } from "../../../../../../schema";
export interface ItemUser {
    canInput(): boolean;
    canMove(): boolean;
    isConfused(): boolean;
    confusionLevel(): boolean;
    isSkillWtypeOk(skill: Data_Skill): boolean;
    attackSkillId(): number;
    guardSkillId(): number;
}
