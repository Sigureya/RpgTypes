import { GlobalLabel } from './labels';
import { RpgLabels } from './rpgLabels';
export interface LabelRegistry {
    global: GlobalLabel;
    rpg: RpgLabels;
}
/**
 * @deprecated
 */
export type EditorLabels = LabelRegistry;
