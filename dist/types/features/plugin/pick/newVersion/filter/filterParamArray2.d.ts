import { ParamKinds, PluginParam } from '../../../../../rmmz/plugin';
import { PluginParamGroups } from './types';
export interface ParamFilterCriteria {
    structNames: ReadonlySet<string>;
    singleKinds: ReadonlySet<ParamKinds>;
    arrayKinds: ReadonlySet<`${ParamKinds}[]`>;
}
export declare const filterParams2: (params2: ReadonlyArray<PluginParam>, { arrayKinds, singleKinds, structNames }: ParamFilterCriteria) => PluginParamGroups;
