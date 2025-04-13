import type {
  ActorLabels,
  EnemyLabels,
  ItemLabels,
  ItemCodeLabels,
  SkillLabels,
  WeaponLabels,
  ArmorLabels,
  NamedItemLabels,
  ClassLabels,
  StateLabels,
  TraitLabels,
  UsableItemLabels,
  DamageLabels,
} from "./main";

export interface RpgLabels {
  actor: ActorLabels;
  enemy: EnemyLabels;
  item: ItemLabels;
  itemCode: ItemCodeLabels;
  skill: SkillLabels;
  weapon: WeaponLabels;
  armor: ArmorLabels;
  namedItem: NamedItemLabels;
  class: ClassLabels;
  state: StateLabels;
  usableItem: UsableItemLabels;
  damage: DamageLabels;

  trait: TraitLabels;
  itemEffect: ItemCodeLabels;
}
