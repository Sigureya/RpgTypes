import { ExtractedTextItem } from '../../../libs';
import { SummarizedNote, SummarizedNoteValue } from './note';
import { ExtractedPluginParamItem } from './plugin';
import { ExtractedRawGameDataTexts, ExtractedTextMainDataFinal, ExtractedEventDataBundle, ExtractedSystemTexts } from './text';
export interface RawGameDataNoteNormalization {
    nonTextNoteKeys: Set<string>;
    data: ExtractedRawGameDataTexts;
    dataNoteSummary: SummarizedNote<SummarizedNoteValue>[];
    mapNoteSummary: SummarizedNote<SummarizedNoteValue>[];
}
export interface ExtractedTextFinalWithNotes<UUID> extends ExtractedTextMainDataFinal<UUID>, ExtractedEventDataBundle<UUID> {
    noteSummaries: SummarizedNote<SummarizedNoteValue>[];
    system: ExtractedSystemTexts<UUID>;
    pluginParams: ExtractedPluginParamItem<UUID>[];
    speakers: ExtractedTextItem<UUID>[];
}
