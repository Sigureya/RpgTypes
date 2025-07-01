export const structName = (value: string): string => {
  if (value.endsWith(">") && value.startsWith("struct<")) {
    return value.slice(7, -1);
  }
  return "";
};
