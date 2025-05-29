import { Data_NamedItem } from '../../../../../entitys';
import { ExtraParamLabels } from './labels';
import { SourceIdentifier } from '../../../../../../../../namedItemSource';
export declare const extraParamSourceId: () => SourceIdentifier;
export declare const extraParamsToArray: (xparam: ExtraParamLabels) => Data_NamedItem[];
export declare const extraParamName: (paramIndex: number, labels: ExtraParamLabels) => string;
