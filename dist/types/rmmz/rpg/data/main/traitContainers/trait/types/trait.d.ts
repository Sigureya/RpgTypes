import { TRAIT_ATTACK_STATE } from '../core';
export interface Trait {
    code: number;
    dataId: number;
    value: number;
}
export interface Trait_AttackState extends Trait {
    code: typeof TRAIT_ATTACK_STATE;
}
export interface Data_TraitContainer {
    traits: Trait[];
    note: string;
}
