import type { DomainLabel } from "@RpgTypes/templates";
import type {
  DamageLabels,
  DataLabels,
  ItemEffectLabelSet,
  TraitLabelSet,
} from "./data";

export interface RpgLabels {
  data: DataLabels;
  traits: DomainLabel<TraitLabelSet>;
  itemEffect: DomainLabel<ItemEffectLabelSet>;
  damage: DomainLabel<DamageLabels>;
}
