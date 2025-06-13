import {
  DEFAULT_DAMAGE_LABELS,
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
  LABEL_SET_ITEM_EFFECT,
} from "./data";
import type { LabelRegistry } from "./labelRegistry";
import { DEFAULT_GLOBAL_LABELS } from "./labels";

export const labelsRegistry = () => {
  return {
    rpg: {
      damage: DEFAULT_DAMAGE_LABELS,
      data: LABEL_SET_DATA,
      traits: LABEL_SET_TRAIT,
      itemEffect: LABEL_SET_ITEM_EFFECT,
    },
    global: DEFAULT_GLOBAL_LABELS,
  } satisfies LabelRegistry;
};
