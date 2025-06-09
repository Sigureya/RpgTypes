import {
  defineTraitRegularParam,
  defineTraitExtraParam,
  defineTraitSpecialParam,
  defineTraitCollapseType,
  defineTraitSpecialFlag,
  defineTraitPartyAbility,
} from "./items";
import type { NamedItemSource } from "src/namedItemSource";
import type { GlobalLabel, TraitLabelSet } from "src/rpg";

export const defineTraitItems = (
  set: TraitLabelSet,
  global: Pick<GlobalLabel, "normal">
): NamedItemSource[] => {
  return [
    defineTraitRegularParam(set.regularParam),
    defineTraitExtraParam(set.extraParam),
    defineTraitSpecialParam(set.specialParam),
    defineTraitCollapseType(set.collaps, global),
    defineTraitSpecialFlag(set.specialFlag),
    defineTraitPartyAbility(set.partyAbility),
  ];
};
