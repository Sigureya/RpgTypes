import { SourceIdentifierBase } from '../../../../../../../../libs';
export interface SourceID_Trait<Kind extends string> extends SourceIdentifierBase<{
    author: "rmmz";
    module: "trait";
}> {
    kind: Kind;
    author: "rmmz";
    module: "trait";
}
export type SourceId_TraitRegularParam = SourceID_Trait<"params">;
export type SourceId_TraitExtraParam = SourceID_Trait<"xparams">;
export type SourceId_TraitSpecialParam = SourceID_Trait<"sparams">;
export type SourceId_TraitCollaps = SourceID_Trait<"collaps">;
export type SourceId_TraitPartyAbility = SourceID_Trait<"partyAbility">;
export type SourceId_TraitSpecialFlag = SourceID_Trait<"sflag">;
