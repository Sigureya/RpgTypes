import type { FormatItemMapper, FormatRule } from "./core";

export const getDataKeysFromFormatRule = <T>(
  rule: FormatRule<T>
): Set<string & keyof T> => {
  return new Set<string & keyof T>([
    ...(rule.placeHolder?.numbers ?? []),
    ...(rule.placeHolder?.strings ?? []),
    ...(rule.arrayIndex?.map((a) => a.dataIdKey) ?? []),
    ...(rule.itemMappers?.map((m) => m.kindKey) ?? []),
    ...(rule.itemMapper ? [rule.itemMapper.kindKey] : []),
  ]);
};
export const getPlaceHolderKeys = <T>(rule: FormatRule<T>): Set<string> => {
  return new Set<string>([
    ...(rule.placeHolder?.numbers ?? []),
    ...(rule.itemMapper ? [rule.itemMapper.placeHolder] : []),
    ...(rule.itemMappers?.map((mapper) => mapper.placeHolder) ?? []),
  ]);
};

export const getItemMappersFromRule = <T>(
  rule: FormatRule<T>
): ReadonlyArray<FormatItemMapper<T>> => {
  const list = rule.itemMappers ?? [];
  return rule.itemMapper ? [...list, rule.itemMapper] : [...list];
};
