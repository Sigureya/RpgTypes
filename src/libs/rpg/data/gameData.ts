import type {
  Data_Skill,
  Data_Actor,
  Data_Armor,
  Data_Class,
  Data_Enemy,
  Data_Item,
  Data_State,
  DataLabels,
  SourceId_DataSkill,
  SourceId_DataState,
  SourceId_DataActor,
  SourceId_DataArmor,
  SourceId_DataClass,
  SourceId_DataEnemy,
  SourceId_DataItem,
} from "./main";
import type { GameData } from "./gameDataTypes";
import type { NamedItemSource } from "src/namedItemSource";

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
  ];
};

const defineSkill = (
  skills: Data_Skill[],
  labels: DataLabels
): NamedItemSource => {
  return {
    label: labels.skill.domainName,
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
    label: labels.actor.domainName,
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
    label: labels.state.domainName,
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
    label: labels.armor.domainName,
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
    label: labels.class.domainName,
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
    label: labels.enemy.domainName,
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
): NamedItemSource => {
  return {
    items: items,
    label: labels.item.domainName,
    source: {
      author: "rmmz",
      module: "data",
      kind: "item",
    } satisfies SourceId_DataItem,
  };
};
