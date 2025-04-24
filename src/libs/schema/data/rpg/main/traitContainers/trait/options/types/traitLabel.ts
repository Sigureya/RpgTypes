import type { SourceIdentifier } from "@RpgTypes/schema";

export interface TraitLabel {
  domainName: string;
  format: string;
}

export interface TraitLabelWithOption<T> extends TraitLabel {
  domainName: string;
  format: string;
  options: T;
}

export interface PartialTraitLabel<T> {
  domainName?: string;
  format?: string;
  options?: T;
}

export interface TraitLabelResolved {
  code: number;
  label: string;
  format: string;
  dataSource?: SourceIdentifier;
}
