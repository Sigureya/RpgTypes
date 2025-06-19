import { KindOfStruct, PluginStruct, CompileResult, PluginCommand } from './kinds';
import { PluginTitles } from './kinds/compileOption';
export declare const compilePluginCommand: <T extends object>({ moduleName }: PluginTitles, { args, commandName }: PluginCommand<T>, typeDefs: Record<string, KindOfStruct<object>>) => CompileResult<T>;
export declare const compilePluginStruct: <T extends object>({ moduleName }: PluginTitles, { params, structName }: PluginStruct<T>, typeDefs: Record<string, KindOfStruct<object>>) => CompileResult<T>;
