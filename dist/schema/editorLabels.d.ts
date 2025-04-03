import { ExtraParamLabels, RegularParamLabels, SpecialParamLabels } from './data';
import { GlobalLabel } from './globalLables';
export interface EditorLabels {
    global: GlobalLabel;
    params: {
        regurelar: RegularParamLabels;
        extra: ExtraParamLabels;
        special: SpecialParamLabels;
    };
}
