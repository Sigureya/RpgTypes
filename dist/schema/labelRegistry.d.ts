import { RpgLabels } from './data';
import { GlobalLabel } from './globalLabels';
export interface LabelRegistry {
    global: GlobalLabel;
    rpg: RpgLabels;
}
/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
