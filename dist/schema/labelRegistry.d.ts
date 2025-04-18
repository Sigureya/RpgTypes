import { RpgLabels } from './data';
import { GlobalLabel } from './labelUtils/';
export interface LabelRegistry {
    global: GlobalLabel;
    rpg: RpgLabels;
}
/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
