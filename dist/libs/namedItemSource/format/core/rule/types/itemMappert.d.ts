import { PickByType } from '../../../../../templates';
export type SourceKeyConcept = string | number | Record<string, string | number>;
type NumberProperties<T> = Extract<keyof PickByType<T, number>, string>;
interface KindSourcePair<K, SoruceKey extends SourceKeyConcept> {
    kindId: K;
    sourceId: SoruceKey;
}
export interface FormatItemMapper<T, SourceKey extends SourceKeyConcept> {
    placeHolder: string;
    kindKey: NumberProperties<T>;
    dataIdKey: NumberProperties<T>;
    map: KindSourcePair<number, SourceKey>[];
}
export interface FormatItemMapperCompiled<T, SoruceKey extends SourceKeyConcept> {
    placeHolder: `{${string}}`;
    kindKey: NumberProperties<T>;
    dataIdKey: NumberProperties<T>;
    map: KindSourcePair<number, SoruceKey>[];
}
export {};
