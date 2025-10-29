import { PluginParam } from './arraySchemaTypes';
import { StructRefParam, StructArrayRefParam } from './primitiveParams';
export declare const isStructAttr: (param: PluginParam) => param is PluginParam<StructRefParam | StructArrayRefParam>;
