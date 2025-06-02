import { SpecialParamLabels } from './labels';
import { Data_NamedItem, NamedItemSource, SourceIdentifier } from '../../../../../../../../namedItemSource';
import { TraitLabelWithOption } from '../traitLabel';
export declare const specialParamSourceId: () => SourceIdentifier;
export declare const defineTraitSpecialParam: (specialParam: TraitLabelWithOption<SpecialParamLabels>) => NamedItemSource;
export declare const specialParamsToArray: (specialParams: SpecialParamLabels) => Data_NamedItem[];
export declare const specialParamName: (paramIndex: number, labels: SpecialParamLabels) => string;
