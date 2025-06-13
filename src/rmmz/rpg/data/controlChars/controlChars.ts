export const createControlCharFormat = <C extends string>(
  char: C,
  id: number
) => {
  return `\\${char}[${id}]` as const;
};

export const fromStringArray = <C extends string>(
  char: C,
  array: ReadonlyArray<string>
) => {
  return array.map((text, index) => ({
    text,
    controlChar: createControlCharFormat(char, index),
  }));
};
