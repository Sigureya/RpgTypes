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
    dictionary: KeyValuePairEx<Hash, string>[];
}
export interface ReplaceAuxiliaryData<T> {
    actorTextDictionary: KeyValuePairEx<T, string>[];
    dictionary: RuntimeDictionaryData<T>;
}
export interface GameDataReplaceOutput<Hash> {
    main: RawGameData<NormalizedEventCommand>;
    aux: ReplaceAuxiliaryData<Hash>;
}
export interface ReplaceRawDataInput {
    basicData: RawGameData<NormalizedEventCommand>;
    additionalData: ReplaceAuxiliaryData<string>;
}
