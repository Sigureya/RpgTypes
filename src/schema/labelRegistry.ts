import type { GlobalLabel } from "./labelUtils/";
import type { RpgLabels } from "./rpgLabels";

export interface LabelRegistry {
  global: GlobalLabel;
  rpg: RpgLabels;
}

/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
