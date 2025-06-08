export type SourceIdentifier = {
  author: string; // 作成者・提供元
  module: string; // モジュール名（plugin/mod）
  kind: string; // 種別（例: weapon, item）
};

export interface SourceIdentifierBase<
  T extends { author: string; module: string }
> extends SourceIdentifier {
  author: T["author"];
  module: T["module"];
}
