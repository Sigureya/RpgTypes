import type { Data_TraitContainer, Trait } from "../trait";

export type ClassParamGlowTable = [
  number[], // maxhp
  number[], // maxmp
  number[], // atk
  number[], // def
  number[], // mat
  number[], // mdf
  number[], // agi
  number[], // luk
];

export interface Data_Class extends Data_TraitContainer {
  name: string;
  id: number;
  note: string;

  expParams: number[];
  params: ClassParamGlowTable;
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
