import { MapFileInfo } from '../../../rmmz';
import { AudioFilesSet, ImageFilesSet, OtherFilesSet, SummarizedNote } from './note/types';
import { ExtractedMapTexts, PluginCommandMzParameter } from './text/eventCommand';
import { ExtractedDataBundle } from './text/mainData/types';
export declare const summarizeNoteKindsFromMapFiles: <Command extends PluginCommandMzParameter>(mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => SummarizedNote[];
export declare const normalizeNoteFromMapFiles: <Command extends PluginCommandMzParameter>(mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => MapFileInfo<ExtractedMapTexts<Command>>[];
export declare const nonTextNoteKeys: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => Set<string>;
export declare const normalizeBundleNoteTexts: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => ExtractedDataBundle;
