import { Trait } from './types';
export declare const traitsAttackSkillId: (traits: ReadonlyArray<Trait>) => number;
export declare const traitsAddedSkillTypes: (traits: ReadonlyArray<Trait>) => number[];
export declare const isSkillTypeSealed: (traits: ReadonlyArray<Trait>, stypeId: number) => boolean;
export declare const traitAddedSkills: (traits: ReadonlyArray<Trait>) => number[];
export declare const isSkillIdSealed: (traits: ReadonlyArray<Trait>, skillId: number) => boolean;
