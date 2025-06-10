import type { DomainLabel } from "@RpgTypes/templates";
import type { Data_CommonEvent } from "src/rpg";
import type {
  WeaponLabels,
  ArmorLabels,
  EnemyLabels,
  ActorLabels,
  ClassLabels,
  StateLabels,
} from "./traitContainers";
import type { ItemLabels, SkillLabels, UsableItemLabels } from "./usableItems";

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
  commonEvent: DomainLabel<Record<keyof Data_CommonEvent, string>>;
}
