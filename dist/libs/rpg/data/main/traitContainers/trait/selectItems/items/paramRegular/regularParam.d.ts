import { Data_NamedItem, NamedItemSource, SourceIdentifier } from '../../../../../../../../namedItemSource';
import { RegularParamLabels } from './labels';
import { TraitLabelWithOption } from '../traitLabel';
export declare const regularParamSourceId: () => SourceIdentifier;
export declare const defineTraitRegularParam: (param: TraitLabelWithOption<RegularParamLabels>) => NamedItemSource;
export declare const regularParamsToArray: (param: RegularParamLabels) => Data_NamedItem[];
export declare const regularParamName: (paramIndex: number, labels: RegularParamLabels) => string;
