import { PrimitiveStructParams } from './objectStruct';
import { PrimitiveParam, StructParam } from './paramUnion';
import { PluginParamForbiddenTypes } from './pluginSchemaType';
export interface PluginCommandType {
    command: string;
    desc?: string;
    text?: string;
    args: Record<string, PrimitiveParam | PluginParamForbiddenTypes>;
}
export interface PluginCommandTypeEx<T extends object> extends PluginCommandType {
    command: string;
    desc?: string;
    text?: string;
    args: PrimitiveStructParams<T>;
}
export interface PluginCommand<T extends object> {
    command: string;
    desc?: string;
    text?: string;
    args: {
        [K in keyof T]: StructParam;
    };
}
