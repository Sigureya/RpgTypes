import { PluginDependencies } from './types/pluginDependencies';
export declare const addBasePlugin: (dep: PluginDependencies, base: string) => PluginDependencies;
export declare const addOrderBefore: (dep: PluginDependencies, order: string) => PluginDependencies;
export declare const addOrderAfter: (dep: PluginDependencies, order: string) => PluginDependencies;
