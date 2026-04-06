import { AudioFilesSet, ImageFilesSet, OtherFilesSet } from './note/types';
import { ExtractedMapTexts, PluginCommandMzParameter } from './text/eventCommand';
import { ExtractedDataBundle } from './text/mainData/types';
export declare const normalizeMapNotes: <Command extends PluginCommandMzParameter>(map: readonly ExtractedMapTexts<Command>[], audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => ExtractedMapTexts<Command>[];
export declare const nonTextNoteKeys: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => Set<string>;
export declare const normalizeBundleNoteTexts: (bundle: ExtractedDataBundle, audioFiles: AudioFilesSet, imageFiles: ImageFilesSet, other: OtherFilesSet) => ExtractedDataBundle;
