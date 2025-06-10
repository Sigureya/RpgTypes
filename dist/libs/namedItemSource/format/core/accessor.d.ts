export interface FormatLookupKeys<T, MapKey> {
    extractMapKey: (data: T) => MapKey;
    extractDataId: (data: T) => number;
    unknownKey: (key: MapKey) => string;
}
