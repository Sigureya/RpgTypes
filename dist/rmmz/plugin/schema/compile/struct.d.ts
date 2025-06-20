import { CompileResult } from './core/kinds/compileLog';
import { PluginCompileOptions, PluginMeta } from './core/kinds/compileOption';
import { PluginCommand, PluginStruct } from './core/kinds/plugin';
export declare const compilePluginCommand: <T extends object>(titles: PluginMeta, { args, command }: PluginCommand<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
export declare const compilePluginStruct: <T extends object>(tiles: PluginMeta, { params, struct: structName }: PluginStruct<T>, options: Partial<PluginCompileOptions>) => CompileResult<T>;
