import type {
  ActorLabels,
  EnemyLabels,
  ItemLabels,
  ItemEffectTypeLabels,
  SkillLabels,
  WeaponLabels,
  ArmorLabels,
  NamedItemLabels,
  ClassLabels,
  StateLabels,
  TraitLabels,
  UsableItemLabels,
  DamageLabels,
  RegularParamLabels,
  CollapsOptionLabels,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
} from "./main";

export interface RpgLabels {
  namedItem: NamedItemLabels;
  trait: TraitLabels;
  paramSpecial: SpecialParamLabels;
  paramExtra: ExtraParamLabels;
  paramRegular: RegularParamLabels;
  partyAbility: PartyAbilityOptionLabels;
  collaps: CollapsOptionLabels;
  specialFlag: SpecialFlagOptions;
  actor: ActorLabels;
  // weapon: WeaponLabels;
  // armor: ArmorLabels;
  // class: ClassLabels;
  // state: StateLabels;
  // enemy: EnemyLabels;
  // usableItem: UsableItemLabels;
  // item: ItemLabels;
  // skill: SkillLabels;
  // damage: DamageLabels;
  // itemEffect: ItemEffectTypeLabels;
}
