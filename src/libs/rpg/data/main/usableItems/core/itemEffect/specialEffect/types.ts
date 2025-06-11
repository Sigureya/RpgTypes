import type { SourceIdentifier } from "src/namedItemSource";

export interface SpecialEffectLabels {
  escape: string;
}

export interface SourceId_ItemEffectSpecial extends SourceIdentifier {
  module: "effect";
  author: "rmmz";
  kind: "special";
}
