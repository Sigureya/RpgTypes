export const processControlCharacter = (
  text: string,
  fn: (ctrl: string) => void,
): number => {
  const regExp = /^[$.|^!><{}\\]|^[A-Z]+/i;
  const matchArray = regExp.exec(text);
  if (!matchArray) {
    return 0;
  }
  fn(matchArray[0].toUpperCase());
  return matchArray[0].length;
};
