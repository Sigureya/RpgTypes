import { RawGameData } from '../../../fileio';
import { KeyValuePairEx } from '../../../libs';
import { NormalizedEventCommand } from '../../../rmmz';
import { SummarizedNote, SummarizedNoteValue } from './note';
import { ExtractedRawGameDataTexts, ExtractedTextMainDataFinal, ExtractedEventDataBundle, SystemTexts } from './text';
export interface RawGameDataNoteNormalization {
    nonTextNoteKeys: Set<string>;
    data: ExtractedRawGameDataTexts;
    dataNoteSummary: SummarizedNote<SummarizedNoteValue>[];
    mapNoteSummary: SummarizedNote<SummarizedNoteValue>[];
}
export interface ExtractedTextFinalWithNotes<UUID> extends ExtractedTextMainDataFinal<UUID>, ExtractedEventDataBundle<UUID> {
    noteSummaries: SummarizedNote<SummarizedNoteValue>[];
    system: SystemTexts<UUID>;
}
export interface RuntimeDictionaryData<Hash> {
    targetNoteKeys: string[];
    textDictionary: KeyValuePairEx<Hash, string>[];
    actorTexts: KeyValuePairEx<string, Hash>[];
}
export interface RuntimeDictionary<Hash> {
    targetNoteKeys: ReadonlySet<string>;
    textDictionary: ReadonlyMap<Hash, string>;
    actorTextDictionary: ReadonlyMap<string, Hash>;
}
export interface GameDataReplaceOutput<Hash> {
    main: RawGameData<NormalizedEventCommand>;
    aux: RuntimeDictionaryData<Hash>;
}
