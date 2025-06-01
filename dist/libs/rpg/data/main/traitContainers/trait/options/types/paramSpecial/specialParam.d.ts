import { SpecialParamLabels } from './labels';
import { Data_NamedItem2, NamedItemSource, SourceIdentifier } from '../../../../../../../../schema/namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
export declare const specialParamSourceId: () => SourceIdentifier;
export declare const defineTraitSpecialParam: (specialParam: TraitLabelWithOption<SpecialParamLabels>) => NamedItemSource;
export declare const specialParamsToArray: (specialParams: SpecialParamLabels) => Data_NamedItem2[];
export declare const specialParamName: (paramIndex: number, labels: SpecialParamLabels) => string;
