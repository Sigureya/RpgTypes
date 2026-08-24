import type { DomainLabel } from "@RpgTypes/libs";

import type { Data_CommonEventUnknown } from "./event";
import type {
  WeaponLabels,
  ArmorLabels,
  EnemyLabels,
  ActorLabels,
  ClassLabels,
  StateLabels,
  ItemLabels,
  SkillLabels,
  UsableItemLabels,
} from "./data/main";

export interface DataLabels {
  weapon: DomainLabel<WeaponLabels>;
  armor: DomainLabel<ArmorLabels>;
  enemy: DomainLabel<EnemyLabels>;
  actor: DomainLabel<ActorLabels>;
  class: DomainLabel<ClassLabels>;
  state: DomainLabel<StateLabels>;
  item: DomainLabel<ItemLabels>;
  skill: DomainLabel<SkillLabels>;
  //  equipItem: EquipItemLabels;
  usableItem: DomainLabel<UsableItemLabels>;
  commonEvent: DomainLabel<Record<keyof Data_CommonEventUnknown, string>>;
}
