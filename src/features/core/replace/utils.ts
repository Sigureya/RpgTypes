export const replaceTextByMap = (
  text: string,
  map: ReadonlyMap<string, string>
): string => {
  const trimedKey = text.trimEnd();
  const value = map.get(trimedKey);
  return value !== undefined ? value.trimEnd() : trimedKey;
};
