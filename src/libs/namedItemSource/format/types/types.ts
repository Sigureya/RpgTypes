import type { SourceIdentifier } from "./sourceIdentifier";

export interface Data_NamedItem {
  id: number; // 一意の識別子
  name: string; // 名前
}

export interface NamedItemSource {
  items: Data_NamedItem[];
  source: SourceIdentifier;
  label: string;
}

// export interface FormatLabelDraft {
//   format: string;
//   label: string;
//   dataSource?: SourceIdentifier;
// }

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
