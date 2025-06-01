import { Data_TraitContainer, Trait } from '../../../..';
import { ParamArray } from '../members';
export interface Data_Class extends Data_TraitContainer {
    name: string;
    id: number;
    note: string;
    expParams: number[];
    params: ParamArray;
    learnings: Learning[];
    traits: Trait[];
}
export interface Learning {
    level: number;
    note: string;
    skillId: number;
}
export interface ClassLabels {
    params: string;
    learnings: string;
    expParams: string;
}
