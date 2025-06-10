import { Data_NamedItem, NamedItemSource } from '../../../../../../../../namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
import { ExtraParamLabels } from './labels';
export declare const defineTraitExtraParam: (xparam: TraitLabelWithOption<ExtraParamLabels>) => NamedItemSource;
export declare const extraParamsToArray: (xparam: ExtraParamLabels) => Data_NamedItem[];
export declare const extraParamName: (paramIndex: number, labels: ExtraParamLabels) => string;
