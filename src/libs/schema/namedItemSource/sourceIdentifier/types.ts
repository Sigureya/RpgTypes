export interface SourceIdentifier {
  author: string; // 作成者・提供元
  module: string; // モジュール名（plugin/mod）
  kind: string; // 種別（例: weapon, item）
}

export interface Data_NamedItem2 {
  id: number; // 一意の識別子
  name: string; // 名前
}

export interface NamedItemSource {
  items: Data_NamedItem2[];
  source: SourceIdentifier;
  label: string;
}
