import type { LabelRegistry } from "./labelRegistry";
import { DEFAULT_GLOBAL_LABELS } from "./labelUtils";
import {
  DEFAULT_DAMAGE_LABELS,
  LABEL_SET_ITEM_EFFECT,
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
} from "./data";

export const LABEL_REGISTRY_JP = {
  rpg: {
    damage: DEFAULT_DAMAGE_LABELS,
    data: LABEL_SET_DATA,
    traits: LABEL_SET_TRAIT,
    itemEffect: LABEL_SET_ITEM_EFFECT,
  },
  global: DEFAULT_GLOBAL_LABELS,
} as const satisfies LabelRegistry;
