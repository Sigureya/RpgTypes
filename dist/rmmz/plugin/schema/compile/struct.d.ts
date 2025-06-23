import { CompileResult } from './kinds/compileLog';
import { PluginCommand, PluginStruct } from './kinds/plugin';
import { PluginMeta, PluginCompileOptions } from './kinds/pluginMeta/compileOption';
export declare const compilePluginCommand: <T extends object>(titles: PluginMeta, { args, command }: PluginCommand<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
export declare const compilePluginStruct: <T extends object>(tiles: PluginMeta, { params, struct: structName }: PluginStruct<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
