import { AudioFilesSet, ImageFilesSet } from '../../../fileio';
import { MapFileInfo } from '../../../rmmz';
import { OtherFilesSet, SummarizedNote } from './note/types';
import { ExtractedMapTexts, TextPluginCommandParameter } from './text/eventCommand';
import { ExtractedDataBundle } from './text/mainData/types';
export declare const summarizeNoteKindsFromMapFiles: <Command extends TextPluginCommandParameter>(mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => SummarizedNote[];
export declare const normalizeNoteFromMapFiles: <Command extends TextPluginCommandParameter>(mapList: readonly MapFileInfo<ExtractedMapTexts<Command>>[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => MapFileInfo<ExtractedMapTexts<Command>>[];
export declare const nonTextNoteKeys: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => Set<string>;
export declare const normalizeBundleNoteTexts: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => ExtractedDataBundle;
