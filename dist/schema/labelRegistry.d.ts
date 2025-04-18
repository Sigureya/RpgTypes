import { GlobalLabel } from './labelUtils/';
import { RpgLabels2 } from './rpgLabels';
export interface LabelRegistry {
    global: GlobalLabel;
    rpg: RpgLabels2;
}
/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
