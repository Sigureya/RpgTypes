import { StructParam } from './paramUnion';
import { PrimitiveStructParams } from './pluginSchemaType';
export interface PluginCommandType<T extends object> {
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
