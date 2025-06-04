export interface SourceIdentifier {
  author: string; // 作成者・提供元
  module: string; // モジュール名（plugin/mod）
  kind: string; // 種別（例: weapon, item）
}

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
