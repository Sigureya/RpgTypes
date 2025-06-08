import type { SourceIdentifier } from "src/namedItemSource";

export interface TraitSourceId<Kind extends string> extends SourceIdentifier {
  author: "rmmz";
  module: "trait";
  kind: Kind;
}

export type TraitSourceIdRegularParam = TraitSourceId<"params">;
export type TraitSourceIdXParam = TraitSourceId<"xparam">;
export type TraitSourceIdSpecialParam = TraitSourceId<"sparam">;
export type TraitSourceIdStateRate = TraitSourceId<"stateRate">;
