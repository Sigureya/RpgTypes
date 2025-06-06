import type { Data_NamedItem } from "./namedItem";
import type { SourceIdentifier } from "./sourceIdentifier";

export interface NamedItemSource {
  items: Data_NamedItem[];
  source: SourceIdentifier;
  label: string;
}

export interface FormatLabelResolved<Key = string> extends FormatInput {
  pattern: string;
  targetKey: Key;
  label: string;
  dataSource?: SourceIdentifier;
}

export interface FormatCompiled {
  patternCompiled: string;
  label: string;
  data?: ReadonlyArray<Data_NamedItem>;
}

export interface FormatWithSource {
  pattern: string;
  dataSource?: SourceIdentifier;
}

export interface FormatInput extends FormatWithSource {
  pattern: string;
  label: string;
  dataSource?: SourceIdentifier;
}

export interface FormatResult {
  label: string;
  text: string;
}
