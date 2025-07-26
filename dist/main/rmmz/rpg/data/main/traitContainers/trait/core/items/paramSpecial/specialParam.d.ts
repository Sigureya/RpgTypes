import { Data_NamedItem, NamedItemSource } from '../../../../../../../../../libs/namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
import { SpecialParamLabels } from './labels';
export declare const defineTraitSpecialParam: (specialParam: TraitLabelWithOption<SpecialParamLabels>) => NamedItemSource;
export declare const specialParamsToArray: (specialParams: SpecialParamLabels) => Data_NamedItem[];
export declare const specialParamName: (paramIndex: number, labels: SpecialParamLabels) => string;
