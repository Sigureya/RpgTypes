import type {
  Data_NamedItem,
  Data_TraitContainer,
  Learning,
  ParamArray,
  Trait,
} from "./bases";

export interface Data_Class extends Data_NamedItem, Data_TraitContainer {
  name: string;
  id: number;
  traits: Trait[];
  note: string;

  params: ParamArray;
  learnings: Learning[];
  expParams: number[];
}
