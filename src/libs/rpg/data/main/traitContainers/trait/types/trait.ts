import type { SourceIdentifier } from "src/namedItemSource";

export interface Trait {
  code: number;
  dataId: number;
  value: number;
}

export interface Data_TraitContainer {
  traits: Trait[];
  note: string;
}

export interface TraitLabelResolved {
  format: string;
  code: number;
  label: string;
  dataSource?: SourceIdentifier;
}
