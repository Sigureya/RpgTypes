import { FileReadBundle } from '../../../fileio';
import { PluginParamExtractionOutput } from '@sigureya/rmmz-plugin-schema';
import { SystemKinds, RmmzTextPropertys, TextCommandParameter, EventContainerExtractor } from './text';
import { ExtractedTextFinalWithNotes } from './types';
export { buildExtractResult as buildExtractResultWithNotes };
export declare const buildExtractResult: <UUID>(bundle: FileReadBundle, pluginParams: ReadonlyArray<PluginParamExtractionOutput>, kinds: SystemKinds, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: EventContainerExtractor) => ExtractedTextFinalWithNotes<UUID>;
