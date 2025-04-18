import type {
  ActorLabels,
  ArmorLabels,
  ClassLabels,
  CollapsOptionLabels,
  DamageLabels,
  EnemyLabels,
  ExtraParamLabels,
  ItemLabels,
  PartyAbilityOptionLabels,
  RegularParamLabels,
  SkillLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
  StateLabels,
  UsableItemLabels,
  WeaponLabels,
} from "./data";

import type { DomainLabel } from "./labelUtils";

export interface RpgLabels {
  paramSpecial: DomainLabel<SpecialParamLabels>;
  paramExtra: DomainLabel<ExtraParamLabels>;
  paramRegular: DomainLabel<RegularParamLabels>;
  partyAbility: DomainLabel<PartyAbilityOptionLabels>;
  collaps: DomainLabel<CollapsOptionLabels>;
  specialFlag: DomainLabel<SpecialFlagOptions>;
  actor: DomainLabel<ActorLabels>;
  weapon: DomainLabel<WeaponLabels>;
  armor: DomainLabel<ArmorLabels>;
  class: DomainLabel<ClassLabels>;
  state: DomainLabel<StateLabels>;
  enemy: DomainLabel<EnemyLabels>;
  usableItem: DomainLabel<UsableItemLabels>;
  item: DomainLabel<ItemLabels>;
  skill: DomainLabel<SkillLabels>;
  damage: DomainLabel<DamageLabels>;
}
