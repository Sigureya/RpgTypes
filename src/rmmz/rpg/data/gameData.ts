import type { NamedItemSource } from "@RpgTypes/libs";
import type { Data_CommonEventLike } from "./event";
import type { GameData } from "./gameDataTypes";
import type {
  DataLabels,
  Data_Skill,
  Data_Actor,
  Data_State,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_Weapon,
} from "./main";
import type {
  SourceId_DataSkill,
  SourceId_DataState,
  SourceId_DataActor,
  SourceId_DataArmor,
  SourceId_DataClass,
  SourceId_DataEnemy,
  SourceId_DataItem,
  SourceId_DataWeapon,
  SourceId_DataCommonEvent,
} from "./main/sourceIdTypes";

export const defineGameDataSources = (
  data: GameData,
  dataLabels: DataLabels
): NamedItemSource[] => {
  return [
    defineSkill(data.skills, dataLabels),
    defineActor(data.actors, dataLabels),
    defineState(data.states, dataLabels),
    defineArmor(data.armors, dataLabels),
    defineClass(data.classes, dataLabels),
    defineEnemy(data.enemies, dataLabels),
    defineItem(data.items, dataLabels),
    defineWeapon(data.weapons, dataLabels),
    defineCommonEvent(data.commonEvents, dataLabels),
  ];
};

const defineSkill = (
  skills: Data_Skill[],
  labels: DataLabels
): NamedItemSource => {
  return {
    label: labels.skill.title,
    items: skills,
    source: {
      author: "rmmz",
      module: "data",
      kind: "skill",
    } satisfies SourceId_DataSkill,
  };
};

const defineActor = (
  actors: Data_Actor[],
  labels: DataLabels
): NamedItemSource => {
  return {
    items: actors,
    label: labels.actor.title,
    source: {
      author: "rmmz",
      module: "data",
      kind: "actor",
    } satisfies SourceId_DataActor,
  };
};

const defineState = (
  states: Data_State[],
  labels: DataLabels
): NamedItemSource => {
  return {
    items: states,
    label: labels.state.title,
    source: {
      author: "rmmz",
      module: "data",
      kind: "state",
    } satisfies SourceId_DataState,
  };
};

const defineArmor = (
  armors: Data_Armor[],
  labels: DataLabels
): NamedItemSource => {
  return {
    items: armors,
    label: labels.armor.title,
    source: {
      author: "rmmz",
      kind: "armor",
      module: "data",
    } satisfies SourceId_DataArmor,
  };
};

const defineClass = (
  classes: Data_Class[],
  labels: DataLabels
): NamedItemSource => {
  return {
    items: classes,
    label: labels.class.title,
    source: {
      author: "rmmz",
      module: "data",
      kind: "class",
    } satisfies SourceId_DataClass,
  };
};

const defineEnemy = (
  enemies: Data_Enemy[],
  labels: DataLabels
): NamedItemSource => {
  return {
    items: enemies,
    label: labels.enemy.title,
    source: {
      author: "rmmz",
      module: "data",
      kind: "enemy",
    } satisfies SourceId_DataEnemy,
  };
};

const defineItem = (
  items: Data_Item[],
  labels: DataLabels
): NamedItemSource => ({
  items: items,
  label: labels.item.title,
  source: {
    author: "rmmz",
    module: "data",
    kind: "item",
  } satisfies SourceId_DataItem,
});
const defineWeapon = (
  weapons: Data_Weapon[],
  labels: DataLabels
): NamedItemSource => ({
  items: weapons,
  label: labels.weapon.title,
  source: {
    author: "rmmz",
    module: "data",
    kind: "weapon",
  } satisfies SourceId_DataWeapon,
});

const defineCommonEvent = (
  commonEvents: Data_CommonEventLike[],
  labels: DataLabels
): NamedItemSource => ({
  items: commonEvents,
  label: labels.commonEvent.title,
  source: {
    author: "rmmz",
    module: "data",
    kind: "common_event",
  } satisfies SourceId_DataCommonEvent,
});
