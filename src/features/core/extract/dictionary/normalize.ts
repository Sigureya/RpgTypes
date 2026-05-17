import type { KeyValuePair } from "@RpgTypes/libs";

export interface CC {
  errorItems: KeyValuePair[];
  items: KeyValuePair[];
}

export const gg = (source: ReadonlyArray<KeyValuePair>): CC => {
  const normalizedWithSource = source.map((item, index) => ({
    source: item,
    normalized: nnn(item),
    index,
  }));
  const validEntries = normalizedWithSource.filter(({ normalized }) => {
    return normalized.key.length > 0 && normalized.value.length > 0;
  });
  const hasKeyWithTrailingSpace = (key: string): boolean => /\s$/.test(key);
  const conflictIndexes = new Set(
    validEntries
      .map(({ source, index }) => ({ item: source, index }))
      .filter(({ item }) => hasKeyWithTrailingSpace(item.key))
      .filter(({ item, index }) => {
        const normalizedKey = item.key.trimEnd();
        return validEntries.some(
          ({ source: candidate, index: candidateIndex }) => {
            return candidateIndex !== index && candidate.key === normalizedKey;
          },
        );
      })
      .map(({ index }) => index),
  );

  return {
    errorItems: validEntries
      .filter(({ index }) => conflictIndexes.has(index))
      .map(({ source: item }) => item),
    items: validEntries
      .filter(({ index }) => !conflictIndexes.has(index))
      .map(({ normalized }) => normalized),
  };
};

const nnn = (item: KeyValuePair): KeyValuePair => {
  return {
    key: item.key.trimEnd(),
    value: item.value.trimEnd(),
  };
};
