import type { DataLabels } from "./dataLabels";
import {
  LABELS_DATA_ACTOR,
  LABELS_DATA_ARMOR,
  LABELS_DATA_CLASS,
  LABELS_DATA_ENEMY,
  LABELS_DATA_STATE,
  LABELS_DATA_WEAPON,
} from "./traitContainers";
import {
  DEFAULT_ITEM_LABELS,
  DEFAULT_SKILL_LABELS,
  DEFAULT_USABLE_ITEM_LABELS,
} from "./usableItems";

export const LABEL_SET_DATA = {
  actor: LABELS_DATA_ACTOR,
  class: LABELS_DATA_CLASS,
  armor: LABELS_DATA_ARMOR,
  enemy: LABELS_DATA_ENEMY,
  item: DEFAULT_ITEM_LABELS,
  skill: DEFAULT_SKILL_LABELS,
  state: LABELS_DATA_STATE,
  weapon: LABELS_DATA_WEAPON,
  usableItem: DEFAULT_USABLE_ITEM_LABELS,
} as const satisfies DataLabels;
