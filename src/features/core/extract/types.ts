import type { SummarizedNote, SummarizedNoteValue } from "./note";
import type { ExtractedPluginParamItem } from "./plugin";
import type {
  ExtractedRawGameDataTexts,
  ExtractedTextMainDataFinal,
  ExtractedEventDataBundle,
  ExtractedSystemTexts,
} from "./text";

export interface RawGameDataNoteNormalization {
  nonTextNoteKeys: Set<string>;
  data: ExtractedRawGameDataTexts;
  dataNoteSummary: SummarizedNote<SummarizedNoteValue>[];
  mapNoteSummary: SummarizedNote<SummarizedNoteValue>[];
}

export interface ExtractedTextFinalWithNotes<UUID>
  extends ExtractedTextMainDataFinal<UUID>, ExtractedEventDataBundle<UUID> {
  noteSummaries: SummarizedNote<SummarizedNoteValue>[];
  system: ExtractedSystemTexts<UUID>;
  pluginParams: ExtractedPluginParamItem<UUID>[];
}
