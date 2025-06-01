import { ExtraParamLabels } from './labels';
import { Data_NamedItem2, NamedItemSource, SourceIdentifier } from '../../../../../../../../schema/namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
export declare const extraParamSourceId: () => SourceIdentifier;
export declare const defineTraitExtraParam: (xparam: TraitLabelWithOption<ExtraParamLabels>) => NamedItemSource;
export declare const extraParamsToArray: (xparam: ExtraParamLabels) => Data_NamedItem2[];
export declare const extraParamName: (paramIndex: number, labels: ExtraParamLabels) => string;
