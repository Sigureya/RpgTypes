import { Data_TraitContainer, Trait } from '../trait';
export interface Data_Class extends Data_ClassBase {
    name: string;
    id: number;
    note: string;
    expParams: number[];
    learnings: Learning[];
    traits: Trait[];
    params: ClassParamGlowTable;
}
export interface Data_ClassEx extends Data_ClassBase {
    params: ClassParamGlowing[];
}
export interface Data_ClassBase extends Data_TraitContainer {
    name: string;
    id: number;
    note: string;
    expParams: number[];
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
export type ClassParamGlowTable = [
    number[],
    number[],
    number[],
    number[],
    number[],
    number[],
    number[],
    number[]
];
export interface ClassParamGlowing {
    atk: number;
    def: number;
    mat: number;
    mdf: number;
    agi: number;
    luk: number;
    mhp: number;
    mmp: number;
}
