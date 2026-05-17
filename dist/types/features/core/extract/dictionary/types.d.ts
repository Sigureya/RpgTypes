import { RawGameData } from '../../../../fileio';
import { KeyValuePair, KeyValuePairEx } from '../../../../libs';
import { NormalizedEventCommand } from '../../../../rmmz';
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
export interface DictionaryNormalizationResult {
    errorItems: KeyValuePair[];
    items: KeyValuePair[];
}
