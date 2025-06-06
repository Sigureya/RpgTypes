import type { FormatItemMapper, FormatRule, SourceKeyConcept } from "./types";

export const getPlaceHolderKeys = <T>(rule: FormatRule<T>): Set<string> => {
  const set = new Set<string>(rule.placeHolders);
  if (rule.itemMapper) {
    set.add(rule.itemMapper.placeHolder);
  }
  if (rule.itemMappers) {
    rule.itemMappers.forEach((mapper) => {
      set.add(mapper.placeHolder);
    });
  }

  return set;
};

export const getDataKeysFromFormatRule = <T>(
  rule: FormatRule<T>
): Set<string & keyof T> => {
  const set = new Set<string & keyof T>(rule.placeHolders);
  if (rule.itemMapper) {
    set.add(rule.itemMapper.kindKey);
  }
  if (rule.itemMappers) {
    rule.itemMappers.forEach((mapper) => {
      set.add(mapper.kindKey);
    });
  }
  return set;
};

export const getItemMappersFromRule = <T, SoruceKey extends SourceKeyConcept>(
  rule: FormatRule<T, SoruceKey>
): ReadonlyArray<FormatItemMapper<T, SoruceKey>> => {
  const list = rule.itemMappers ?? [];
  return rule.itemMapper ? [...list, rule.itemMapper] : [...list];
};
