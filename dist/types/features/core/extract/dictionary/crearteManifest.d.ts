import { TextFileEntry } from '../../../../fileio';
import { PluginManifestData, PluginParamsRecord, PluginManagerTemplate } from '@sigureya/rmmz-plugin-schema';
import { RuntimePluginBundleOptions, PLUGIN_NAME_HONYAKU_EX, PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY } from './manifest';
import { RuntimeDictionaryData, RuntimeDictionaryDataWithSystem } from './types';
export interface Rmmz_PluginManager_Translation extends PluginManagerTemplate<typeof PLUGIN_NAME_HONYAKU_EX, typeof PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY, RuntimeDictionaryData<string>> {
}
export declare const pluginManifestFiles: (data: RuntimeDictionaryDataWithSystem<string>, options?: RuntimePluginBundleOptions) => TextFileEntry;
export declare const createPluginSnapshotSetupScript: (params: ReadonlyArray<PluginManifestData>) => string;
export declare const createPluginManifest2: (options: RuntimePluginBundleOptions) => PluginParamsRecord[];
