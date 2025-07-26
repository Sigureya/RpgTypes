import type { DomainLabel } from "src/libs/templates/domainLabel";
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
