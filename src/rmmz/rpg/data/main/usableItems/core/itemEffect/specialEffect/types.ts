import type { SourceIdentifier } from "@RpgTypes/libs";

export interface EscapeLabel {
  escape: string;
}

export interface SourceId_ItemEffectSpecial extends SourceIdentifier {
  module: "effect";
  author: "rmmz";
  kind: "special";
}
