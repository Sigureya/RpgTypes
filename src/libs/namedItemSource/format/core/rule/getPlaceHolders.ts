import type { FormatRule } from "./types";

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
