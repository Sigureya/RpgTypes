import { RawGameData } from '../../../../fileio';
import { KeyValuePair, KeyValuePairEx } from '../../../../libs';
import { SystemTexts, NormalizedEventCommand } from '../../../../rmmz';
export interface RuntimeDictionaryData<Hash> {
    targetNoteKeys: string[];
    textDictionary: KeyValuePairEx<Hash, string>[];
    actorTexts: KeyValuePairEx<string, Hash>[];
}
export interface RuntimeDictionaryDataWithSystem<Hash> {
    targetNoteKeys: string[];
    textDictionary: KeyValuePairEx<Hash, string>[];
    actorTexts: KeyValuePairEx<string, Hash>[];
    systemTexts: SystemTexts;
}
export interface RuntimeDictionary<Hash> {
    targetNoteKeys: ReadonlySet<string>;
    textDictionary: ReadonlyMap<Hash, string>;
    actorTextDictionary: ReadonlyMap<string, Hash>;
}
export interface GameDataReplaceOutput<Hash> {
    main: RawGameData<NormalizedEventCommand>;
    originLike: RuntimeDictionaryDataWithSystem<Hash>;
    aux: RuntimeDictionaryDataWithSystem<Hash>;
}
export interface DictionaryNormalizationResult {
    errorItems: KeyValuePair[];
    items: KeyValuePair[];
}
