import type { GlobalLabel } from "./labelUtils/";
import type { RpgLabels, RpgLabels2 } from "./rpgLabels";

export interface LabelRegistry {
  global: GlobalLabel;
  rpg: RpgLabels2;
}

/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
