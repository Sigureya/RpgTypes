import type { GlobalLabel, TraitLabelSet } from "@RpgTypes/rpg";
import type { NamedItemSource } from "src/namedItemSource";
import {
  defineTraitRegularParam,
  defineTraitExtraParam,
  defineTraitSpecialParam,
  defineTraitCollapseType,
  defineTraitSpecialFlag,
  defineTraitPartyAbility,
} from "./items";

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
