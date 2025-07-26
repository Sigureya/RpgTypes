import { Data_NamedItem, NamedItemSource } from '../../../../../../../../../libs';
import { TraitLabelWithOption } from '../traitLabel';
import { RegularParamLabels } from './labels';
export declare const defineTraitRegularParam: (param: TraitLabelWithOption<RegularParamLabels>) => NamedItemSource;
export declare const regularParamsToArray: (param: RegularParamLabels) => Data_NamedItem[];
export declare const regularParamName: (paramIndex: number, labels: RegularParamLabels) => string;
