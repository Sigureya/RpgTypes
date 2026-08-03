import { Trait } from './types';
export declare const traitAttackElements: (traits: ReadonlyArray<Trait>) => number[];
export declare const traitAttackStates: (traits: ReadonlyArray<Trait>) => number[];
export declare const traitAttackStateRate: (traits: ReadonlyArray<Trait>, stateId: number) => number;
export declare const traitAtttackSpeed: (traits: ReadonlyArray<Trait>) => number;
export declare const traitAttackTimesAdd: (traits: ReadonlyArray<Trait>) => number;
export declare const traitAttackSkillId: (traits: ReadonlyArray<Trait>) => number;
