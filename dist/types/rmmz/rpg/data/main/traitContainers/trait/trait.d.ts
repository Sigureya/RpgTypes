import { TraitCode } from './core';
import { Trait, Trait_AttackState } from './types';
export declare const isTraitAttackState: (trait: Trait) => trait is Trait_AttackState;
export declare const traitPi: (traits: ReadonlyArray<Trait>, code: number, id: number) => number;
export declare const traitSum: (traits: ReadonlyArray<Trait>, code: number, id: number) => number;
export declare const traitSumAll: (traits: ReadonlyArray<Trait>, code: number) => number;
export declare const traitSet: (traits: ReadonlyArray<Trait>, code: number) => number[];
export declare const someTraitMatched: (traits: ReadonlyArray<Trait>, code: TraitCode, etypeId: number) => boolean;
