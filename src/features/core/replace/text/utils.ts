export const replaceTextByMap = (
  text: string,
  map: ReadonlyMap<string, string>
): string => {
  const trimedKey = text.trimEnd();
  const value = map.get(trimedKey);
  return !!value ? value.trimEnd() : trimedKey;
};

export const replaceTextByFunction = (
  text: string,
  replaceFn: (key: string) => string | undefined
): string => {
  const trimedKey = text.trimEnd();
  const value = replaceFn(trimedKey);
  return !!value ? value.trimEnd() : trimedKey;
};
