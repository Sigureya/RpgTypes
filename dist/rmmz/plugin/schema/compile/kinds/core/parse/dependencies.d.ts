export interface PluginDependencies {
    base: string[];
    orderBefore: string[];
    orderAfter: string[];
}
export declare const addBasePlugin: (dep: PluginDependencies, base: string) => PluginDependencies;
export declare const addOrderBefore: (dep: PluginDependencies, order: string) => PluginDependencies;
export declare const addOrderAfter: (dep: PluginDependencies, order: string) => PluginDependencies;
