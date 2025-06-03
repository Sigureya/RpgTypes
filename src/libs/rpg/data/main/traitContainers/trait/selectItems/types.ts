import type { SourceIdentifier } from "src/namedItemSource";

export interface TraitLabelResolved {
  format: string;
  code: number;
  label: string;
  dataSource?: SourceIdentifier;
}
