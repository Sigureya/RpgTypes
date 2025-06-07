import type { Data_NamedItem } from "./namedItem";
import type { FormatCompiledSimple } from "./rule";
import type { SourceIdentifier } from "./rule";

export interface NamedItemSource {
  items: Data_NamedItem[];
  source: SourceIdentifier;
  label: string;
}

export interface FormatLabelResolved<KindKey> extends FormatInput {
  pattern: string;
  kindId: KindKey;
  label: string;
  dataSource?: SourceIdentifier;
}

export interface FormatCompiled extends FormatCompiledSimple {
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
