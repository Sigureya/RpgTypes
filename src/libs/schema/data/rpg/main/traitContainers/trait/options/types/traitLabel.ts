export interface RawTraitLabel {
  domainName: string;
  format: string;
}

export interface TraitLabelWithOption<T> extends RawTraitLabel {
  domainName: string;
  format: string;
  options: T;
}
