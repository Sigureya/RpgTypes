import { Data_NamedItem2, SourceIdentifier } from '../../../../../../../../schema';
import { RegularParamLabels } from './labels';
import { NamedItemSource } from '../../../../../../../../schema/namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
export declare const regularParamSourceId: () => SourceIdentifier;
export declare const defineTraitRegularParam: (param: TraitLabelWithOption<RegularParamLabels>) => NamedItemSource;
export declare const regularParamsToArray: (param: RegularParamLabels) => Data_NamedItem2[];
export declare const regularParamName: (paramIndex: number, labels: RegularParamLabels) => string;
