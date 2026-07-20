import type { CustomVariables, CustomVariableSchema } from "./types";

export const createVariables = (
  schema: ReadonlyArray<CustomVariableSchema>,
): CustomVariables => {
  return {
    numbers: createNumberVariables(schema),
    booleans: createBooleanVariables(schema),
  };
};

interface GGG<T> {
  name: string;
  attr: { default: T };
}

const createNumberVariables = (
  schema: readonly CustomVariableSchema[],
): Record<string, Record<string, number>> => {
  const o = schema.map((s): [string, Record<string, number>] => {
    const p: Record<string, number> = nnn(s.variables.numbers);
    return [s.pluginName, p];
  });
  return Object.fromEntries(o);
};

const createBooleanVariables = (
  shhema: readonly CustomVariableSchema[],
): Record<string, Record<string, boolean>> => {
  const o = shhema.map((s): [string, Record<string, boolean>] => {
    const p: Record<string, boolean> = nnn(s.variables.booleans);
    return [s.pluginName, p];
  });
  return Object.fromEntries(o);
};

const nnn = <T>(schema: readonly GGG<T>[]): Record<string, T> => {
  const o = schema.map((s): [string, T] => [s.name, s.attr.default]);
  return Object.fromEntries(o);
};
