export interface FormatLookupKeys<T, MapKey> {
  extractMapKey: (data: T) => MapKey; // → FinalFormatEntry を得る
  extractDataId: (data: T) => number; // → Data_NamedItem を得る
  unknownKey: (key: MapKey) => string;
}
