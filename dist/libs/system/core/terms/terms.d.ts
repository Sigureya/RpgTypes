import { Data_NamedItem } from '../../../namedItemSource';
import { System_ParamNames } from '../../subset';
import { SystemLabels_TermsParamNames, Terms_ParamNamesArray } from './paramArray';
export declare const makeParamNamesArray: (param: Partial<SystemLabels_TermsParamNames>) => Terms_ParamNamesArray;
export declare const getParamNames: (system: System_ParamNames) => Data_NamedItem[];
