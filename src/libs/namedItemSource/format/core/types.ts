import type { Data_NamedItem } from "./namedItem";
import type { SourceIdentifier } from "./sourceIdentifier";

export interface NamedItemSource {
  items: Data_NamedItem[];
  source: SourceIdentifier;
  label: string;
}

export interface FormatLabelResolved<Key = string> {
  format: string;
  targetKey: Key;
  label: string;
  dataSource?: SourceIdentifier;
}

export interface FinalFormatEntry {
  format: string;
  label: string;
  data?: ReadonlyArray<Data_NamedItem>;
}

export interface FormatWithSource {
  format: string;
  dataSource?: SourceIdentifier;
}

export interface FormatInput extends FormatWithSource {
  format: string;
  label: string;
  dataSource?: SourceIdentifier;
}

export interface FormatResult {
  label: string;
  text: string;
}
