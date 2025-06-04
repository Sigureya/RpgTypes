export interface FormatLookupKeys<T, K> {
  extractMapKey: (data: T) => K; // → FinalFormatEntry を得る
  extractDataId: (data: T) => number; // → Data_NamedItem を得る
}
