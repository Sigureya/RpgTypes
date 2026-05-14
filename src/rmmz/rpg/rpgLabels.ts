import type { DomainLabel } from "@RpgTypes/libs";
import type {
  DataLabels,
  TraitLabelSet,
  ItemEffectLabelSet,
  DamageLabels,
} from "./data";

export interface RpgLabels {
  data: DataLabels;
  traits: DomainLabel<TraitLabelSet>;
  itemEffect: DomainLabel<ItemEffectLabelSet>;
  damage: DomainLabel<DamageLabels>;
}
