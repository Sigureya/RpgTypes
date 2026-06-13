import { AssetFilesBundle, RawGameDataNullableSystem } from '../../../fileio';
import { PluginParamExtractionOutput } from '@sigureya/rmmz-plugin-schema';
import { SystemKinds, RmmzTextPropertys, TextCommandParameter, EventContainerExtractor } from './text';
import { ExtractedTextFinalWithNotes } from './types';
export declare const buildExtractResult: <UUID>(bundle: AssetFilesBundle & {
    data: RawGameDataNullableSystem;
}, pluginParams: ReadonlyArray<PluginParamExtractionOutput>, kinds: SystemKinds, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
/**
 * @deprecated Use `buildExtractResult` instead. This function will be removed in a future release.
 */
export declare const buildExtractResultWithNotes: <UUID>(bundle: AssetFilesBundle & {
    data: RawGameDataNullableSystem;
}, pluginParams: ReadonlyArray<PluginParamExtractionOutput>, kinds: SystemKinds, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
