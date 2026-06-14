import { TextFileEntry } from '../../../../fileio';
import { SystemTexts } from '../../../../rmmz';
import { PluginManifestData, PluginParamsRecord, PluginManagerTemplate } from '@sigureya/rmmz-plugin-schema';
import { RuntimePluginBundleOptions, PLUGIN_NAME_HONYAKU_EX, PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY, PLUGIN_COMMAND_HONYAKU_SETUP_SYSTEM_TEXTS } from './manifest';
import { RuntimeDictionaryData, RuntimeDictionaryDataWithSystem } from './types';
export type Rmmz_PluginManager_Translation = PluginManagerTemplate<typeof PLUGIN_NAME_HONYAKU_EX, typeof PLUGIN_COMMAND_HONYAKU_SETUP_DICTIONARY, RuntimeDictionaryData<string>> & PluginManagerTemplate<typeof PLUGIN_NAME_HONYAKU_EX, typeof PLUGIN_COMMAND_HONYAKU_SETUP_SYSTEM_TEXTS, SystemTexts>;
export declare const pluginManifestFiles: (data: RuntimeDictionaryDataWithSystem<string>, options?: RuntimePluginBundleOptions) => TextFileEntry;
export declare const createPluginSnapshotSetupScript: (params: ReadonlyArray<PluginManifestData>) => string;
export declare const createPluginManifest2: (options: RuntimePluginBundleOptions) => PluginParamsRecord[];
