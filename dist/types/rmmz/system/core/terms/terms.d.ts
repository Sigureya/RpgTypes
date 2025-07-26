import { Data_NamedItem } from '../../../../libs/namedItemSource';
import { SystemLabels_TermsParamNames, Terms_ParamNamesArray } from './core/paramArray/types';
import { System_Terms_Params } from './types';
export declare const makeParamNamesArray: (param: Partial<SystemLabels_TermsParamNames>) => Terms_ParamNamesArray;
export declare const getParamNames: (system: System_Terms_Params) => Data_NamedItem[];
