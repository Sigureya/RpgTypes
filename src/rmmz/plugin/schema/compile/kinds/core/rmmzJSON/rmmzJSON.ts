export const numberArray = (text: string): number[] =>
  text
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map((v) => parseInt(v, 10));
