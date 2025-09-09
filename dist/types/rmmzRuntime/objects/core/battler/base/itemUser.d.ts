import { Data_Skill } from '@sigureya/rpgtypes';
export interface Rmmz_ItemUser {
    canInput(): boolean;
    canMove(): boolean;
    isConfused(): boolean;
    confusionLevel(): boolean;
    isSkillWtypeOk(skill: Data_Skill): boolean;
    attackSkillId(): number;
    guardSkillId(): number;
}
