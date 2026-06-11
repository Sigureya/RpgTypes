import { TextFileEntry } from '../../../../fileio';
import { PluginManifestData, PluginParamsRecord, PluginManagerTemplate } from '@sigureya/rmmz-plugin-schema';
import { RuntimePluginBundleOptions, PLUGIN_NAME_HONYAKU_EX, PLUGIN_COMMAND_HONYAKU_SETUP } from './manifest';
import { RuntimeDictionaryData } from './types';
export type PluginManager_HonyakuEx2 = PluginManagerTemplate<typeof PLUGIN_NAME_HONYAKU_EX, typeof PLUGIN_COMMAND_HONYAKU_SETUP, RuntimeDictionaryData<string>>;
export declare const pluginManifestFiles: (data: RuntimeDictionaryData<string>, options: RuntimePluginBundleOptions) => TextFileEntry;
export declare const createPluginSnapshotSetupScript: (params: ReadonlyArray<PluginManifestData>) => string;
export declare const createPluginManifest2: (options: RuntimePluginBundleOptions) => PluginParamsRecord[];
