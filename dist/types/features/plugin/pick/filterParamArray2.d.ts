import { ParamKinds, PluginParam, PrimitiveParam } from '../../../rmmz/plugin';
import { PluginParamGroups } from './filter2Type2';
export interface ParamFilterCriteria {
    structNames: ReadonlySet<string>;
    singleKinds: ReadonlySet<ParamKinds>;
    arrayKinds: ReadonlySet<`${ParamKinds}[]`>;
}
export declare const filterParams2: (params2: ReadonlyArray<PluginParam<PrimitiveParam>>, { arrayKinds, singleKinds, structNames }: ParamFilterCriteria) => PluginParamGroups;
