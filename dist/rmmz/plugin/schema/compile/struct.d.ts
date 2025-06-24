import { CompileResult } from './kinds/compileLog';
import { PluginCommand, PluginStructEx } from './kinds/core/pluginEntriesEx';
import { PluginMeta, PluginCompileOptions } from './kinds/pluginMeta/compileOption';
export declare const compilePluginCommand: <T extends object>(titles: PluginMeta, { args, command }: PluginCommand<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
export declare const compilePluginStruct: <T extends object>(tiles: PluginMeta, { params, struct: structName }: PluginStructEx<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
