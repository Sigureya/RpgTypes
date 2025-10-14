import { ParamKinds, PluginSchemaArray, PluginCommandSchemaArray } from '../../../../rmmz/plugin';
import { ParamFilterCriteria } from './filter/filterParamArray2';
import { PluginParamGroups } from './filter/types';
export declare const ppp: <K extends ParamKinds>(plugin: PluginSchemaArray, kinds: ReadonlyArray<K>) => {
    paramGroup: PluginParamGroups<import('../../../../rmmz/plugin').PrimitiveParam>;
    commandGroup: PluginParamGroups<import('../../../../rmmz/plugin').PrimitiveParam>[];
};
export declare const filterPluginCommand: (commandList: ReadonlyArray<PluginCommandSchemaArray>, criteria: ParamFilterCriteria) => PluginParamGroups[];
