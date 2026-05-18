import { CTRL_CHAR_ACTOR, CTRL_CHAR_VARIABLE } from "./constants";
import type { ControlCharInfo } from "./types";

export const createControlCharFormat = <C extends string>(
  char: C,
  id: number,
) => {
  return `\\${char}[${id}]` as const;
};

export const fromStringArray = <C extends string>(
  char: C,
  array: ReadonlyArray<string>,
) => {
  return array.map((text, index) => ({
    text,
    controlChar: createControlCharFormat(char, index),
  }));
};

export const actorNameControlChars = (
  actorNames: ReadonlyArray<string>,
): ControlCharInfo[] => {
  return fromStringArray(CTRL_CHAR_ACTOR, actorNames);
};

export const variabeleValueControlChars = (
  variableNames: ReadonlyArray<string>,
): ControlCharInfo[] => {
  return fromStringArray(CTRL_CHAR_VARIABLE, variableNames);
};
