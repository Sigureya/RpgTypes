import { PluginCommand, PluginStructEx } from '../../rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx';
import { PluginMeta, PluginCompileOptions } from './scala/meta/compileOption';
export declare const compilePluginCommand: <T extends object>(titles: PluginMeta, { args, command }: PluginCommand<T>, options: Partial<PluginCompileOptions>) => {
    schema: {
        type: "object";
        title: string;
        properties: Record<string, import('./scala/meta/anyParamSchema').AnyParamSchema>;
        required: string[];
        additionalProperties: false;
    };
    logs: import('./compileLog').StructCompileLog<import('../../rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx').StructParam>[];
};
export declare const compilePluginStruct: <T extends object>(tiles: PluginMeta, { params, struct: structName }: PluginStructEx<T>, options: Partial<PluginCompileOptions>) => {
    schema: {
        type: "object";
        title: string;
        properties: Record<string, import('./scala/meta/anyParamSchema').AnyParamSchema>;
        required: string[];
        additionalProperties: false;
    };
    logs: import('./compileLog').StructCompileLog<import('../../rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx').StructParam>[];
};
