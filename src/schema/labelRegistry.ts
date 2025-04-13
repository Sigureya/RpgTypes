import type { RpgLabels } from "./data";
import type { GlobalLabel } from "./globalLabels";

export interface LabelRegistry {
  global: GlobalLabel;
  rpg: RpgLabels;
}

/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
