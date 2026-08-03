import { Data_Weapon, Trait } from './traitContainers';
import { Data_Skill } from './usableItems';
export interface Battler_SkillUser {
    mp: number;
    tp: number;
}
export interface UsableSkillInfo {
    skill: Data_Skill;
    usable: boolean;
}
export declare const skillMpCost: (traits: ReadonlyArray<Trait>, skill: Data_Skill) => number;
export declare const canPaySkillCostBasic: (battler: Battler_SkillUser, traits: ReadonlyArray<Trait>, skill: Data_Skill) => boolean;
export declare const isSkillRequiredWeaponTypeOk: (weapons: ReadonlyArray<Data_Weapon>, skill: Data_Skill) => boolean;
export declare const isSkillSealed: (traits: ReadonlyArray<Trait>, skill: Data_Skill) => boolean;
export declare const filterSkillConditionTraits: (traits: ReadonlyArray<Trait>) => Trait[];
export declare const filterUsableSkillsWithWeapon: (skills: ReadonlyArray<Data_Skill>, traits: ReadonlyArray<Trait>, weapons: ReadonlyArray<Data_Weapon>, battler: Battler_SkillUser) => Data_Skill[];
export declare const filterUsableSkillsEx: <T>(skills: ReadonlyArray<T>, traits: ReadonlyArray<Trait>, battler: Battler_SkillUser, fn: (skill: T) => Data_Skill | null | undefined) => T[];
export declare const filterUsableSkills: (skills: ReadonlyArray<Data_Skill>, traits: ReadonlyArray<Trait>, battler: Battler_SkillUser) => Data_Skill[];
export declare const mapUsableSkills: (skills: ReadonlyArray<Data_Skill>, traits: ReadonlyArray<Trait>, battler: Battler_SkillUser) => UsableSkillInfo[];
