import type { KeyValuePair } from "@RpgTypes/libs";
import type { DictionaryNormalizationResult } from "./types";

interface NormalizedEntry {
  source: KeyValuePair;
  normalized: KeyValuePair;
}

interface PreprocessedEntries {
  validEntries: NormalizedEntry[];
  rawKeys: Set<string>;
}

export const normalizeDictionaryItems = (
  source: ReadonlyArray<KeyValuePair>,
): DictionaryNormalizationResult => {
  const preprocessed = preprocessEntries(source);
  return classifyEntries(preprocessed);
};

const preprocessEntries = (
  source: ReadonlyArray<KeyValuePair>,
): PreprocessedEntries => {
  return source.reduce<PreprocessedEntries>(
    (acc, item) => {
      const normalized = normalizeKeyValuePair(item);
      if (normalized.key.length === 0 || normalized.value.length === 0) {
        return acc;
      }
      acc.validEntries.push({ source: item, normalized });
      acc.rawKeys.add(item.key);
      return acc;
    },
    { validEntries: [], rawKeys: new Set<string>() },
  );
};

const classifyEntries = (
  preprocessed: PreprocessedEntries,
): DictionaryNormalizationResult => {
  return preprocessed.validEntries.reduce<DictionaryNormalizationResult>(
    (acc, entry) => {
      if (
        /\s$/.test(entry.source.key) &&
        preprocessed.rawKeys.has(entry.normalized.key)
      ) {
        acc.errorItems.push(entry.source);
      } else {
        acc.items.push(entry.normalized);
      }
      return acc;
    },
    { errorItems: [], items: [] },
  );
};

const normalizeKeyValuePair = (item: KeyValuePair): KeyValuePair => {
  return {
    key: item.key.trimEnd(),
    value: item.value.trimEnd(),
  };
};
